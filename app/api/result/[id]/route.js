import Connect from "@/app/db/Connect"
import Result from "@/app/db/models/Result";
import { NextResponse } from "next/server"

export const GET = async(req,content)=>{
    const id = content.params.id
    await Connect();
    const record = {_id: id}
    try {
        let data = await Result.findById({_id: id}).populate("user")
        // data = await data.json();
        data = data
        return NextResponse.json({data})
    } catch (error) {
        return NextResponse.json({error})
    }
}


export const DELETE = async(req,content)=>{
    await Connect();
    let data = content.params.id;
    console.log(data);
    const id = data
    const record = { _id:id }

    try {
        let result = await Result.deleteOne(record);
        return NextResponse.json({result,message:"Deleted Successfully",success:true})
    } catch (error) {
        return NextResponse.json({error,success:false})
    }

}

export const PUT=async(req, content)=>{
    await Connect();
    const id = content.params.id;
    const newid = {_id: id}
    console.log(newid);
    const record = await req.json();
    console.log(record);
    try {
        let data = await Result.findOneAndUpdate(newid,record)
        return NextResponse.json({message:"Data Updated!!"})
    } catch (error) {
        return NextResponse.json({"message":error.message})
    }
}