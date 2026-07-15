import { TechBadge } from "@/components/ui/tech-badge";
import { WindowFrame } from "@/components/ui/window-frame";
import { formatExperiencePeriod } from "@/lib/experience-format";
import type { Experience } from "@/types/content";

type GitCommitCardProps = {
  experience: Experience;
};

export function GitCommitCard({ experience }: GitCommitCardProps) {
  const period = formatExperiencePeriod(
    experience.startDate,
    experience.endDate,
  );
  const company = experience.company ?? "Empresa por confirmar";

  return (
    <WindowFrame
      variant="terminal"
      title={`${experience.commitHash} · commit`}
      footer={
        <div className="flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs text-muted-foreground">
          {experience.scope ? <span>scope: {experience.scope}</span> : null}
          {experience.environment ? (
            <span>environment: {experience.environment}</span>
          ) : null}
        </div>
      }
    >
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-2 font-mono text-xs sm:text-sm">
          <span className="text-accent">{experience.commitHash}</span>
          <span className="text-muted-foreground">{experience.branch}</span>
        </div>

        <div>
          <p className="font-mono text-lg font-semibold text-foreground">
            {experience.role}
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            {company}
            <span className="mx-2 text-border">·</span>
            <time dateTime={experience.startDate ?? undefined}>{period}</time>
          </p>
        </div>

        <p className="text-sm leading-relaxed text-muted-foreground text-pretty">
          {experience.summary}
        </p>

        <ul className="space-y-2 font-mono text-sm text-foreground">
          {experience.achievements.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="text-success" aria-hidden>
                +
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((tech) => (
            <TechBadge key={tech}>{tech}</TechBadge>
          ))}
        </div>
      </div>
    </WindowFrame>
  );
}
