import Connect from "@/app/db/Connect";
import User from "@/app/db/models/User";
import { genSalt, hash } from "bcryptjs";
import { NextResponse } from "next/server";

export const POST = async(req)=>{
    await Connect();

    let records = await req.json();
    let {name,fathername,school,roll,contact,email,password,className} = records;

    let salt = await genSalt(10);
    const hashedPassword = await hash(password,salt)

    let data = new User({
        name,fathername,school,roll,contact,email,password:hashedPassword,className
    })
    try {
        data = await data.save();
        return NextResponse.json({message:"User account created successfully",data})
    } catch (error) {
        return NextResponse.json({message:error.message})
    }

}