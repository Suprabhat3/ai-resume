export function ResumePreview({ data }: { data: any }) {
  if (!data) return null;

  return (
    <div className="font-sans text-[11pt] leading-snug">
      {/* Header */}
      <div className="text-center mb-6 border-b-2 border-zinc-800 pb-4">
        <h1 className="text-3xl font-bold uppercase tracking-wide text-zinc-900 mb-2">
          {data.fullName || "Your Name"}
        </h1>
        <p className="text-sm text-zinc-600 mb-2 font-medium">
          {data.targetRole || "Target Role"}
        </p>
        <div className="text-xs text-zinc-500 flex justify-center gap-4">
          {data.email && <span>{data.email}</span>}
          {data.phone && <span>• {data.phone}</span>}
          {data.location && <span>• {data.location}</span>}
        </div>
      </div>

      {/* Summary */}
      {data.summary && (
        <div className="mb-5">
          <h2 className="text-sm font-bold uppercase tracking-wider text-zinc-800 border-b border-zinc-200 pb-1 mb-2">
            Professional Summary
          </h2>
          <p className="text-sm text-zinc-700 leading-relaxed">
            {data.summary}
          </p>
        </div>
      )}

      {/* Experience */}
      {data.experience && data.experience.length > 0 && (
        <div className="mb-5">
          <h2 className="text-sm font-bold uppercase tracking-wider text-zinc-800 border-b border-zinc-200 pb-1 mb-3">
            Professional Experience
          </h2>
          <div className="space-y-4">
            {data.experience.map((exp: any, i: number) => (
              <div key={i}>
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-zinc-900">{exp.role}</h3>
                  <span className="text-xs text-zinc-600 ml-4 whitespace-nowrap">
                    {exp.duration}
                  </span>
                </div>
                <div className="text-sm font-medium text-zinc-700 italic mb-2">
                  {exp.company}
                </div>
                <ul className="list-disc pl-4 space-y-1.5 marker:text-zinc-400">
                  {exp.bullets?.map((bullet: string, j: number) => (
                    <li key={j} className="text-sm text-zinc-700 pl-1">
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Education */}
      {data.education && data.education.length > 0 && (
        <div className="mb-5">
          <h2 className="text-sm font-bold uppercase tracking-wider text-zinc-800 border-b border-zinc-200 pb-1 mb-3">
            Education
          </h2>
          <div className="space-y-2">
            {data.education.map((edu: any, i: number) => (
              <div key={i} className="flex justify-between items-baseline">
                <div>
                  <h3 className="font-bold text-zinc-900">{edu.degree}</h3>
                  <div className="text-sm text-zinc-700">{edu.institution}</div>
                </div>
                {edu.year && (
                  <span className="text-xs text-zinc-600">{edu.year}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Skills */}
      {data.skills && data.skills.length > 0 && (
        <div className="mb-5">
          <h2 className="text-sm font-bold uppercase tracking-wider text-zinc-800 border-b border-zinc-200 pb-1 mb-2">
            Skills & Technologies
          </h2>
          <p className="text-sm text-zinc-700 leading-relaxed">
            {Array.isArray(data.skills) ? data.skills.join(" • ") : data.skills}
          </p>
        </div>
      )}
    </div>
  );
}
