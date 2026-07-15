import { ArrowUpRight, ExternalLink } from "lucide-react";
import Link from "next/link";

import { buttonClassName } from "@/components/ui/button";
import { GitHubMark } from "@/components/ui/github-mark";
import { cn } from "@/lib/cn";
import type { Project } from "@/types/content";

type ProjectLinksProps = {
  project: Project;
  className?: string;
  showDetailLink?: boolean;
};

export function ProjectLinks({
  project,
  className,
  showDetailLink = true,
}: ProjectLinksProps) {
  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {showDetailLink ? (
        <Link
          href={`/projects/${project.slug}`}
          className={buttonClassName({ variant: "secondary", size: "sm" })}
        >
          Caso de estudio
          <ArrowUpRight className="size-3.5" aria-hidden />
        </Link>
      ) : null}

      {project.repositoryUrl ? (
        <a
          href={project.repositoryUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonClassName({ variant: "ghost", size: "sm" })}
        >
          <GitHubMark className="size-3.5" />
          Repositorio
        </a>
      ) : null}

      {project.demoUrl ? (
        <a
          href={project.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonClassName({ variant: "ghost", size: "sm" })}
        >
          <ExternalLink className="size-3.5" aria-hidden />
          Demo
        </a>
      ) : null}
    </div>
  );
}
