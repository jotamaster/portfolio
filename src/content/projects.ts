import type { Project, ProjectStatus } from "@/types/content";

export const projectStatusLabels = {
  production: "production",
  development: "development",
  concept: "concept",
} as const satisfies Record<ProjectStatus, string>;

export const projects = [
  {
    slug: "ziona",
    name: "Ziona",
    shortDescription:
      "Organización de hogares, espacios, tareas e invitaciones.",
    description:
      "Aplicación para coordinar la vida compartida en un hogar: espacios, tareas e invitaciones entre personas.",
    problem:
      "La coordinación doméstica suele fragmentarse entre chats, notas y recordatorios sin un modelo claro de espacios y responsabilidades.",
    status: "development",
    technologies: [
      "NestJS",
      "Prisma",
      "PostgreSQL",
      "Docker",
      "React Native",
    ],
    highlights: [
      "Espacios y roles en un hogar compartido",
      "Tareas e invitaciones entre miembros",
      "API backend con persistencia relacional",
    ],
    featured: true,
    repositoryUrl: undefined,
    demoUrl: undefined,
    caseStudy: {
      context:
        "Ziona nace para organizar la operación diaria de un hogar o grupo de convivencia sin depender solo de mensajes informales.",
      problem:
        "Sin un sistema compartido, las tareas, espacios e invitaciones quedan dispersos y es difícil ver quién hace qué.",
      objective:
        "Ofrecer un modelo claro de espacios, miembros y tareas con invitaciones controladas.",
      responsibility:
        "Diseño e implementación full stack: modelado de dominio, API, persistencia y cliente de la aplicación.",
      architecture:
        "Backend modular en NestJS con Prisma sobre PostgreSQL, empaquetado con Docker. Cliente móvil en React Native.",
      technicalDecisions: [
        "Dominio centrado en hogares, espacios y membresías",
        "Prisma + PostgreSQL para relaciones y consistencia",
        "Docker para entornos reproducibles de desarrollo",
      ],
      learnings: [
        "Un buen modelo de membresía simplifica invitaciones y permisos",
        "Separar espacios de tareas evita acoplar la UI al chat",
      ],
      nextSteps: [
        "Cerrar el MVP de flujos de hogar, espacios y membresías",
        "Pulir flujos de invitación y estados de tarea",
        "Preparar demo pública cuando el MVP lo permita",
      ],
    },
  },
  {
    slug: "irumi",
    name: "Irumi",
    shortDescription:
      "Contexto persistente, tareas, reglas y flujos para agentes de IA.",
    description:
      "Herramienta y metodología para mejorar el trabajo con agentes de inteligencia artificial mediante contexto persistente, tareas, reglas y flujos repetibles.",
    problem:
      "Los agentes pierden contexto entre sesiones y los flujos de trabajo quedan implícitos, lo que degrada calidad y repetibilidad.",
    status: "development",
    technologies: ["TypeScript", "Node.js", "CLI"],
    highlights: [
      "Contexto persistente entre sesiones",
      "Tareas y reglas versionables",
      "Flujos para agentes de desarrollo",
    ],
    featured: true,
    repositoryUrl: undefined,
    demoUrl: undefined,
    caseStudy: {
      context:
        "Irumi aborda el trabajo con agentes de IA en desarrollo de software, donde el contexto y las reglas suelen vivir solo en la conversación.",
      problem:
        "Sin memoria estructurada ni flujos explícitos, cada sesión reinicia conocimiento y decisiones importantes se pierden.",
      objective:
        "Dar a los agentes un entorno con contexto persistente, tareas, reglas y flujos que se puedan reutilizar.",
      responsibility:
        "Definición de la metodología, modelado del sistema y implementación de la CLI / runtime en TypeScript y Node.js.",
      architecture:
        "Núcleo en TypeScript/Node.js orientado a CLI, con artefactos de contexto, reglas y tareas que los agentes pueden consumir e integrar con herramientas de desarrollo.",
      technicalDecisions: [
        "Priorizar archivos y contratos tipados sobre UI temprana",
        "Tratar reglas y flujos como artefactos versionables",
        "Integraciones ligeras con el entorno de desarrollo",
      ],
      learnings: [
        "El contexto explícito mejora más que prompts ad hoc",
        "Las reglas compartidas reducen drift entre agentes",
      ],
      nextSteps: [
        "Estabilizar la superficie de la CLI y los contratos tipados",
        "Documentar flujos de ejemplo",
        "Ampliar conectores con herramientas de desarrollo",
      ],
    },
  },
] as const satisfies readonly Project[];

export function getFeaturedProjects(): readonly Project[] {
  return projects.filter((project) => project.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getAllProjectSlugs(): readonly string[] {
  return projects.map((project) => project.slug);
}
