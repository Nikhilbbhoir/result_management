import Connect from "@/app/db/Connect"
import Admin from "@/app/db/models/Admin";
import bcrypt from "bcryptjs/dist/bcrypt";
import JWT from "jsonwebtoken";
import { NextResponse } from "next/server";

export const POST = async(req)=>{
    await Connect();
    let record = await req.json();
    const {username, password} = record;

    try {
        const admin = await Admin.findOne({username});

        if(!admin){
            return NextResponse.json({message: "Invalid username"},{status:400})
        }
        const validPassowrd = await bcrypt.compare(password, admin.password)

        if(!validPassowrd){
            return NextResponse.json({message:"Invalid Password"},{status:400})
        }
        // creating token 
        const tokenData = {
            id:admin._id,
            username: admin.username
        }
        const token = await JWT.sign(tokenData, process.env.SECRET_KEY, {expiresIn:"1h"})
        const response = NextResponse.json({message:"Login Success",success:true})

        response.cookies.set("token",token,{
            httpOnly:true
        })
        return response

    } catch (error) {
        return NextResponse.json({message: error.message})
    }
}