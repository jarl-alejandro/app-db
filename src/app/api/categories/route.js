import Category from "../../../models/category";
import { dbConnect } from "../../../lib/monoose";
import { NextResponse } from "next/server";


export async function GET() {
    await dbConnect();
    const categories = await Category.find();
    return NextResponse.json(categories);
  }

export async function POST(request) {
    try {
      const body = await request.json();
      const newCategory = new Category(body);
      const savedCategory = await newCategory.save();
      return NextResponse.json(savedCategory);
    } catch (error) {
      return NextResponse.json(error.message, {
        status: 400,
      });
    }
}
