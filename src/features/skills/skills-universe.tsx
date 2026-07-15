"use client";

import { useEffect, useMemo, useState } from "react";
import { useReducedMotion } from "motion/react";

import {
  skillCategories,
  skillCategoryLabels,
} from "@/content/skills";
import { SkillsGridFallback } from "@/features/skills/skills-grid-fallback";
import { SkillsSphere } from "@/features/skills/skills-sphere";
import { cn } from "@/lib/cn";
import type { Skill, SkillCategory } from "@/types/content";

type SkillsUniverseProps = {
  skills: readonly Skill[];
};

type CategoryFilter = SkillCategory | "all";

export function SkillsUniverse({ skills }: SkillsUniverseProps) {
  const reduceMotion = useReducedMotion();
  const [isDesktop, setIsDesktop] = useState(false);
  const [category, setCategory] = useState<CategoryFilter>("all");
  const [selectedId, setSelectedId] = useState<string | null>(
    skills.find((skill) => skill.featured)?.id ?? skills[0]?.id ?? null,
  );

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");
    const sync = () => setIsDesktop(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  const filteredSkills = useMemo(() => {
    if (category === "all") {
      return [...skills];
    }

    return skills.filter((skill) => skill.category === category);
  }, [category, skills]);

  const selectedSkill =
    filteredSkills.find((skill) => skill.id === selectedId) ??
    filteredSkills[0] ??
    null;

  const showSphere = isDesktop && !reduceMotion;

  return (
    <div className="space-y-6">
      <div
        className="flex flex-wrap gap-2"
        role="group"
        aria-label="Filtrar skills por categoría"
      >
        <FilterChip
          label="all"
          active={category === "all"}
          onClick={() => setCategory("all")}
        />
        {skillCategories.map((item) => (
          <FilterChip
            key={item}
            label={skillCategoryLabels[item]}
            active={category === item}
            onClick={() => setCategory(item)}
          />
        ))}
      </div>

      <div
        className="min-h-12 rounded-md border border-border bg-surface/60 px-4 py-3"
        aria-live="polite"
      >
        {selectedSkill ? (
          <p className="text-sm text-muted-foreground">
            <span className="font-mono text-foreground">{selectedSkill.name}</span>
            <span className="mx-2 text-border">·</span>
            <span className="font-mono text-xs text-accent-secondary uppercase">
              {skillCategoryLabels[selectedSkill.category]}
            </span>
            {selectedSkill.description ? (
              <>
                <span className="mx-2 text-border">·</span>
                {selectedSkill.description}
              </>
            ) : null}
          </p>
        ) : (
          <p className="text-sm text-muted-foreground">
            No hay skills en esta categoría.
          </p>
        )}
      </div>

      {showSphere ? (
        <SkillsSphere
          skills={filteredSkills}
          selectedId={selectedSkill?.id ?? null}
          onSelect={setSelectedId}
        />
      ) : (
        <SkillsGridFallback
          skills={filteredSkills}
          selectedId={selectedSkill?.id ?? null}
          onSelect={setSelectedId}
        />
      )}
    </div>
  );
}

function FilterChip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "rounded-md border px-3 py-1.5 font-mono text-xs transition-colors",
        active
          ? "border-accent bg-surface-elevated text-accent"
          : "border-border text-muted-foreground hover:text-foreground",
      )}
    >
      {label}
    </button>
  );
}
