import Category from "../../../../models/category";
import { dbConnect } from "../../../../lib/monoose";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  dbConnect();
  try {
    const categoryFound = await Category.findById(params.id);

    if (!categoryFound)
      return NextResponse.json(
        {
          message: "Category not found",
        },
        {
          status: 404,
        }
      );

    return NextResponse.json(categoryFound);
  } catch (error) {
    return NextResponse.json(error.message, {
      status: 400,
    });
  }
}

export async function PUT(request, { params }) {
  const body = await request.json();
  dbConnect();

  try {
    const categoryUpdated = await Category.findByIdAndUpdate(params.id, body, {
      new: true,
    });

    if (!categoryUpdated)
      return NextResponse.json(
        {
          message: "Category not found",
        },
        {
          status: 404,
        }
      );

    return NextResponse.json(categoryUpdated);
  } catch (error) {
    return NextResponse.json(error.message, {
      status: 400,
    });
  }
}

export async function DELETE(request, { params }) {
  dbConnect();

  try {
    const categoryDeleted = await Category.findByIdAndDelete(params.id);

    if (!categoryDeleted)
      return NextResponse.json(
        {
          message: "Category not found",
        },
        {
          status: 404,
        }
      );

    return NextResponse.json(categoryDeleted);
  } catch (error) {
    return NextResponse.json(error.message, {
      status: 400,
    });
  }
}