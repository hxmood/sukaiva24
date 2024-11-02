import connectMongoDB from "@/utils/database";
import resultModels from "@/models/result";
import { NextResponse } from "next/server";

export const GET = async (req) => {
    await connectMongoDB();
    const programName = req.nextUrl.searchParams.get('programName');
    const category = req.nextUrl.searchParams.get('category');

    try {
      const filteredResult = await resultModels.findOne({ res: programName, category: category }) 
       
      if (!filteredResult) {
        // If no result is found, handle it
        return NextResponse.json({ success: false, message: "No results found" }, { status: 404 });
      }
  
      // If data is found, return it
      return NextResponse.json({ success: true, data: filteredResult });
  
  
    } catch (error) {
      return NextResponse.json({message: "failed to fetch results"}, {status: 500})
    }
  }

  export const POST = async (req) => {
  
    await connectMongoDB()
    
      const { res, category } = req.body;
      console.log(res, category);
      
  
      try {
        const filteredResult = await resultModels.find({
          res: res,
          category: category,
        }).toArray();
  
        return NextResponse.json(filteredResult)
        
        console.log(filteredResult);
    } catch (error) {
        return NextResponse.json({message: "failed to fetch results"}, {status: 500})
      }
    
  }