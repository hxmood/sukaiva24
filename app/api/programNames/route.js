import resultModels from "@/models/result";
import connectMongoDB from "@/utils/database";
import { NextResponse } from "next/server";

export const GET = async (req) => {
    await connectMongoDB();
    try {
        const programNames = await resultModels.distinct('res');
        return NextResponse.json(programNames)


    } catch (error) {
        return NextResponse.json({message: "failed to fetch results"}, {status: 500})
    }
}