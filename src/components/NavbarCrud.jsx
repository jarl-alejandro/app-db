import Link from "next/link";

export const Navbar = ({datos}) => {
  return (
    <nav className="bg-gray-950 py-5 mb-2">
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
            <div className="flex items-center">
                <ul className="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
                    <li>
                        <Link href={`/store/${datos}/new`} className="text-gray-300 dark:text-white hover:underline" aria-current="page">
                            <h1 className="text-2xl font-bold">Agregar</h1>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  );
};
