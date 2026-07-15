import type { MetadataRoute } from "next";

import { SITE_DESCRIPTION, SITE_NAME, withBasePath } from "@/lib/constants";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE_NAME} — Jean Hernández`,
    short_name: SITE_NAME,
    description: SITE_DESCRIPTION,
    start_url: withBasePath("/"),
    display: "standalone",
    background_color: "#070b10",
    theme_color: "#070b10",
    lang: "es",
    categories: ["portfolio", "developer"],
    icons: [
      {
        src: withBasePath("/icon.png"),
        type: "image/png",
        sizes: "800x800",
        purpose: "any",
      },
    ],
  };
}
