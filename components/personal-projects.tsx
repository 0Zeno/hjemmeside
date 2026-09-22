const projects = [
  {
    projectname: "Elvebrusfestivalen.no",
    discription:
      "Utviklet nettsiden til elvebrusfestivalen i samarbeid med arrangørene. Elvebrus er en liten lokal festival i Stanghelle på vestlandet.",
    linknavn: "Se nettsiden →",
    link: "https://www.elvebrusfestivalen.no/",
    tech: "Next.js, Sanity, Tailwind, TypeScript, Vercel",
  },
  {
    projectname: "QR kode frontend",
    discription:
      "Frontend til QR api som jeg utviklet for å lære meg å bruke forms i React.",
    linknavn: "Se nettsiden →",
    link: "https://url-to-qr-converter.vercel.app/",
    tech: "Nextjs, Tailwind, TypeScript, Vercel",
  },
  {
    projectname: "QR API",
    discription:
      "Lagde et API som fungerer som backend-en til QR konvertereren. Utviklet dette prosjektet for å lære meg hvordan man lager en backend i Go.",
    linknavn: "Sjekk ut koden →",
    link: "https://github.com/0Zeno/Tetris-INF101",
    tech: "Go, Docker, Fly.io",
  },
];

export default function PersonalProjects() {
  return (
    <div className="flex flex-col gap-10">
      {projects.map((project) => (
        <div key={project.projectname}>
          <p className="font-bold text-lg mb-1">{project.projectname}</p>
          <p className="text-xs mb-3">{project.tech}</p>
          <p className="mb-3 text-sm leading-relaxed">{project.discription}</p>
          <a
            href={project.link}
            className="text-sm underline-offset-4 hover:underline"
          >
            {project.linknavn}
          </a>
        </div>
      ))}
    </div>
  );
}
