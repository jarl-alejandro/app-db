import Link from "next/link";

export function StudyCard({ study }) {
  return (
    <Link href={`/store/study/${study._id}`}>
      <div className="bg-gray-800 p-2 m-2 text-white rounded-md hover:cursor-pointer hover:bg-gray-700">
        <h1 className="text-2xl font-bold">{study.name}</h1>
        
        <p className="text-slate-300">
        Sitio web: {study.site}
        </p>

        <p className="text-slate-400 my-2">
          <span className="mr-1">Registrado:</span>
          {new Date(study.createdAt).toLocaleDateString()}
        </p>

      </div>
    </Link>
  );
}

export default StudyCard;
