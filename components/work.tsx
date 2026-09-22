const jobs = [
  {
    company: "JetBrains",
    role: "Campusambassadør",
    start: "Juni 2025",
    end: "d.d.",
    description:
      "Fungerer som bindeledd mellom IT-studenter i Norge og JetBrains ved å delta i, og holde ulike arrangementer i Norge.",
  },
  {
    company: "Bekk consulting",
    role: "Summer intern",
    start: "Juni 2026",
    end: "Juli 2026",
    description:
      "Utviklet et beredskapsdashboard for Utdanningsdirektoratet for å monitorere gjennomføringsperodene til kartleggings- og nasjonaleprøver.",
  },
];

export default function Work() {
  return (
    <div className="flex flex-col gap-10">
      {jobs.map((job) => (
        <div key={job.company}>
          <div className="flex items-baseline justify-between">
            <div className="flex items-baseline gap-2 mb-1">
              <p className="font-bold text-lg">{job.company}</p>
              <p className="text-sm">— {job.role}</p>
            </div>
            <p className="text-sm">
              {job.start} - {job.end}
            </p>
          </div>
          <p className="mb-3 text-sm leading-relaxed">{job.description}</p>
        </div>
      ))}
    </div>
  );
}
