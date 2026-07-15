/**
 * Calcula años de experiencia completos desde una fecha ISO (YYYY-MM-DD).
 */
export function calculateExperienceYears(
  startDate: string,
  now: Date = new Date(),
): number {
  const start = new Date(`${startDate}T00:00:00.000Z`);

  if (Number.isNaN(start.getTime())) {
    throw new Error(`Invalid experience start date: ${startDate}`);
  }

  let years = now.getUTCFullYear() - start.getUTCFullYear();
  const monthDelta = now.getUTCMonth() - start.getUTCMonth();
  const dayDelta = now.getUTCDate() - start.getUTCDate();

  if (monthDelta < 0 || (monthDelta === 0 && dayDelta < 0)) {
    years -= 1;
  }

  return Math.max(0, years);
}

export function formatExperienceYearsLabel(years: number): string {
  if (years <= 0) {
    return "< 1 año de experiencia";
  }

  if (years === 1) {
    return "1 año de experiencia";
  }

  return `~${years} años de experiencia`;
}
