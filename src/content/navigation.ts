import type { NavItem } from "@/types/navigation";
import { FEATURES } from "@/lib/constants";

const allNavigation = [
  { id: "main", label: "main.ts", href: "#main" },
  { id: "about", label: "about.md", href: "#about" },
  { id: "skills", label: "skills.json", href: "#skills" },
  { id: "experience", label: "experience.git", href: "#experience" },
  { id: "projects", label: "projects/", href: "#projects" },
  { id: "notes", label: "notes/", href: "#notes" },
  { id: "contact", label: "contact.exe", href: "#contact" },
] as const satisfies readonly NavItem[];

export const navigation = allNavigation.filter((item) => {
  if (item.id === "notes") {
    return FEATURES.notesSection;
  }

  return true;
});
