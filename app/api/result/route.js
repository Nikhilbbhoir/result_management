import Connect from "@/app/db/Connect"
import Result from "@/app/db/models/Result";
import { ReducerType } from "@reduxjs/toolkit";
import { NextResponse } from "next/server";

export const GET =async()=>{
    await Connect();

    try {
        let data = await Result.find({}).populate("user");
        return NextResponse.json({data})
    } catch (error) {
        console.log(error)
        return NextResponse.json({"message":error.message})
    }
}

export const POST =async(req)=>{
    await Connect();
    const records = await req.json();
    console.log(records)
    let data = new Result(records)
    try {
        data = await data.save();
        return NextResponse.json({data,message:"Result Inserted Sucessfully"})
    } catch (error) {
        return NextResponse.json({message:error.message})
    }
}
