import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

type CodeLineProps = {
  number: number;
  children: ReactNode;
  className?: string;
  muted?: boolean;
};

export function CodeLine({
  number,
  children,
  className,
  muted = false,
}: CodeLineProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-[3rem_minmax(0,1fr)] gap-3 font-mono text-sm leading-7",
        muted ? "text-muted-foreground" : "text-foreground",
        className,
      )}
    >
      <span aria-hidden className="select-none text-right text-muted-foreground">
        {number}
      </span>
      <code className="min-w-0 overflow-x-auto whitespace-pre">{children}</code>
    </div>
  );
}
