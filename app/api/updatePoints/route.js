// pages/api/updatePoints.js
import connectMongoDB from "@/utils/database";
import pointsModel from "@/models/totalPoints";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await connectMongoDB()
    const response = await pointsModel.find()
    return NextResponse.json(response)
  } catch (error) {
    return NextResponse({message: "failed to fetch points"})
  }

}

export const PUT = async (req) => {
  try {
    await connectMongoDB();
    const { team, points } = await req.json();

    const result = await pointsModel.findOneAndUpdate(
      { team: team },
      { $set: { points: points } },
    );

    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({message:"failed to update"}, { status: 500 });
  }
};
