# วิธีการตั้งค่า Google Client ID & Client Secret สำหรับ Supabase

การเปิดใช้งาน Google Login ต้องทำ 2 ส่วนหลักๆ คือที่ **Google Cloud Console** และ **Supabase Dashboard** ครับ

## ส่วนที่ 1: Google Cloud Console

1.  ไปที่ [Google Cloud Console](https://console.cloud.google.com/)
2.  **สร้างโปรเจกต์ใหม่** (หรือเลือกโปรเจกต์เดิมที่มีอยู่)
3.  ไปที่เมนู **APIs & Services > OAuth consent screen**
    *   เลือก **External** และกด **Create**
    *   กรอกข้อมูลพื้นฐาน (App name, User support email, Developer contact info) แล้วกด Save and Continue จนจบ
4.  ไปที่เมนู **APIs & Services > Credentials**
5.  กด **+ Create Credentials** และเลือก **OAuth client ID**
6.  เลือก Application type เป็น **Web application**
7.  **Authorized JavaScript origins:**
    *   ใส่ URL ของโปรเจกต์คุณ (เช่น `http://localhost:5500` ถ้าทดสอบในเครื่อง หรือ URL ของเว็บที่ Deploy แล้ว)
8.  **Authorized redirect URIs:**
    *   นำ **Callback URL** จาก Supabase มาใส่ (ดูวิธีหาลิงก์ในส่วนที่ 2 ข้อ 2)
    *   ลิงก์มักจะอยู่ในรูปแบบ: `https://[YOUR_PROJECT_ID].supabase.co/auth/v1/callback`
9.  กด **Create** แล้วคุณจะได้รับ **Your Client ID** และ **Your Client Secret** ครับ

## ส่วนที่ 2: Supabase Dashboard

1.  ในเมนู Supabase ของคุณ ไปที่ **Authentication > Providers**
2.  หา **Google** และกดขยายเมนูออกมา (จะเห็น **Callback URL** ที่ต้องเอาไปใส่ใน Google Cloud)
3.  กด **Enable**
4.  สลับไปใส่ **Client ID** และ **Client Secret** ที่ได้จาก Google Cloud
5.  ติ๊กเลือก **Skip nonce check** (กรณีใช้กับ Static HTML ทั่วไป)
6.  กด **Save** เป็นอันเรียบร้อยครับ

---
### ⚠️ ข้อควรระวัง
*   อย่าลืม **Save** หลังจากใส่ค่าใน Supabase
*   หากรันบน Localhost อย่าลืมใส่ `http://localhost:[port]` ใน Authorized origins ด้วยครับ
