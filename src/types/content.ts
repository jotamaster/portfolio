export type AvailabilityTone = "available" | "busy" | "offline";

export type SkillCategory =
  | "frontend"
  | "backend"
  | "database"
  | "devops"
  | "observability"
  | "tools";

export type Skill = {
  id: string;
  name: string;
  category: SkillCategory;
  featured?: boolean;
  description?: string;
};

export type Experience = {
  id: string;
  /** Omitir o dejar pendiente hasta confirmar con Jean (sin inventar empleadores). */
  company?: string;
  role: string;
  /** ISO YYYY o YYYY-MM. Omitir hasta confirmar. */
  startDate?: string;
  endDate?: string;
  summary: string;
  achievements: readonly string[];
  technologies: readonly string[];
  commitHash: string;
  branch: string;
  scope?: string;
  environment?: string;
};

export type ProjectStatus = "production" | "development" | "concept";

export type ProjectCaseStudy = {
  context: string;
  problem: string;
  objective: string;
  responsibility: string;
  architecture: string;
  technicalDecisions: readonly string[];
  learnings: readonly string[];
  nextSteps: readonly string[];
};

export type Project = {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  problem: string;
  status: ProjectStatus;
  technologies: readonly string[];
  highlights: readonly string[];
  featured: boolean;
  caseStudy: ProjectCaseStudy;
  /** Omitir si el repo no es público. */
  repositoryUrl?: string;
  /** Omitir si no existe demo. */
  demoUrl?: string;
  image?: string;
};

export type Article = {
  slug: string;
  title: string;
  summary: string;
  /** Solo artículos con published: true se listan públicamente. */
  published: boolean;
  /** ISO YYYY-MM-DD. Requerido cuando published es true. */
  publishedAt?: string;
  tags?: readonly string[];
};

export type ProfileMetric =
  | {
      id: string;
      label: string;
      kind: "text";
      value: string;
    }
  | {
      id: string;
      label: string;
      kind: "experience-years";
    };

export type Profile = {
  displayName: string;
  role: string;
  location: string;
  greeting: string;
  valueProposition: string;
  mission: string;
  initLabel: string;
  availability: {
    tone: AvailabilityTone;
    label: string;
  };
  workAreas: readonly string[];
  preferredModality: string;
  primaryStack: readonly string[];
  /**
   * ISO date (YYYY-MM-DD) usada para calcular años de experiencia.
   * Omitir hasta confirmar con Jean.
   */
  experienceStartDate?: string;
  metrics: readonly ProfileMetric[];
  /** Ruta pública o URL absoluta. Omitir hasta tener foto real. */
  photoSrc?: string;
  photoAlt?: string;
  /** TODO: confirmar contenido con Jean */
  githubUrl?: string;
  linkedinUrl?: string;
  email?: string;
  cvUrl?: string;
};
