import { NextResponse } from "next/server";
import connectMongoDB from "../../libs/mongodb";
import Store from "../../models/store";

export async function POST(request) {
    const {name, location} = await request.json();
    await connectMongoDB();
    await Store.create({name,location});
    return NextResponse.json({message:"Store Added"},{status:201});
}

export async function GET() {
    await connectMongoDB();
    const stores = await Store.find();
    return NextResponse.json({stores});
}



export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Store.findByIdAndDelete(id);
    return NextResponse.json({message: "Store Deleted"},{status: 200});
}