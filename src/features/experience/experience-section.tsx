import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";
import { experience } from "@/content/experience";
import { ExperienceTimeline } from "@/features/experience/experience-timeline";

export function ExperienceSection() {
  return (
    <SectionShell
      id="experience"
      aria-labelledby="experience-heading"
      className="border-t border-border/40"
    >
      <SectionHeading
        id="experience-heading"
        eyebrow="experience.git"
        title="Experience"
        description={
          <p className="font-mono text-sm text-muted-foreground sm:text-base">
            <span className="text-accent">jean@chile:~$</span>{" "}
            <span className="text-foreground">
              git log --oneline --decorate --graph
            </span>
          </p>
        }
      />

      <div className="mt-8">
        <ExperienceTimeline items={experience} />
      </div>
    </SectionShell>
  );
}
