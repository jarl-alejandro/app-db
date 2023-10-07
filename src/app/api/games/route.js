import Game from "../../../models/game";
import { dbConnect } from "../../../lib/monoose";
import { NextResponse } from "next/server";


export async function GET() {
  await dbConnect();
  const games = await Game.find();
  return NextResponse.json(games);
}

export async function POST(request) {
  try {
    const body = await request.json();
    console.log(JSON.stringify(body))
    const newGame = new Game(body);
    const savedGame = await newGame.save();

    return NextResponse.json(savedGame);
  }
  catch (error) {
    return NextResponse.json(error.message, {
      status: 400,
    });
  }
}
