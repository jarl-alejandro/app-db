import ComponentSchema from "../../../../models/customer";
import { dbConnect } from "../../../../lib/monoose";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  dbConnect();
  try {
    const studyFound = await ComponentSchema.findById(params.id);

    if (!studyFound)
      return NextResponse.json(
        {
          message: "ComponentSchema not found",
        },
        {
          status: 404,
        }
      );

    return NextResponse.json(studyFound);
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
    const studyUpdated = await ComponentSchema.findByIdAndUpdate(params.id, body, {
      new: true,
    });

    if (!studyUpdated)
      return NextResponse.json(
        {
          message: "not found",
        },
        {
          status: 404,
        }
      );

    return NextResponse.json(studyUpdated);
  } catch (error) {
    return NextResponse.json(error.message, {
      status: 400,
    });
  }
}

export async function DELETE(request, { params }) {
  dbConnect();

  try {
    const dateled = await ComponentSchema.findByIdAndDelete(params.id);

    if (!dateled)
      return NextResponse.json(
        {
          message: "not found",
        },
        {
          status: 404,
        }
      );

    return NextResponse.json(dateled);
  } catch (error) {
    return NextResponse.json(error.message, {
      status: 400,
    });
  }
}
