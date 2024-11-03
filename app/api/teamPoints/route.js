import resultModels from "@/models/result";
import connectMongoDB from "@/utils/database";
import { NextResponse } from "next/server";

export const POST = async () => {
    await connectMongoDB()
}

export const GET = async(req) => {
    try {
        await connectMongoDB()
        const results = await resultModels.find({})

        const totalPoints = {
            "De Zegians": 0,
            "Le Hegians" : 0,
            "En Shugians" : 0
        }

            results.forEach((result) => {
                totalPoints[result.first.team] += result.first.marks,
                totalPoints[result.second.secTeam] += result.second.secMarks,
                totalPoints[result.third.thrTeam] += result.third.thrMarks,
                result.anotherGrades.forEach((result) => {
                    totalPoints[result.addTeam] += result.addMarks
                })
            })

        return NextResponse.json(totalPoints)
    } catch (error) {
        return NextResponse.json({message: 'failed to calculate team points'}, {status: 500})
    }
}