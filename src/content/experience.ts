import type { Experience } from "@/types/content";

/**
 * Historial profesional tipado a partir del CV.
 * Logros parafraseados del CV público; sin métricas inventadas.
 */
export const experience = [
  {
    id: "los-heroes",
    company: "Caja de Compensación Los Héroes",
    role: "Desarrollador Full Stack · Analista Desarrollo Middleware",
    startDate: "2022-11",
    endDate: "2026-03",
    summary:
      "Desarrollo e integración de sistemas críticos de negocio en una organización de alta demanda operativa.",
    achievements: [
      "Implementación de funcionalidades end-to-end, desde interfaces de usuario hasta servicios backend y lógica de negocio",
      "Trabajo con arquitecturas de microservicios: Nuxt.js (2 y 3) en frontend y Moleculer.js con MongoDB en backend",
      "Resolución continua de requerimientos funcionales y operativos donde la continuidad y la confiabilidad son clave",
      "Mantención y evolución de sistemas existentes, integrándome a bases de código ya implementadas sin afectar la operación",
    ],
    technologies: [
      "Nuxt.js",
      "Moleculer.js",
      "MongoDB",
      "Node.js",
      "JavaScript",
      "Microservicios",
    ],
    commitHash: "a81c3f2",
    branch: "HEAD -> middleware",
    scope: "frontend / backend / middleware",
    environment: "production",
  },
  {
    id: "apiux",
    company: "Apiux",
    role: "Desarrollador Full Stack",
    startDate: "2022-03",
    endDate: "2022-11",
    summary:
      "Desarrollo y mejora de funcionalidades en sistemas empresariales de alta criticidad.",
    achievements: [
      "Integración de frontend y backend con servicios existentes bajo requerimientos definidos",
      "Trabajo colaborativo con equipos técnicos y de negocio",
    ],
    technologies: ["JavaScript", "APIs REST"],
    commitHash: "7e2b9c1",
    branch: "HEAD -> fullstack",
    scope: "frontend / backend",
    environment: "production",
  },
  {
    id: "soho",
    company: "Soho",
    role: "Desarrollador Full Stack (Junior / Semi Senior)",
    startDate: "2019",
    endDate: "2020",
    summary:
      "Desarrollo de aplicaciones web en un entorno colaborativo y de escala regional.",
    achievements: [
      "Implementación de funcionalidades frontend con Vue.js y apoyo en backend con Laravel",
      "Participación en la mantención y evolución de sistemas existentes en producción",
    ],
    technologies: ["Vue.js", "Laravel", "JavaScript"],
    commitHash: "c4d18a0",
    branch: "HEAD -> web",
    scope: "frontend / backend",
    environment: "production",
  },
  {
    id: "sumati-bbdi",
    company: "SumaTI / BBDI",
    role: "Desarrollador Full Stack (Junior)",
    startDate: "2018",
    endDate: "2019",
    summary:
      "Participación en la creación de un sistema de gestión desde cero, abarcando módulos operativos y de control.",
    achievements: [
      "Desarrollo full stack utilizando Laravel, Blade y jQuery",
      "Trabajo con alta autonomía en un entorno de desarrollo inicial",
    ],
    technologies: ["Laravel", "Blade", "jQuery", "MySQL"],
    commitHash: "9f0e2d4",
    branch: "HEAD -> startup",
    scope: "full stack",
    environment: "development",
  },
] as const satisfies readonly Experience[];
