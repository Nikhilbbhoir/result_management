import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request) {
  
    let path = request.nextUrl.pathname;

    const isPublicPath = path === '/' || path === '/register'|| path ==='/admin/login' || path === '/admin/register'
    const isPrivatePath = path === '/admin' || path === '/admin/result/manage' || path === '/admin/result/add'
    
    const token = request.cookies.get('token') || ""
    const admintoken = request.cookies.get('admintoken') || ""

    if(isPublicPath && token && !admintoken){
        return NextResponse.redirect(new URL("/dashboard", request.nextUrl))
    }
    if(isPublicPath && !token && admintoken){
        return NextResponse.redirect(new URL("/admin", request.nextUrl))
    }
    if(!isPublicPath && !token && !admintoken){
        return NextResponse.redirect(new URL("/", request.nextUrl))
    }
   
    // if(!isPublicPath && !admintoken){
    //     return NextResponse.redirect(new URL("/admin/login", request.nextUrl))
    // }
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/','/register','/dashboard','/logout',
  '/admin','/admin/login','/admin/register','/admin/logout'
],
}