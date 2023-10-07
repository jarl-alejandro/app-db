import ComponentSchema from "../../../models/customer";
import { dbConnect } from "../../../lib/monoose";
import { NextResponse } from "next/server";


export async function GET() {
  await dbConnect();
  const data = await ComponentSchema.find();
  return NextResponse.json(data);
}

export async function POST(request) {
  try {
    const body = await request.json();

    const newItem = new ComponentSchema(body);
    const saveItem = await newItem.save();
    return NextResponse.json(saveItem);

  } catch (error) {
    return NextResponse.json(error.message, {
      status: 400,
    });
  }
}
