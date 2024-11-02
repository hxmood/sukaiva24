import User from "@/models/registration"
import connectMongoDB from "@/utils/database"
import { NextResponse } from "next/server"

export const POST = async(req) => {
    try {
        await connectMongoDB()
        const {email} = await req.json()
        const user = await User.findOne({email}).select("_id")
        console.log(user);
        return NextResponse.json({user})
    } catch (error) {
        console.log(error);
    }
}

