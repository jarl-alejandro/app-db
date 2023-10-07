import Link from "next/link";

export default  function Card({ id, name, url, children }: { id: string, name: string, url: string, children: React.ReactNode }) {
  return (
    <Link href={`/store/${url}/${id}`}>
      <div className="bg-gray-800 p-2 m-2 text-white rounded-md hover:cursor-pointer hover:bg-gray-700">
        <h1 className="text-2xl font-bold">{name}</h1>

        {children}

      </div>
    </Link>
  );
}

