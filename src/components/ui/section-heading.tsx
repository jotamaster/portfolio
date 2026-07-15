import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  className?: string;
  actions?: ReactNode;
};

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  className,
  actions,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between",
        className,
      )}
    >
      <div className="max-w-2xl space-y-3">
        {eyebrow ? (
          <p className="font-mono text-xs tracking-wide text-accent uppercase">
            {eyebrow}
          </p>
        ) : null}
        <h2
          id={id}
          className="font-mono text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
        >
          {title}
        </h2>
        {description ? (
          typeof description === "string" ? (
            <p className="text-base leading-relaxed text-muted-foreground text-pretty">
              {description}
            </p>
          ) : (
            description
          )
        ) : null}
      </div>
      {actions ? <div className="shrink-0">{actions}</div> : null}
    </div>
  );
}
