import { cn } from "@/lib/cn";

type PageBackgroundProps = {
  className?: string;
};

export function PageBackground({ className }: PageBackgroundProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background",
        className,
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--hero-glow),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,color-mix(in_oklab,var(--accent-secondary)_12%,transparent),transparent_40%)]" />
      <div className="page-grid absolute inset-0 opacity-70" />
      <div className="page-noise absolute inset-0" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
}
