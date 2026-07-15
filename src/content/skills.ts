import type { Skill, SkillCategory } from "@/types/content";

export const skillCategoryLabels = {
  frontend: "Frontend",
  backend: "Backend",
  database: "Database",
  devops: "DevOps",
  observability: "Observability",
  tools: "Tools",
} as const satisfies Record<SkillCategory, string>;

/** Stack alineado al CV público (sin tecnologías no listadas). */
export const skills = [
  {
    id: "javascript",
    name: "JavaScript",
    category: "tools",
    featured: true,
    description: "Lenguaje principal para frontend, backend e integraciones.",
  },
  {
    id: "vue",
    name: "Vue.js",
    category: "frontend",
    featured: true,
    description: "Interfaces y paneles en aplicaciones web productivas.",
  },
  {
    id: "nuxt",
    name: "Nuxt.js",
    category: "frontend",
    featured: true,
    description: "Aplicaciones Vue con Nuxt 2 y Nuxt 3.",
  },
  {
    id: "nodejs",
    name: "Node.js",
    category: "backend",
    featured: true,
    description: "Runtime para servicios, APIs e integraciones.",
  },
  {
    id: "moleculer",
    name: "Moleculer.js",
    category: "backend",
    featured: true,
    description: "Microservicios y comunicación entre servicios.",
  },
  {
    id: "laravel",
    name: "Laravel",
    category: "backend",
    featured: true,
    description: "Backend PHP para aplicaciones web y sistemas de gestión.",
  },
  {
    id: "mongodb",
    name: "MongoDB",
    category: "database",
    featured: true,
    description: "Persistencia documental en arquitecturas de microservicios.",
  },
  {
    id: "mysql",
    name: "MySQL",
    category: "database",
    description: "Bases relacionales en sistemas web y de gestión.",
  },
  {
    id: "rest",
    name: "APIs REST",
    category: "backend",
    description: "Integración y exposición de servicios HTTP.",
  },
  {
    id: "microservices",
    name: "Microservicios",
    category: "backend",
    description: "Arquitecturas distribuidas de alta demanda operativa.",
  },
  {
    id: "websockets",
    name: "WebSockets",
    category: "tools",
    description: "Comunicación en tiempo real entre cliente y servidor.",
  },
  {
    id: "electron",
    name: "Electron",
    category: "tools",
    description: "Aplicaciones de escritorio con stack web.",
  },
] as const satisfies readonly Skill[];

export const skillCategories = [
  "frontend",
  "backend",
  "database",
  "tools",
] as const satisfies readonly SkillCategory[];
