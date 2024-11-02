// GET

import resultModels from "@/models/result";
import connectMongoDB from "@/utils/database";
import { NextResponse } from "next/server";

export const GET = async (req, {params}) => {
  try {

    await connectMongoDB();
    const results = await resultModels.findById(params.id);
    if (!results) {
        return NextResponse({message:"prompt not found"}, {status: 404})
    }
    return NextResponse(results);

  } catch (error) {
    return NextResponse({message:"failed to fetch results"},{status:500})
  }
}

// PATCH
export const PATCH = async (req, {params}) => {
    const {item, category, name, team, grade, marks, secName, secTeam, secGrade, secMarks, thrName, thrTeam, thrGrade, thrMarks} = await req.json()

    try {
        await connectMongoDB()
        const result = await resultModels.findById(params.id)
        if (!result) {
            return new Response("prompt not found", {status: 404})
        }

        result.res = item;
        result.category = category;
        result.first.name = name;
        result.first.team = team;
        result.first.grade = grade;
        result.first.marks = marks;
        result.second.secName = secName;
        result.second.secTeam = secTeam;
        result.second.secGrade = secGrade;
        result.second.secMarks = secMarks;
        result.third.thrName = thrName;
        result.third.thrTeam = thrTeam;
        result.thrid.thrGrade = thrGrade;
        result.thid.thrMarks = thrMarks

        await result.save()

        return NextResponse.json(result)

    } catch (error) {
        return NextResponse.json({message:"failed to fetch"} ,{status: 500})
    }
}


//DELETE 

export const DELETE = async(req, {params}) => {
    try {
        await connectMongoDB()

        await resultModels.findByIdAndRemove(params.id)

        return NextResponse.json({message:"successfully deleted"}, {status: 201})
    } catch (error) {
        return NextResponse.json({message:"failed to delete"}, {status: 500})
    }
}