import Link from "next/link";

export function CategoryCard({ category }) {
  return (
    <Link href={`/store/category/${category._id}`}>
      <div className="bg-gray-800 p-2 m-2 text-white rounded-md hover:cursor-pointer hover:bg-gray-700">
        <h1 className="text-2xl font-bold">{category.name}</h1>

        <p className="text-slate-400 my-2">
          <span className="mr-1">Registrado:</span>
          {new Date(category.createdAt).toLocaleDateString()}
        </p>

      </div>
    </Link>
  );
}

export default CategoryCard;