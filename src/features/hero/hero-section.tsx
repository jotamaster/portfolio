import { ArrowDownRight, FileDown } from "lucide-react";

import { buttonClassName } from "@/components/ui/button";
import { GitHubMark } from "@/components/ui/github-mark";
import { SectionShell } from "@/components/ui/section-shell";
import { StatusIndicator } from "@/components/ui/status-indicator";
import { profile } from "@/content/profile";
import { HeroCodeWindow } from "@/features/hero/hero-code-window";
import { SystemBootSequence } from "@/features/hero/system-boot-sequence";
import { SITE_NAME, withBasePath } from "@/lib/constants";
import { cn } from "@/lib/cn";

export function HeroSection() {
  return (
    <SectionShell
      id="main"
      aria-labelledby="main-heading"
      className="pt-10 sm:pt-16"
    >
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
        <div className="min-w-0">
          <SystemBootSequence initLabel={profile.initLabel} />

          <p className="mt-6 font-mono text-xs tracking-[0.18em] text-accent-secondary uppercase">
            {SITE_NAME} · {profile.role}
          </p>

          <h1
            id="main-heading"
            className="mt-3 font-mono text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-5xl"
          >
            {profile.greeting}
          </h1>

          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground text-pretty sm:text-lg">
            {profile.valueProposition}
          </p>

          <div className="mt-6">
            <StatusIndicator
              tone={profile.availability.tone}
              label={profile.availability.label}
            />
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="#projects"
              className={cn(
                buttonClassName({ variant: "primary", size: "lg" }),
                "w-full sm:w-auto",
              )}
            >
              Ver proyectos
              <ArrowDownRight className="size-4" aria-hidden />
            </a>

            {profile.cvUrl ? (
              <a
                href={withBasePath(profile.cvUrl)}
                className={cn(
                  buttonClassName({ variant: "secondary", size: "lg" }),
                  "w-full sm:w-auto",
                )}
                download
              >
                Descargar CV
                <FileDown className="size-4" aria-hidden />
              </a>
            ) : null}

            {profile.githubUrl ? (
              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonClassName({ variant: "ghost", size: "lg" }),
                  "w-full sm:w-auto",
                )}
              >
                <GitHubMark className="size-4" />
                GitHub
              </a>
            ) : null}
          </div>
        </div>

        <div className="min-w-0">
          <HeroCodeWindow profile={profile} />
        </div>
      </div>
    </SectionShell>
  );
}
