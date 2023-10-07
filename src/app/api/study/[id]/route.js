import Study from "../../../../models/study";
import { dbConnect } from "../../../../lib/monoose";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  dbConnect();
  try {
    const studyFound = await Study.findById(params.id);

    if (!studyFound)
      return NextResponse.json(
        {
          message: "Study not found",
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
    const studyUpdated = await Study.findByIdAndUpdate(params.id, body, {
      new: true,
    });

    if (!studyUpdated)
      return NextResponse.json(
        {
          message: "Study not found",
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
    const studyDeleted = await Study.findByIdAndDelete(params.id);

    if (!studyDeleted)
      return NextResponse.json(
        {
          message: "Study not found",
        },
        {
          status: 404,
        }
      );

    return NextResponse.json(studyDeleted);
  } catch (error) {
    return NextResponse.json(error.message, {
      status: 400,
    });
  }
}