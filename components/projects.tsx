import PersonalProjects from "./personal-projects";
import SchoolProjects from "./school-projects";
import StudentClubProjects from "./student-club-projects";

export default function Projects() {
  return (
    <div className="max-w-2xl mx-auto px-6 pb-24 flex flex-col gap-20">
      <section id="verv">
        <h2 className="font-bold text-2xl pb-3 border-b-2 mb-8">Verv</h2>
        <StudentClubProjects />
      </section>
      <section id="sideprosjekter">
        <h2 className="font-bold text-2xl pb-3 border-b-2 mb-8">Prosjekter</h2>
        <PersonalProjects />
      </section>
      <section id="skoleprosjekter">
        <h2 className="font-bold text-2xl pb-3 border-b-2 mb-8">Skoleprosjekter</h2>
        <SchoolProjects />
      </section>
    </div>
  );
}
