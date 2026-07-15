import type { Article } from "@/types/content";

/**
 * Artículos publicados. Vacío en MVP a propósito:
 * no inventar posts solo para llenar la sección.
 */
export const articles: readonly Article[] = [];

/**
 * Temas en cola (no son artículos publicados).
 */
export const upcomingArticleTopics = [
  "Docker y Kubernetes explicados desde la práctica",
  "Observabilidad de servicios con Dynatrace",
  "Arquitectura modular en NestJS",
  "Automatización de administración de usuarios con Keycloak",
  "Server Components y Client Components en aplicaciones modernas",
] as const;

export function getPublishedArticles(): readonly Article[] {
  return articles.filter((article) => article.published);
}
