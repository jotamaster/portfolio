/** Distribuir n puntos sobre una esfera (Fibonacci / golden spiral). */
export function distributeOnSphere(
  count: number,
  radius: number,
): Array<{ x: number; y: number; z: number }> {
  if (count <= 0) {
    return [];
  }

  if (count === 1) {
    return [{ x: 0, y: 0, z: radius }];
  }

  const points: Array<{ x: number; y: number; z: number }> = [];
  const goldenAngle = Math.PI * (3 - Math.sqrt(5));

  for (let i = 0; i < count; i += 1) {
    const y = 1 - (i / (count - 1)) * 2;
    const radiusAtY = Math.sqrt(Math.max(0, 1 - y * y));
    const theta = goldenAngle * i;

    points.push({
      x: Math.cos(theta) * radiusAtY * radius,
      y: y * radius,
      z: Math.sin(theta) * radiusAtY * radius,
    });
  }

  return points;
}

/** Z después de rotateY + rotateX (para profundidad visual). */
export function rotatedDepth(
  point: { x: number; y: number; z: number },
  rotXDeg: number,
  rotYDeg: number,
): number {
  const ry = (rotYDeg * Math.PI) / 180;
  const rx = (rotXDeg * Math.PI) / 180;

  const z1 = -point.x * Math.sin(ry) + point.z * Math.cos(ry);
  const y1 = point.y;

  return y1 * Math.sin(rx) + z1 * Math.cos(rx);
}

export function depthOpacity(depth: number, radius: number): number {
  const t = (depth + radius) / (2 * radius);
  return 0.28 + Math.max(0, Math.min(1, t)) * 0.72;
}

export function depthScale(depth: number, radius: number): number {
  const t = (depth + radius) / (2 * radius);
  return 0.72 + Math.max(0, Math.min(1, t)) * 0.38;
}
