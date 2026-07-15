import { TechBadge } from "@/components/ui/tech-badge";
import { WindowFrame } from "@/components/ui/window-frame";
import { projectStatusLabels } from "@/content/projects";
import { ProjectLinks } from "@/features/projects/project-links";
import type { Project } from "@/types/content";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <WindowFrame
      variant="repository"
      title={`projects/${project.slug}`}
      actions={
        <span className="rounded-md border border-border bg-surface px-2 py-0.5 font-mono text-[10px] text-accent-secondary uppercase">
          {projectStatusLabels[project.status]}
        </span>
      }
      footer={<ProjectLinks project={project} />}
    >
      <div className="space-y-4">
        <div>
          <p className="font-mono text-lg font-semibold text-foreground">
            {project.name}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-pretty">
            {project.shortDescription}
          </p>
        </div>

        <div>
          <p className="font-mono text-[10px] tracking-wide text-muted-foreground uppercase">
            problem
          </p>
          <p className="mt-1 text-sm text-foreground text-pretty">
            {project.problem}
          </p>
        </div>

        <ul className="space-y-1.5 text-sm text-muted-foreground">
          {project.highlights.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="text-accent" aria-hidden>
                ›
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <TechBadge key={tech}>{tech}</TechBadge>
          ))}
        </div>
      </div>
    </WindowFrame>
  );
}
