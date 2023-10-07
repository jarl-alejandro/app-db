import { dbConnect } from "../../../lib/monoose";
import { GameCard } from "../../../components/GameCard";
import { Navbar } from "../../../components/NavbarCrud";
import Game from "../../../models/game";

export async function loadGames() {
  await dbConnect();
  const games = await Game.find();
  return games;
}

export default async function HomePage() {
  const games = await loadGames();

  return (
    <div>
        <Navbar datos={'game'}/>
        <div className="grid md:grid-cols-3 gap-2">
        {games.map((game) => (
            <GameCard game={game} key={game._id} />
        ))}
        </div>
    </div>
  );
}
