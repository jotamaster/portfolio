import { GitCommitCard } from "@/features/experience/git-commit-card";
import { sortExperienceByRecency } from "@/lib/experience-format";
import type { Experience } from "@/types/content";

type ExperienceTimelineProps = {
  items: readonly Experience[];
};

export function ExperienceTimeline({ items }: ExperienceTimelineProps) {
  const ordered = sortExperienceByRecency(items);

  if (ordered.length === 0) {
    return (
      <p className="rounded-md border border-border bg-surface px-4 py-6 font-mono text-sm text-muted-foreground">
        No hay commits de experiencia cargados todavía.
      </p>
    );
  }

  return (
    <ol className="relative space-y-6 border-l border-border pl-6 sm:pl-8">
      {ordered.map((item) => (
        <li key={item.id} className="relative">
          <span
            aria-hidden
            className="absolute top-6 -left-[1.9rem] size-3 rounded-full border-2 border-accent bg-background sm:-left-[2.4rem]"
          />
          <GitCommitCard experience={item} />
        </li>
      ))}
    </ol>
  );
}
