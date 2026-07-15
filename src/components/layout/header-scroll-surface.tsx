"use client";

import { useEffect, useState, type ReactNode } from "react";

import { cn } from "@/lib/cn";

type HeaderScrollSurfaceProps = {
  children: ReactNode;
  className?: string;
};

export function HeaderScrollSurface({
  children,
  className,
}: HeaderScrollSurfaceProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={cn(
        "border-b transition-[background-color,border-color,backdrop-filter]",
        scrolled
          ? "border-border/80 bg-background/80 backdrop-blur-md"
          : "border-transparent bg-transparent",
        className,
      )}
    >
      {children}
    </div>
  );
}
