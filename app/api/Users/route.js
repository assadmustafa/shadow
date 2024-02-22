import User from "../../(models)/User";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(req){
    try {
        const body = await req.json()
        const userData = body.formData

        // Confirm data exists
        if (!userData.email ||!userData.password) {
            return NextResponse.json({message: "Some fields are required"}, {status: 400});
        }

        // Check if user already exists
        const user = await User.findOne({email: userData.email}).lean().exec();
        if (user) {
            return NextResponse.json({message: "User already exists"}, {status: 409});
        }
        
        // Hash password
        const hashedPassword = await bcrypt.hash(userData.password, 10);
        userData.password = hashedPassword;

        // Create user
        await User.create(userData)
        return NextResponse.json({message: "User Created Successfully."}, {status: 201});

    } catch (error) {
        console.log(error)
        return NextResponse.json({message: "Error",error}, {status: 500});
    }
}