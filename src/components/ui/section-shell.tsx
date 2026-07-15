import type { ComponentPropsWithoutRef, ReactNode } from "react";

import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/container";

type SectionShellProps = ComponentPropsWithoutRef<"section"> & {
  children: ReactNode;
  contained?: boolean;
};

export function SectionShell({
  children,
  className,
  contained = true,
  ...props
}: SectionShellProps) {
  return (
    <section className={cn("relative py-16 sm:py-20", className)} {...props}>
      {contained ? <Container>{children}</Container> : children}
    </section>
  );
}
