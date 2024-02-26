import Connect from "@/app/db/Connect"
import User from "@/app/db/models/User";
import { NextResponse } from "next/server";

export const GET = async ()=>{
    await Connect();
    try {
        let data = await User.find();
        return NextResponse.json({data})
    } catch (error) {
        return NextResponse.json({error: error.message})
    }
}

