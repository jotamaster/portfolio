/** Clases Devicon (`colored`) por skill id. Vacío = fallback con iniciales. */
export const skillDeviconClass = {
  javascript: "devicon-javascript-plain colored",
  vue: "devicon-vuejs-plain colored",
  nuxt: "devicon-nuxtjs-plain colored",
  nodejs: "devicon-nodejs-plain colored",
  moleculer: "devicon-nodejs-plain colored",
  laravel: "devicon-laravel-original colored",
  mongodb: "devicon-mongodb-plain colored",
  mysql: "devicon-mysql-original colored",
  rest: "",
  microservices: "",
  websockets: "",
  electron: "devicon-electron-original colored",
} as const satisfies Record<string, string>;

export function getSkillDeviconClass(skillId: string): string | null {
  const value = skillDeviconClass[skillId as keyof typeof skillDeviconClass];
  return value ? value : null;
}

export function skillInitials(name: string): string {
  const cleaned = name.replace(/\.js$/i, "").replace(/[^a-zA-Z0-9]+/g, " ");
  const parts = cleaned.trim().split(/\s+/);

  if (parts.length >= 2) {
    return `${parts[0]?.[0] ?? ""}${parts[1]?.[0] ?? ""}`.toUpperCase();
  }

  return cleaned.slice(0, 2).toUpperCase();
}
