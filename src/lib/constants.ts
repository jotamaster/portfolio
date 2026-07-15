export const SITE_NAME = "JEAN.OS";

export const SITE_TAGLINE =
  "A full-stack system connecting frontend, backend and infrastructure.";

export const SITE_DESCRIPTION =
  "Portafolio de Jean Hernández, Desarrollador Full Stack especializado en integración y operación de sistemas críticos de negocio.";

export const CONTAINER_CLASS = "mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8";

export const MAIN_CONTENT_ID = "main-content";

/** Flags de MVP. */
export const FEATURES = {
  notesSection: false,
} as const;

export function getBasePath(): string {
  return (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(/\/$/, "");
}

export function withBasePath(path: string): string {
  if (!path.startsWith("/") || path.startsWith("//")) {
    return path;
  }

  return `${getBasePath()}${path}`;
}

export function getSiteUrl(): string {
  return (
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "http://localhost:3000"
  );
}
