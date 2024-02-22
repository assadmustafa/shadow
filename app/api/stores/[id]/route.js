import Store from "../../../models/store";
import connectMongoDB from "../../../libs/mongodb"
import { NextResponse } from "next/server";

export async function PUT(request, {params}) {
    const {id} = params;
    const {newName:name, newLocation:location} = await request.json();
    await connectMongoDB();
    await Store.findByIdAndUpdate(id,{name,location});
    return NextResponse.json({message:"Store Updated"},{status:200});
}

export async function GET(request, {params}){
    const {id} = params;
    await connectMongoDB();
    const store = await Store.findOne({_id: id});
    return NextResponse.json({store},{status:200});
}