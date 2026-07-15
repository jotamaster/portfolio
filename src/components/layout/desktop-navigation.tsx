"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/cn";
import type { NavItem, SectionId } from "@/types/navigation";

type DesktopNavigationProps = {
  items: readonly NavItem[];
};

export function DesktopNavigation({ items }: DesktopNavigationProps) {
  const [activeId, setActiveId] = useState<SectionId | null>(items[0]?.id ?? null);

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        const top = visible[0];
        if (top?.target.id) {
          setActiveId(top.target.id as SectionId);
        }
      },
      {
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0.1, 0.25, 0.5],
      },
    );

    for (const section of sections) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, [items]);

  return (
    <ul className="flex items-center gap-1">
      {items.map((item) => {
        const isActive = item.id === activeId;

        return (
          <li key={item.id}>
            <a
              href={item.href}
              aria-current={isActive ? "true" : undefined}
              className={cn(
                "inline-flex rounded-md px-2.5 py-1.5 font-mono text-xs transition-colors",
                isActive
                  ? "bg-surface-elevated text-accent"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {item.label}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
