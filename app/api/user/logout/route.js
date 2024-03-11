import Connect from "@/app/db/Connect"
import { NextResponse } from "next/server"

export const GET = async(req)=>{
    await Connect();
    const response = NextResponse.json({message:"Logout Success",success:true})
   
    response.cookies.set("token","",{
        httpOnly:true,
        expires:new Date(0)
    });
    
    return response
}