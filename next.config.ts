import type { NextConfig } from "next";

const basePath = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(/\/$/, "");
const isStaticExport = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  ...(isStaticExport
    ? {
        output: "export" as const,
        trailingSlash: true,
        images: {
          unoptimized: true,
        },
      }
    : {}),
  ...(basePath
    ? {
        basePath,
        assetPrefix: basePath,
      }
    : {}),
};

export default nextConfig;
