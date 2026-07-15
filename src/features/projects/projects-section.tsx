import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";
import { getFeaturedProjects } from "@/content/projects";
import { ProjectGrid } from "@/features/projects/project-grid";

export function ProjectsSection() {
  const featured = getFeaturedProjects();

  return (
    <SectionShell
      id="projects"
      aria-labelledby="projects-heading"
      className="border-t border-border/40"
    >
      <SectionHeading
        id="projects-heading"
        eyebrow="projects/"
        title="Projects"
        description="Casos destacados. Solo se muestran enlaces de repo o demo cuando existen."
      />

      <div className="mt-8">
        <ProjectGrid projects={featured} />
      </div>
    </SectionShell>
  );
}
