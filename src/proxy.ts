import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const ALLOWED_ORIGINS = process.env.NODE_ENV === 'production' 
  ? ['https://saasmotion.com', 'https://www.saasmotion.com'] 
  : ['http://localhost:3000'];

export async function proxy(request: NextRequest) {
  const response = NextResponse.next();
  const origin = request.headers.get('origin');
  const isApiRoute = request.nextUrl.pathname.startsWith('/api/');

  if (isApiRoute) {
    if (origin && !ALLOWED_ORIGINS.includes(origin)) {
      return new NextResponse(null, {
        status: 403,
        statusText: "Forbidden",
        headers: { 'Content-Type': 'text/plain' },
      });
    }

    if (origin) {
      response.headers.set('Access-Control-Allow-Origin', origin);
      response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
      response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
      response.headers.set('Access-Control-Max-Age', '86400');
    }
  }

  if (request.method === 'OPTIONS') {
    return response;
  }

  if (process.env.NODE_ENV === 'production' && request.nextUrl.pathname.match(/^\/(api-docs|docs|swagger|redoc)/)) {
    return NextResponse.json({ error: 'Not Found' }, { status: 404 });
  }

  return response;
}

export const config = {
  matcher: ['/api/:path*', '/docs/:path*', '/swagger/:path*'],
};
