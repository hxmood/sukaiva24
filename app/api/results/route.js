import resultModels from "@/models/result";
import connectMongoDB from "@/utils/database";
import { NextResponse } from "next/server";

// POST method for uploading results
export const POST = async (req) => {
  try {
    const { res, category, first, second, third, anotherGrades } = await req.json();
    await connectMongoDB();
    await resultModels.create({
        res, category, first, second, third, anotherGrades
    })
    return NextResponse.json({message: "results posted to database"}, {status: 200})

  } catch (error) {
    console.error("Error:", error);
    return NextResponse({message: "failed to post results to database"}, {status: 500})
  }
};

// // GET method of for fetching results
export const GET = async (req) => {
  await connectMongoDB();    
  try {
    await connectMongoDB();
    const results = await resultModels.find();
    return NextResponse.json(results)


  } catch (error) {
    return NextResponse.json({message: "failed to fetch results"}, {status: 500})
  }
}

