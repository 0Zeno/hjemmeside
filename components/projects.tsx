import PersonalProjects from "./personal-projects";
import SchoolProjects from "./school-projects";
import StudentClubProjects from "./student-club";
import Work from "./work";

export default function Projects() {
  return (
    <div className=" pt-16 pb-24 flex flex-col gap-20">
      <section id="work">
        <h2 className="font-bold text-2xl pb-3 border-b-2 mb-8">Jobb</h2>
        <Work />
      </section>
      <section id="verv">
        <h2 className="font-bold text-2xl pb-3 border-b-2 mb-8">Verv</h2>
        <StudentClubProjects />
      </section>
      <section id="sideprosjekter">
        <h2 className="font-bold text-2xl pb-3 border-b-2 mb-8">Prosjekter</h2>
        <PersonalProjects />
      </section>
      <section id="skoleprosjekter">
        <h2 className="font-bold text-2xl pb-3 border-b-2 mb-8">
          Skoleprosjekter
        </h2>
        <SchoolProjects />
      </section>
    </div>
  );
}
