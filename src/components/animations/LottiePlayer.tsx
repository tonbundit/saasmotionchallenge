"use client";

import dynamic from 'next/dynamic';
import type { LottieComponentProps } from 'lottie-react';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

interface LottiePlayerProps extends Omit<LottieComponentProps, 'animationData'> {
  animationData: unknown;
  className?: string;
}

export function LottiePlayer({ animationData, className = "", loop = true, autoplay = true, ...props }: LottiePlayerProps) {
  if (!animationData) return null;

  return (
    <div className={`w-full h-full flex items-center justify-center ${className}`}>
      <Lottie 
        animationData={animationData} 
        loop={loop} 
        autoplay={autoplay} 
        {...props} 
      />
    </div>
  );
}
