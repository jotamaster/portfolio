import { ImageResponse } from "next/og";

import { SITE_NAME, SITE_TAGLINE } from "@/lib/constants";

export const alt = `${SITE_NAME} — portafolio de Jean Hernández`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#070b10",
          color: "#e8eef5",
          fontFamily: "ui-monospace, monospace",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            color: "#3dff9a",
            letterSpacing: 4,
          }}
        >
          SYSTEM ONLINE
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ fontSize: 72, fontWeight: 700 }}>{SITE_NAME}</div>
          <div style={{ fontSize: 28, color: "#8b9bb0", maxWidth: 820 }}>
            {SITE_TAGLINE}
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 22, color: "#3ecfff" }}>
          Jean Hernández · Desarrollador Full Stack
        </div>
      </div>
    ),
    size,
  );
}
