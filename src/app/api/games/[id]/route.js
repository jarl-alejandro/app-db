import Game from "../../../../models/game";
import { dbConnect } from "../../../../lib/monoose";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  dbConnect();
  try {
    const gameFound = await Game.findById(params.id);

    if (!gameFound) {
      return NextResponse.json(
          {
            message: "Game not found",
          },
          {
            status: 404,
          }
      );
    }


    return NextResponse.json(gameFound);
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
    const gameUpdated = await Game.findByIdAndUpdate(params.id, body, {
      new: true,
    });

    if (!gameUpdated)
      return NextResponse.json(
        {
          message: "Game not found",
        },
        {
          status: 404,
        }
      );

    return NextResponse.json(gameUpdated);
  } catch (error) {
    return NextResponse.json(error.message, {
      status: 400,
    });
  }
}

export async function DELETE(request, { params }) {
  dbConnect();

  try {
    const gameDeleted = await Game.findByIdAndDelete(params.id);

    if (!gameDeleted)
      return NextResponse.json(
        {
          message: "Game not found",
        },
        {
          status: 404,
        }
      );

    return NextResponse.json(gameDeleted);
  } catch (error) {
    return NextResponse.json(error.message, {
      status: 400,
    });
  }
}
