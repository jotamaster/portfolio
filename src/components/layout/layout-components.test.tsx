import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import { Button } from "@/components/ui/button";
import { MobileNavigation } from "@/components/layout/mobile-navigation";
import { GitCommitCard } from "@/features/experience/git-commit-card";
import { ProjectCard } from "@/features/projects/project-card";
import { SkillsGridFallback } from "@/features/skills/skills-grid-fallback";

const navItems = [
  { id: "main" as const, label: "main.ts", href: "#main" as const },
  { id: "about" as const, label: "about.md", href: "#about" as const },
];

describe("Button variants", () => {
  it("renders a primary button by default", () => {
    render(<Button>Enviar</Button>);
    expect(screen.getByRole("button", { name: "Enviar" })).toBeInTheDocument();
  });
});

describe("MobileNavigation", () => {
  it("opens and closes the menu", async () => {
    const user = userEvent.setup();
    render(<MobileNavigation items={navItems} />);

    await user.click(screen.getByRole("button", { name: "Abrir menú" }));
    expect(screen.getByRole("dialog", { name: "Navegación" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "about.md" })).toBeInTheDocument();

    await user.click(screen.getAllByRole("button", { name: "Cerrar menú" })[0]!);
    expect(
      screen.queryByRole("dialog", { name: "Navegación" }),
    ).not.toBeInTheDocument();
  });
});

describe("ProjectCard", () => {
  it("renders project identity without inventing repository links", () => {
    render(
      <ProjectCard
        project={{
          slug: "ziona",
          name: "Ziona",
          shortDescription: "Organización del hogar",
          description: "Desc",
          problem: "Problema",
          status: "development",
          technologies: ["NestJS"],
          highlights: ["Espacios"],
          featured: true,
          caseStudy: {
            context: "c",
            problem: "p",
            objective: "o",
            responsibility: "r",
            architecture: "a",
            technicalDecisions: [],
            learnings: [],
            nextSteps: [],
          },
        }}
      />,
    );

    expect(screen.getByText("Ziona")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Caso de estudio/i })).toHaveAttribute(
      "href",
      "/projects/ziona",
    );
    expect(
      screen.queryByRole("link", { name: /Repositorio/i }),
    ).not.toBeInTheDocument();
  });
});

describe("GitCommitCard", () => {
  it("shows confirmation placeholders when company and dates are missing", () => {
    render(
      <GitCommitCard
        experience={{
          id: "fullstack",
          role: "Full Stack Developer",
          summary: "Resumen",
          achievements: ["API"],
          technologies: ["TypeScript"],
          commitHash: "4f26c1a",
          branch: "HEAD -> fullstack",
        }}
      />,
    );

    expect(screen.getByText("Empresa por confirmar")).toBeInTheDocument();
    expect(screen.getByText("Periodo por confirmar")).toBeInTheDocument();
  });
});

describe("SkillsGridFallback", () => {
  it("exposes skill names for assistive technologies", async () => {
    const user = userEvent.setup();
    const onSelect = vi.fn();

    render(
      <SkillsGridFallback
        skills={[
          {
            id: "react",
            name: "React",
            category: "frontend",
            featured: true,
          },
        ]}
        selectedId={null}
        onSelect={onSelect}
      />,
    );

    await user.click(screen.getByRole("button", { name: /React/i }));
    expect(onSelect).toHaveBeenCalledWith("react");
  });
});
