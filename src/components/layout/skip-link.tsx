import { MAIN_CONTENT_ID } from "@/lib/constants";
import { cn } from "@/lib/cn";

type SkipLinkProps = {
  className?: string;
};

export function SkipLink({ className }: SkipLinkProps) {
  return (
    <a
      href={`#${MAIN_CONTENT_ID}`}
      className={cn(
        "absolute top-3 left-3 z-[100] -translate-y-[200%] rounded-md bg-accent px-4 py-2 font-mono text-sm font-medium text-background transition-transform",
        "focus:translate-y-0",
        className,
      )}
    >
      Saltar al contenido
    </a>
  );
}
