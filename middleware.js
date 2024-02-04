import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request) {
    if (request.nextUrl.pathname.startsWith('/api/login')) {
        const responce = NextResponse.next()
        responce.cookies.set('token','password9999')
        return NextResponse.json({ 
            message: 'เข้าสู่ระบบเรียบร้อย'
        })
    }
     
    if (request.nextUrl.pathname.startsWith('/admin')) {
        const token = request.cookies.get('token') || null
        if (!token) {
            return NextResponse.redirect(new URL('/', request.url))
        } else {
            return NextResponse.next()
        }
    }
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/admin/:path*','/api/login'],
}