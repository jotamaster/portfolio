import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

type TerminalCommandProps = {
  command: string;
  output?: ReactNode;
  prompt?: string;
  className?: string;
};

export function TerminalCommand({
  command,
  output,
  prompt = "jean@chile:~$",
  className,
}: TerminalCommandProps) {
  return (
    <div
      className={cn(
        "overflow-x-auto rounded-md border border-border bg-background/60 p-4 font-mono text-sm",
        className,
      )}
    >
      <p className="whitespace-pre">
        <span className="text-accent">{prompt}</span>{" "}
        <span className="text-foreground">{command}</span>
      </p>
      {output ? (
        <div className="mt-2 text-muted-foreground whitespace-pre-wrap">{output}</div>
      ) : null}
    </div>
  );
}
