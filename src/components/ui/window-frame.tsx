import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

type WindowVariant = "terminal" | "editor" | "repository";

type WindowFrameProps = {
  title: string;
  icon?: ReactNode;
  actions?: ReactNode;
  footer?: ReactNode;
  children: ReactNode;
  variant?: WindowVariant;
  className?: string;
};

const variantClasses: Record<WindowVariant, string> = {
  terminal: "shadow-[0_0_0_1px_color-mix(in_oklab,var(--accent)_12%,transparent)]",
  editor: "shadow-[0_0_0_1px_color-mix(in_oklab,var(--accent-secondary)_10%,transparent)]",
  repository: "shadow-[0_0_0_1px_color-mix(in_oklab,var(--foreground)_6%,transparent)]",
};

export function WindowFrame({
  title,
  icon,
  actions,
  footer,
  children,
  variant = "editor",
  className,
}: WindowFrameProps) {
  return (
    <article
      className={cn(
        "overflow-hidden rounded-lg border border-border bg-surface",
        "transition-[border-color,box-shadow] hover:border-border/80",
        variantClasses[variant],
        className,
      )}
    >
      <header className="flex items-center gap-3 border-b border-border bg-surface-elevated px-3 py-2.5">
        <div className="flex items-center gap-1.5" aria-hidden>
          <span className="size-2.5 rounded-full bg-danger/90" />
          <span className="size-2.5 rounded-full bg-warning/90" />
          <span className="size-2.5 rounded-full bg-success/90" />
        </div>

        <div className="flex min-w-0 flex-1 items-center gap-2">
          {icon ? <span className="shrink-0 text-muted-foreground">{icon}</span> : null}
          <h3 className="truncate font-mono text-xs text-muted-foreground sm:text-sm">
            {title}
          </h3>
        </div>

        {actions ? <div className="flex shrink-0 items-center gap-2">{actions}</div> : null}
      </header>

      <div className="p-4 sm:p-5">{children}</div>

      {footer ? (
        <footer className="border-t border-border bg-background/40 px-4 py-3 sm:px-5">
          {footer}
        </footer>
      ) : null}
    </article>
  );
}
