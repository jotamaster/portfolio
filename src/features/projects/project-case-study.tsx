import { TechBadge } from "@/components/ui/tech-badge";
import { WindowFrame } from "@/components/ui/window-frame";
import type { Project } from "@/types/content";

type ProjectCaseStudyProps = {
  project: Project;
};

const sectionOrder = [
  ["context", "Contexto"],
  ["problem", "Problema"],
  ["objective", "Objetivo"],
  ["responsibility", "Responsabilidad"],
  ["architecture", "Arquitectura"],
] as const;

export function ProjectCaseStudyView({ project }: ProjectCaseStudyProps) {
  const { caseStudy } = project;

  return (
    <div className="space-y-6">
      {sectionOrder.map(([key, title]) => (
        <section key={key} aria-labelledby={`${project.slug}-${key}`}>
          <h2
            id={`${project.slug}-${key}`}
            className="font-mono text-sm font-semibold tracking-wide text-accent uppercase"
          >
            {title}
          </h2>
          <p className="mt-2 text-base leading-relaxed text-muted-foreground text-pretty">
            {caseStudy[key]}
          </p>
        </section>
      ))}

      <section aria-labelledby={`${project.slug}-decisions`}>
        <h2
          id={`${project.slug}-decisions`}
          className="font-mono text-sm font-semibold tracking-wide text-accent uppercase"
        >
          Decisiones técnicas
        </h2>
        <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
          {caseStudy.technicalDecisions.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="text-accent" aria-hidden>
                ›
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby={`${project.slug}-tech`}>
        <h2
          id={`${project.slug}-tech`}
          className="font-mono text-sm font-semibold tracking-wide text-accent uppercase"
        >
          Tecnologías
        </h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <TechBadge key={tech}>{tech}</TechBadge>
          ))}
        </div>
      </section>

      <WindowFrame variant="editor" title="status.log">
        <p className="font-mono text-sm text-foreground">
          status: <span className="text-accent">{project.status}</span>
        </p>
        <p className="mt-2 text-sm text-muted-foreground text-pretty">
          {project.description}
        </p>
      </WindowFrame>

      <section aria-labelledby={`${project.slug}-learnings`}>
        <h2
          id={`${project.slug}-learnings`}
          className="font-mono text-sm font-semibold tracking-wide text-accent uppercase"
        >
          Aprendizajes
        </h2>
        <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
          {caseStudy.learnings.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="text-success" aria-hidden>
                +
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby={`${project.slug}-next`}>
        <h2
          id={`${project.slug}-next`}
          className="font-mono text-sm font-semibold tracking-wide text-accent uppercase"
        >
          Próximos pasos
        </h2>
        <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
          {caseStudy.nextSteps.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="text-accent-secondary" aria-hidden>
                →
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
