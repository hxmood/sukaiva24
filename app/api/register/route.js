import User from "@/models/registration"
import connectMongoDB from "@/utils/database"
import { NextResponse } from "next/server"
import bcrypt from "bcryptjs"

export const POST = async (req) => {
    const {name, email, password} = await req.json()
    try {
        await connectMongoDB()
        const hashed = await bcrypt.hash(password, 10)
        
        await User.create({name, email, password: hashed})
        return NextResponse.json("successfully registered")
    } catch (error) {
        console.log(error);
    }
}