import Connect from "@/app/db/Connect"
import User from "@/app/db/models/User";
import bcrypt from "bcryptjs/dist/bcrypt";
import JWT from "jsonwebtoken";
import { NextResponse } from "next/server";

export const POST = async(req)=>{
    await Connect();
    let record = await req.json();
    const {email, password} = record;

    try {
        const user = await User.findOne({email});

        if(!user){
            return NextResponse.json({message: "Invalid Email"},{status:400})
        }
        const validPassowrd = await bcrypt.compare(password, user.password)

        if(!validPassowrd){
            return NextResponse.json({message:"Invalid Password"},{status:400})
        }
        // creating token 
        const tokenData = {
            id:user._id,
            email: user.email
        }
        const token = JWT.sign(tokenData, process.env.SECRET_KEY, {expiresIn:"1h"})
        const response = NextResponse.json({message:"Login Success",success:true})

        response.cookies.set("token",token,{
            httpOnly:true
        })
        return response

    } catch (error) {
        return NextResponse.json({message: error.message})
    }
}

