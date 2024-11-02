// pages/api/getTotalPoints.js
import connectMongoDB from "@/utils/database";
import pointsModel from "@/models/totalPoints";
import { NextResponse } from "next/server";

export const POST = async () => {
  await connectMongoDB()
}

export const GET = async (req) => {
  try {
    await connectMongoDB();

    const results = await pointsModel.find({});

    const totalPoints = results.reduce((acc, result) => {
      acc[result.team] = (acc[result.team] || 0) + result.points;
      return acc;
    }, {});

    return NextResponse.json(totalPoints)
  } catch (error) {
    return NextResponse.json({ message: "not working" }, { status: 500 });
  }
};
