import Image from "next/image";

import { StatusIndicator } from "@/components/ui/status-indicator";
import { TechBadge } from "@/components/ui/tech-badge";
import { WindowFrame } from "@/components/ui/window-frame";
import {
  calculateExperienceYears,
  formatExperienceYearsLabel,
} from "@/lib/experience";
import type { Profile, ProfileMetric } from "@/types/content";

type OperatorCardProps = {
  profile: Profile;
};

function resolveMetricValue(
  metric: ProfileMetric,
  profile: Profile,
): string | null {
  if (metric.kind === "text") {
    return metric.value;
  }

  if (!profile.experienceStartDate) {
    return null;
  }

  const years = calculateExperienceYears(profile.experienceStartDate);
  return formatExperienceYearsLabel(years);
}

export function OperatorCard({ profile }: OperatorCardProps) {
  const metrics = profile.metrics
    .map((metric) => {
      const value = resolveMetricValue(metric, profile);
      if (!value) {
        return null;
      }

      return { id: metric.id, label: metric.label, value };
    })
    .filter((metric): metric is { id: string; label: string; value: string } =>
      metric !== null,
    );

  const initials = profile.displayName
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <WindowFrame
      variant="repository"
      title="operator.card"
      footer={
        <StatusIndicator
          tone={profile.availability.tone}
          label={profile.availability.label}
        />
      }
    >
      <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
        <div className="relative size-28 shrink-0 overflow-hidden rounded-md border border-border bg-surface-elevated sm:size-32">
          {profile.photoSrc ? (
            <Image
              src={profile.photoSrc}
              alt={profile.photoAlt ?? `Foto de ${profile.displayName}`}
              fill
              sizes="128px"
              className="object-cover"
              priority={false}
            />
          ) : (
            <div
              className="flex size-full items-center justify-center font-mono text-2xl text-accent"
              role="img"
              aria-label={
                profile.photoAlt ??
                `TODO: confirmar foto profesional de ${profile.displayName}`
              }
            >
              {initials}
            </div>
          )}
        </div>

        <div className="min-w-0 space-y-3">
          <div>
            <p className="font-mono text-xs tracking-wide text-accent uppercase">
              operator
            </p>
            <p className="mt-1 font-mono text-xl font-semibold text-foreground">
              {profile.displayName}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              {profile.role} · {profile.location}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {profile.primaryStack.slice(0, 5).map((tech) => (
              <TechBadge key={tech}>{tech}</TechBadge>
            ))}
          </div>
        </div>
      </div>

      {metrics.length > 0 ? (
        <dl className="mt-6 grid gap-3 sm:grid-cols-2">
          {metrics.map((metric) => (
            <div
              key={metric.id}
              className="rounded-md border border-border bg-background/50 px-3 py-2"
            >
              <dt className="font-mono text-[10px] tracking-wide text-muted-foreground uppercase">
                {metric.label}
              </dt>
              <dd className="mt-1 text-sm text-foreground">{metric.value}</dd>
            </div>
          ))}
        </dl>
      ) : null}
    </WindowFrame>
  );
}
