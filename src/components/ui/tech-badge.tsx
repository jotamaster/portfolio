import type { HTMLAttributes } from "react";

import { cn } from "@/lib/cn";

type TechBadgeProps = HTMLAttributes<HTMLSpanElement> & {
  children: string;
};

export function TechBadge({ children, className, ...props }: TechBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border border-border bg-surface-elevated px-2.5 py-1 font-mono text-xs text-accent-secondary",
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
