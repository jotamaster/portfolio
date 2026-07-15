import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";
import { skills } from "@/content/skills";
import { SkillsUniverse } from "@/features/skills/skills-universe";

export function SkillsSection() {
  return (
    <SectionShell
      id="skills"
      aria-labelledby="skills-heading"
      className="border-t border-border/40"
    >
      <SectionHeading
        id="skills-heading"
        eyebrow="skills.json"
        title="Skills"
        description="Stack principal en una esfera 3D interactiva. En móvil o reduced motion usas el grid accesible."
      />

      <div className="mt-8">
        <SkillsUniverse skills={skills} />
      </div>
    </SectionShell>
  );
}
