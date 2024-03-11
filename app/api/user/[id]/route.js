import Connect from "@/app/db/Connect";
import User from "@/app/db/models/User";
import { NextResponse } from "next/server";

export const GET = async(req,content)=>{
    const id = content.params.id
    await Connect();
    const record = {_id: id}
    try {
        let data = await User.findById({_id: id})
        // data = await data.json();
        return NextResponse.json({data})
    } catch (error) {
        return NextResponse.json({error})
    }
}