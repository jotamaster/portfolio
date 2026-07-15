import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

type StatusTone = "available" | "busy" | "offline";

type StatusIndicatorProps = {
  tone?: StatusTone;
  label: string;
  className?: string;
  children?: ReactNode;
};

const toneClasses: Record<StatusTone, string> = {
  available: "bg-success shadow-[0_0_10px_color-mix(in_oklab,var(--success)_55%,transparent)]",
  busy: "bg-warning shadow-[0_0_10px_color-mix(in_oklab,var(--warning)_45%,transparent)]",
  offline: "bg-muted-foreground",
};

export function StatusIndicator({
  tone = "available",
  label,
  className,
  children,
}: StatusIndicatorProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-md border border-border bg-surface px-3 py-1.5 font-mono text-xs text-muted-foreground",
        className,
      )}
    >
      <span
        aria-hidden
        className={cn("size-2 shrink-0 rounded-full", toneClasses[tone])}
      />
      <span className="sr-only">{label}</span>
      <span aria-hidden>{children ?? label}</span>
    </span>
  );
}
