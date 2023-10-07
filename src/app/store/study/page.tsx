import { dbConnect } from "../../../lib/monoose";
import { StudyCard } from "../../../components/StudyCard";
import { Navbar } from "../../../components/NavbarCrud"
import Study from "../../../models/study";

export async function loadstudies() {
  await dbConnect();
  const studies = await Study.find();
  return studies;
}

export default async function StudyPage() {
  const studies = await loadstudies();

  return (
    <div>
        <Navbar datos={'study'}/>
        <div className="gap-2">
        {studies.map((study) => (
            <StudyCard study={study} key={study._id} />
        ))}
        </div>
    </div>
  );
}
