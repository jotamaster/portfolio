import { describe, expect, it } from "vitest";

import {
  depthOpacity,
  distributeOnSphere,
  rotatedDepth,
} from "@/lib/skill-sphere";

describe("distributeOnSphere", () => {
  it("returns the requested number of points", () => {
    expect(distributeOnSphere(14, 100)).toHaveLength(14);
  });

  it("keeps points near the sphere radius", () => {
    const radius = 120;
    const points = distributeOnSphere(20, radius);

    for (const point of points) {
      const magnitude = Math.hypot(point.x, point.y, point.z);
      expect(magnitude).toBeGreaterThan(radius * 0.98);
      expect(magnitude).toBeLessThan(radius * 1.02);
    }
  });
});

describe("rotatedDepth", () => {
  it("maps a front-facing point to positive depth after identity rotation", () => {
    expect(rotatedDepth({ x: 0, y: 0, z: 100 }, 0, 0)).toBeCloseTo(100);
  });
});

describe("depthOpacity", () => {
  it("returns higher opacity for front points", () => {
    expect(depthOpacity(100, 100)).toBeGreaterThan(depthOpacity(-100, 100));
  });
});
