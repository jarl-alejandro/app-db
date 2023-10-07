import Study from "../../../models/study";
import { dbConnect } from "../../../lib/monoose";
import { NextResponse } from "next/server";


export async function GET() {
    await dbConnect();
    const studys = await Study.find();
    return NextResponse.json(studys);
  }

  export async function POST(request) {
    try {
      const body = await request.json();
      console.log(JSON.stringify(body))
      const newStudy = new Study(body);
      const savedStudy = await newStudy.save();
      return NextResponse.json(savedStudy);
    } catch (error) {
      return NextResponse.json(error.message, {
        status: 400,
      });
    }
  }
