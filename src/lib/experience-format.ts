/**
 * Formatea un periodo laboral a partir de fechas ISO YYYY o YYYY-MM.
 * Si faltan fechas, no inventa valores.
 */
export function formatExperiencePeriod(
  startDate?: string,
  endDate?: string,
): string {
  if (!startDate && !endDate) {
    return "Periodo por confirmar";
  }

  const start = startDate ? formatYearOrMonth(startDate) : "¿?";
  const end = endDate ? formatYearOrMonth(endDate) : "presente";

  return `${start} — ${end}`;
}

function formatYearOrMonth(value: string): string {
  if (/^\d{4}$/.test(value)) {
    return value;
  }

  return formatYearMonth(value);
}

function formatYearMonth(value: string): string {
  const match = /^(\d{4})-(\d{2})$/.exec(value);

  if (!match) {
    return value;
  }

  const year = match[1];
  const monthIndex = Number(match[2]) - 1;
  const months = [
    "ene",
    "feb",
    "mar",
    "abr",
    "may",
    "jun",
    "jul",
    "ago",
    "sep",
    "oct",
    "nov",
    "dic",
  ];

  return `${months[monthIndex] ?? match[2]} ${year}`;
}

/** Ordena experiencia: más reciente primero; entradas sin fecha al final. */
export function sortExperienceByRecency<
  T extends { startDate?: string; endDate?: string },
>(items: readonly T[]): T[] {
  return [...items].sort((a, b) => {
    const aKey = a.endDate ?? a.startDate ?? "";
    const bKey = b.endDate ?? b.startDate ?? "";

    if (!aKey && !bKey) {
      return 0;
    }
    if (!aKey) {
      return 1;
    }
    if (!bKey) {
      return -1;
    }

    return bKey.localeCompare(aKey);
  });
}
