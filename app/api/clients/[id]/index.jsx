import { NextResponse } from "next/server";
import connectMongoDB from "../../../lib/mongodb";
import Client from "../../../models/client";

export async function POST(request) {
    const {name, address, postcode, city,clientNumber,avatarUrl} = await request.json();
    await connectMongoDB();
    await Client.create({name,address, postcode, city,clientNumber,avatarUrl});
    return NextResponse.json({message:"Client Added"},{status:201});
}

export async function GET() {
    await connectMongoDB();
    const clients = await Client.find();
    return NextResponse.json({clients});
}

export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Client.findByIdAndDelete(id);
    return NextResponse.json({message: "Client Deleted"},{status: 200});
}