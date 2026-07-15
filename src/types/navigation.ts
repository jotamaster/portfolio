export const SECTION_IDS = [
  "main",
  "about",
  "skills",
  "experience",
  "projects",
  "notes",
  "contact",
] as const;

export type SectionId = (typeof SECTION_IDS)[number];

export type NavItem = {
  id: SectionId;
  label: string;
  href: `#${SectionId}`;
};
