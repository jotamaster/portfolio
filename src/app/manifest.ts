import type { MetadataRoute } from "next";

import { SITE_DESCRIPTION, SITE_NAME } from "@/lib/constants";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE_NAME} — Jean Hernández`,
    short_name: SITE_NAME,
    description: SITE_DESCRIPTION,
    start_url: "/",
    display: "standalone",
    background_color: "#070b10",
    theme_color: "#070b10",
    lang: "es",
    categories: ["portfolio", "developer"],
    icons: [
      {
        src: "/icon",
        type: "image/png",
        sizes: "800x800",
        purpose: "any",
      },
    ],
  };
}
