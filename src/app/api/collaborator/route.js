import ComponentSchema from "../../../models/collaborator";
import { dbConnect } from "../../../lib/monoose";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";


export async function GET() {
    await dbConnect();
    try {
      const data = await ComponentSchema.find({ email: { $ne: 'superadmin@store.com' }});
      return NextResponse.json(data);
    } catch (e) {
      return NextResponse.json([]);
    }
  }

  export async function POST(request) {
    try {
      const body = await request.json();
      body.password = await bcrypt.hash(body.password,10);
      const newItem = new ComponentSchema(body);
      const saveItem = await newItem.save();
      return NextResponse.json(saveItem);
    } catch (error) {
      return NextResponse.json(error.message, {
        status: 400,
      });
    }
  }
