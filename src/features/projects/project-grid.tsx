import { ProjectCard } from "@/features/projects/project-card";
import type { Project } from "@/types/content";

type ProjectGridProps = {
  projects: readonly Project[];
};

export function ProjectGrid({ projects }: ProjectGridProps) {
  if (projects.length === 0) {
    return (
      <p className="rounded-md border border-border bg-surface px-4 py-6 font-mono text-sm text-muted-foreground">
        No hay proyectos destacados todavía.
      </p>
    );
  }

  return (
    <ul className="grid gap-6 md:grid-cols-2">
      {projects.map((project) => (
        <li key={project.slug}>
          <ProjectCard project={project} />
        </li>
      ))}
    </ul>
  );
}
