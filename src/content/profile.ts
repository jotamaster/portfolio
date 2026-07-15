import type { Profile } from "@/types/content";

export const profile = {
  displayName: "Jean Hernández",
  role: "Desarrollador Full Stack",
  location: "Chile",
  greeting: "Hola, soy Jean Hernández.",
  valueProposition:
    "Desarrollador Full Stack con experiencia en integración y operación de sistemas críticos de negocio. Me especializo en integrarme a sistemas existentes y evolucionarlos sin afectar su operación.",
  mission:
    "Trabajar en entornos de alta demanda donde la continuidad operacional, la confiabilidad y la resolución de requerimientos bajo presión son fundamentales.",
  initLabel: "<System.Init />",
  availability: {
    tone: "available",
    label: "disponible",
  },
  workAreas: ["frontend", "backend", "middleware", "integraciones"],
  preferredModality: "sistemas críticos de negocio",
  primaryStack: [
    "JavaScript",
    "Nuxt.js",
    "Node.js",
    "Moleculer.js",
    "MongoDB",
    "Laravel",
    "MySQL",
  ],
  /** Primera experiencia profesional en CV: SumaTI / BBDI (2018). */
  experienceStartDate: "2018-01-01",
  metrics: [
    { id: "experience", label: "Experiencia", kind: "experience-years" },
    {
      id: "areas",
      label: "Áreas",
      kind: "text",
      value: "frontend · backend · middleware",
    },
    {
      id: "education",
      label: "Formación",
      kind: "text",
      value: "AIEP · Distinción Máxima",
    },
    {
      id: "stack",
      label: "Stack",
      kind: "text",
      value: "Nuxt · Node/Moleculer · MongoDB/MySQL",
    },
  ],
  photoSrc: "/images/jean-hernandez.png",
  photoAlt: "Retrato profesional de Jean Hernández",
  githubUrl: "https://github.com/jotamaster",
  linkedinUrl: "https://www.linkedin.com/in/jeanhernandezcl",
  email: "j3anhernandez@gmail.com",
  cvUrl: "/cv/CV_Jean_Hernandez.pdf",
} as const satisfies Profile;
