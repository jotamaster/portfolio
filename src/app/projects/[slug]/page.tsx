import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Container } from "@/components/ui/container";
import {
  getAllProjectSlugs,
  getProjectBySlug,
  projectStatusLabels,
} from "@/content/projects";
import { ProjectCaseStudyView } from "@/features/projects/project-case-study";
import { ProjectLinks } from "@/features/projects/project-links";
import { SITE_NAME } from "@/lib/constants";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Proyecto no encontrado",
    };
  }

  return {
    title: project.name,
    description: project.shortDescription,
    openGraph: {
      title: `${project.name} · ${SITE_NAME}`,
      description: project.shortDescription,
      type: "article",
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="pb-20">
      <Container className="pt-10 sm:pt-14">
        <p className="font-mono text-xs text-muted-foreground">
          <Link href="/#projects" className="hover:text-accent">
            projects/
          </Link>
          <span className="mx-2">›</span>
          <span className="text-foreground">{project.slug}</span>
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-3">
          <h1 className="font-mono text-3xl font-semibold tracking-tight sm:text-4xl">
            {project.name}
          </h1>
          <span className="rounded-md border border-border bg-surface px-2 py-1 font-mono text-xs text-accent-secondary uppercase">
            {projectStatusLabels[project.status]}
          </span>
        </div>

        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty sm:text-lg">
          {project.description}
        </p>

        <ProjectLinks project={project} className="mt-6" showDetailLink={false} />

        <div className="mt-12 max-w-3xl">
          <ProjectCaseStudyView project={project} />
        </div>
      </Container>
    </main>
  );
}
