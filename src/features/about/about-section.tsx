import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";
import { profile } from "@/content/profile";
import { OperatorCard } from "@/features/about/operator-card";
import { ProfileTerminal } from "@/features/about/profile-terminal";

export function AboutSection() {
  return (
    <SectionShell
      id="about"
      aria-labelledby="about-heading"
      className="border-t border-border/40"
    >
      <SectionHeading
        id="about-heading"
        eyebrow="about.md"
        title="Operador"
        description={profile.valueProposition}
      />

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <OperatorCard profile={profile} />
        <ProfileTerminal profile={profile} />
      </div>
    </SectionShell>
  );
}
