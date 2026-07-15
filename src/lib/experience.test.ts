import { describe, expect, it } from "vitest";

import {
  calculateExperienceYears,
  formatExperienceYearsLabel,
} from "@/lib/experience";
import { formatExperiencePeriod } from "@/lib/experience-format";

describe("calculateExperienceYears", () => {
  it("counts full years from a start date", () => {
    const now = new Date("2026-07-15T00:00:00.000Z");
    expect(calculateExperienceYears("2022-01-01", now)).toBe(4);
  });

  it("does not count a partial year as complete", () => {
    const now = new Date("2026-07-15T00:00:00.000Z");
    expect(calculateExperienceYears("2025-12-01", now)).toBe(0);
  });
});

describe("formatExperienceYearsLabel", () => {
  it("formats singular and plural labels", () => {
    expect(formatExperienceYearsLabel(0)).toBe("< 1 año de experiencia");
    expect(formatExperienceYearsLabel(1)).toBe("1 año de experiencia");
    expect(formatExperienceYearsLabel(4)).toBe("~4 años de experiencia");
  });
});

describe("formatExperiencePeriod", () => {
  it("returns a confirmation placeholder when dates are missing", () => {
    expect(formatExperiencePeriod()).toBe("Periodo por confirmar");
  });

  it("formats year-only periods from the CV", () => {
    expect(formatExperiencePeriod("2019", "2020")).toBe("2019 — 2020");
  });

  it("formats an open-ended period", () => {
    expect(formatExperiencePeriod("2022-01")).toBe("ene 2022 — presente");
  });
});
