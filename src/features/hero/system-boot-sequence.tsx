"use client";

import { motion, useReducedMotion } from "motion/react";

type SystemBootSequenceProps = {
  initLabel: string;
};

const bootLines = [
  "booting JEAN.OS …",
  "loading modules: web · api · integrations",
  "ready.",
] as const;

export function SystemBootSequence({ initLabel }: SystemBootSequenceProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <div
        className="font-mono text-xs text-muted-foreground sm:text-sm"
        aria-hidden
      >
        <p>{bootLines[2]}</p>
        <p className="mt-2 text-accent">{initLabel}</p>
      </div>
    );
  }

  return (
    <div
      className="font-mono text-xs text-muted-foreground sm:text-sm"
      aria-hidden
    >
      {bootLines.map((line, index) => (
        <motion.p
          key={line}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: index * 0.12, ease: "easeOut" }}
          className={index > 0 ? "mt-1" : undefined}
        >
          {line}
        </motion.p>
      ))}
      <motion.p
        className="mt-2 text-accent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.45 }}
      >
        {initLabel}
        <motion.span
          className="ml-0.5 inline-block h-3.5 w-1.5 translate-y-0.5 bg-accent align-baseline"
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
      </motion.p>
    </div>
  );
}
