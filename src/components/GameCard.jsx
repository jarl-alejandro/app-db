import Link from "next/link";

export function GameCard({ game }) {
  return (
    <Link href={`/store/game/${game._id}`}>
      <div className="bg-gray-800 p-10 text-white rounded-md hover:cursor-pointer hover:bg-gray-700">
        <h1 className="text-2xl font-bold">{game.title}</h1>

        <p className="text-slate-300">
            <span className="mr-1">Creado por:</span>
            {game.developed_by}
        </p>

        <p className="text-slate-300">
        <span className="mr-1">Edad permitida:</span>
        {game.minimum_age}
        <span className="mr-1"> Años</span>
        </p>

        <p className="text-slate-400 my-2">
          <span className="mr-1">Registrado:</span>
          {new Date(game.createdAt).toLocaleDateString()}
        </p>

      </div>
    </Link>
  );
}

export default GameCard;