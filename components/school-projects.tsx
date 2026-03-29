const projects = [
  {
    projectname: "MessageFormat 2 bibliotek i Svelte",
    discription:
      "MessageFormat 2 er en Unicode standard for lokalisering av dynamiske strenger. Jobber i et team på 3 studenter for å implementere et Svlete bibliotek.",
    linkname: "Sjekk ut koden →",
    link: "https://github.com/tonylam750/svelte-mf2",
    tech: "TypeScript, Svelte",
    class: "INF218",
    year: "Høst 2025",
  },
];

export default function SchoolProjects() {
  return (
    <div className="flex flex-col gap-10">
      {projects.map((project) => (
        <div key={project.projectname}>
          <div className="flex items-baseline gap-2 mb-1">
            <p className="font-bold text-lg">{project.projectname}</p>
            <p className="text-sm">— {project.class}</p>
          </div>
          <p className="text-xs mb-3">{project.tech}</p>
          <p className="mb-3 text-sm leading-relaxed">{project.discription}</p>
          <a href={project.link} className="text-sm underline-offset-4 hover:underline">
            {project.linkname}
          </a>
        </div>
      ))}
    </div>
  );
}
