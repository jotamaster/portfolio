import { TechBadge } from "@/components/ui/tech-badge";
import { skillCategoryLabels } from "@/content/skills";
import { cn } from "@/lib/cn";
import type { Skill } from "@/types/content";

type SkillsGridFallbackProps = {
  skills: readonly Skill[];
  selectedId: string | null;
  onSelect: (id: string) => void;
};

export function SkillsGridFallback({
  skills,
  selectedId,
  onSelect,
}: SkillsGridFallbackProps) {
  const grouped = skills.reduce<Record<string, Skill[]>>((acc, skill) => {
    const key = skill.category;
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(skill);
    return acc;
  }, {});

  const categories = Object.keys(grouped) as Array<Skill["category"]>;

  return (
    <div className="space-y-8">
      {categories.map((category) => (
        <div key={category}>
          <h3 className="font-mono text-xs tracking-wide text-accent-secondary uppercase">
            {skillCategoryLabels[category]}
          </h3>
          <ul className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
            {grouped[category]?.map((skill) => {
              const selected = skill.id === selectedId;

              return (
                <li key={skill.id}>
                  <button
                    type="button"
                    onClick={() => onSelect(skill.id)}
                    aria-pressed={selected}
                    className={cn(
                      "flex w-full flex-col items-start gap-2 rounded-md border px-3 py-3 text-left transition-colors",
                      selected
                        ? "border-accent bg-surface-elevated"
                        : "border-border bg-surface hover:border-accent/40",
                    )}
                  >
                    <span className="font-mono text-sm text-foreground">
                      {skill.name}
                    </span>
                    {skill.featured ? <TechBadge>featured</TechBadge> : null}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
}
