import afterPoints from "@/models/afterresults"
import connectMongoDB from "@/utils/database"
import { NextResponse } from "next/server"

export const POST = async (req) => {
    const {after} = await req.json()
    try {
        await connectMongoDB()
        await afterPoints.create({
            after
        })
        return NextResponse.json("afterPOints posted to database")
    } catch (error) {
        return NextResponse.json("failed to post afterPoints", {status: 500})
    }
}

// --------------------------------------------------------------

export const GET = async (req) => {
    try {
        const response = await afterPoints.find()
        return NextResponse.json(response)
    } catch (error) {
        return NextResponse.json("failed to fetch points", {status: 500})
    }
}

// ---------------------------------------------------------------

export const PUT = async (req) => {
    const {after} = await req.json()
    await connectMongoDB()
    try {
        const response = await afterPoints.findOneAndUpdate({
             after
        })

        return NextResponse.json(response)
        console.log(response);
        
    } catch (error) {
        return NextResponse.json("failed to update the afterPoints", {status: 500})
    }
}