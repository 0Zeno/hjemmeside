const groupProjects = [
  {
    projectname: "echo Webkom",
    role: "Styremedlem",
    start: "Semptember 2023",
    end: "d.d.",
    discription:
      "Webkom er en undergruppe av echo som drifter og videreutvikler echo sine webløsninger. Her bidrar jeg med utvikling av nettsiden og en inforskjerm på lesesalen. I perioden Mars 2025 til Juni 2026 fungerte jeg også som Leder.",
    linkname: "echo.uib.no",
    link: "https://echo.uib.no/",
    tech: "Nextjs, Go, Drizzle, Sanity, TypeScript, Tailwind, Fly.io, Vercel",
  },
  {
    projectname: "echo Consulting",
    role: "Nestleder",
    start: "Mai 2024",
    end: "d.d.",
    discription:
      "Utvikler webaplikasjoner for linjeforeninger og andre studentorganisjasjoner.",
    linkname: "echo-consulting.no",
    link: "https://echo-consulting.no/",
    tech: "React Router, Sanity, TypeScript, Tailwind, Fly.io",
  },
  {
    projectname: "echo Hovedstyret",
    role: "Styremedlem",
    start: "April 2025",
    end: "April 2026",
    discription:
      "I hovedstyret til echo har vi ansvar for gjøre hverdagen til informatikkstudenter så bra som mulig. Dette gjør vi ved å styrke og ta besluttinger om undergruppene til echo.",
    linkname: "echo.uib.no",
    link: "https://echo.uib.no/for-studenter/gruppe/2025-2026",
    tech: "",
  },
];

export default function StudentClubProjects() {
  return (
    <div className="flex flex-col gap-10">
      {groupProjects.map((project) => (
        <div key={project.projectname}>
          <div className="flex items-baseline justify-between">
            <div className="flex items-baseline gap-2 mb-1">
              <p className="font-bold text-lg">{project.projectname}</p>
              <p className="text-sm">— {project.role}</p>
            </div>
            <p className="text-sm">
              {project.start} - {project.end}
            </p>
          </div>
          <div className="flex items-baseline gap-2 mb-1">
          </div>
          {project.tech && <p className="text-xs mb-3">{project.tech}</p>}
          <p className="mb-3 text-sm leading-relaxed">{project.discription}</p>
          <a
            href={project.link}
            className="text-sm underline-offset-4 hover:underline"
          >
            {project.linkname} →
          </a>
        </div>
      ))}
    </div>
  );
}
