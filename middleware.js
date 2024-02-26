import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request) {
  
    let path = request.nextUrl.pathname;

    const isPublicPath = path === '/' || path === '/register'
    
    const token = request.cookies.get('token') || ""

    if(isPublicPath && token){
        return NextResponse.redirect(new URL("/dashboard", request.nextUrl))
    }
    if(!isPublicPath && !token){
        return NextResponse.redirect(new URL("/", request.nextUrl))
    }
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/','/register','/dashboard'],
}