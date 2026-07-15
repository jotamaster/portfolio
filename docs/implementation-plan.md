# Plan de implementación — JEAN.OS

Portafolio personal de Jean Hernandez (Full Stack Developer, Osorno, Chile).

Referencia conceptual: abdulmomin.dev (inspiración, no copia).  
Identidad propia: **JEAN.OS** — interfaz tipo SO / terminal / editor.

---

## 1. Auditoría del repositorio (Fase 0)

### Estado al inicio

| Elemento | Estado |
|---|---|
| Código de aplicación | Ausente |
| `package.json` / Next.js | Ausente |
| Git | No inicializado |
| pnpm | No instalado en el entorno |
| Contenido existente | `plan.txt`, `reglas.txt` |
| Cursor rules | `.cursor/rules/portfolio-architecture.mdc` (`alwaysApply: true`) |

### Inconsistencias detectadas

1. **Nombre del directorio**: el plan sugiere crear `jean-portfolio`; el workspace ya se llama `portfolio` y contiene plan/reglas/rules. **Decisión**: scaffold en el root actual (`.`), no en un subdirectorio.
2. **Git ausente**: el plan asume commits por fase. **Decisión**: `git init` en Fase 0.
3. **pnpm ausente**: requerido por el plan. **Decisión**: activar via Corepack.
4. **Contenido profesional incompleto**: Ziona/Irumi, métricas, URLs, CV y años de experiencia requieren confirmación. Usar `TODO: confirmar contenido con Jean` donde falte.
5. **Sanity**: fuera de MVP (Fase 11 opcional).
6. **Tests**: Vitest/RTL/Playwright se instalan cuando arranque la fase de pruebas (Fase 10 / según de fundamentos), no en el scaffold mínimo.

### Verificaciones baseline (post-scaffold)

| Comando | Resultado |
|---|---|
| `pnpm lint` | OK |
| `pnpm build` | OK (Next.js 16.2.10 / Turbopack) |
| Tests | N/A (aún no configurados; Fase 10) |

Versiones instaladas: Next `16.2.10`, React `19.2.4`, Tailwind `4.x`, TypeScript `5.9` (`strict: true`), pnpm `11.13.0`.

Nota: `create-next-app` falló en el root no vacío (`plan.txt` / `reglas.txt`); se generó en un subdirectorio temporal y se fusionó al root.

---

## 2. Stack definido

| Área | Tecnología |
|---|---|
| Framework | Next.js (App Router) `@latest` |
| UI | React + TypeScript estricto + Tailwind CSS |
| Package manager | pnpm |
| Motion | `motion/react` (Fase 1+) |
| Iconos | Lucide React |
| Utils | `clsx` + `tailwind-merge` → `cn` |
| Validación | Zod |
| Contacto | Resend + honeypot + rate limit (Fase 9) |
| Tests | Vitest, RTL, Playwright, axe (Fase 10) |
| CMS | Archivos TS tipados en MVP; Sanity opcional post-MVP |

No usar Material UI / Chakra / Ant Design / Three.js en el MVP.

---

## 3. Estructura final (objetivo)

```text
src/
├── app/                    # routes, metadata, api/contact
├── components/
│   ├── layout/             # header, footer, mobile nav, background
│   ├── ui/                 # design system
│   └── motion/             # wrappers FadeIn / Reveal / Stagger
├── features/               # hero, about, skills, experience, projects, blog, contact
├── content/                # datos tipados (profile, skills, …)
├── lib/                    # cn, env, constants, structured-data
└── types/                  # content, navigation
```

Metáfora de navegación:

`main.ts` · `about.md` · `skills.json` · `experience.git` · `projects/` · `notes/` · `contact.exe`

---

## 4. Fases y criterios

| Fase | Entrega | Commit sugerido |
|---|---|---|
| **0** | Auditoría, este documento, scaffold mínimo, baseline lint/build | `docs: define portfolio architecture and implementation plan` |
| **1** | Design system: tokens, fuentes, UI base, página temporal | `feat(ui): create portfolio design system foundations` |
| **2** | Layout, header/footer, skip link, nav tipada | `feat(layout): add responsive shell and section navigation` |
| **3** | Hero (`HeroSection`, code window, boot sequence) | `feat(hero): implement system-inspired introduction` |
| **4** | About (operator card, terminals, métricas verificables) | `feat(about): add operator profile and professional summary` |
| **5** | Skills grid + universo 2D + fallback / reduced motion | `feat(skills): add interactive skills universe with accessible fallback` |
| **6** | Experience como commits Git | `feat(experience): render professional history as git commits` |
| **7** | Projects + rutas `/projects/[slug]` (Ziona, Irumi) | `feat(projects): add featured projects and case study routes` |
| **8** | Notes/blog tipado + empty state | `feat(notes): add typed articles section and empty state` |
| **9** | Contacto Zod + Resend + honeypot + rate limit | `feat(contact): add validated and protected contact flow` |
| **10** | SEO, a11y, performance, tests E2E/axe | `chore: finalize seo accessibility performance and testing` |
| **11** | Sanity (opcional, post-MVP) | `feat(cms): integrate sanity for portfolio articles` |

**Protocolo por fase**: leer archivos → resumir → proponer cambios → implementar solo esa fase → lint/test/build → reportar → **detener**.

---

## 5. Riesgos

| Riesgo | Mitigación |
|---|---|
| Contenido profesional incompleto o confidencial | `TODO: confirmar…`; no inventar métricas/empresas |
| Resend / env vars sin configurar | Contacto en mock/offline hasta tener secrets |
| Skills Universe vs a11y / reduced motion | Grid fallback obligatorio; Motion solo en desktop sin reduced-motion |
| Bundle con Motion | Client components en hojas; LazyMotion si hace falta |
| Enlaces de proyectos aún privados | No renderizar `repositoryUrl` / `demoUrl` si faltan |
| CV aún no disponible | CTA condicional o TODO |

---

## 6. Decisiones de arquitectura

1. **Server Components por defecto**; `"use client"` solo en hojas interactivas.
2. **Contenido en `src/content`** tipado con `satisfies`; cero datos profesionales hardcodeados en UI.
3. **Tokens CSS semánticos** (`--accent`, `--muted-foreground`, …); evitar colores Tailwind ad-hoc para identidad.
4. **Identidad JEAN.OS**: estética oscura, acentos verde/cyan, metáfora terminal/editor — sin copiar la referencia.
5. **Contacto**: validación Zod solo confiable en servidor; honeypot; rate limit en producción.
6. **Dependencias nuevas**: justificar problema / alternativa / impacto en bundle antes de instalar.
7. **Commits**: uno por fase, mensajes del plan maestro.

---

## 7. Contenido pendiente de confirmación

- [ ] Foto profesional
- [ ] URL de CV / PDF
- [ ] GitHub / LinkedIn / email públicos
- [ ] Fecha de inicio de experiencia (años calculados)
- [ ] Detalle real de roles/logros (sin datos confidenciales)
- [ ] Stack exacto de Ziona e Irumi (React Native vs Nuxt, etc.)
- [ ] Repos/demos públicos
- [ ] Estado de disponibilidad
- [ ] Artículos reales para `notes/` (o empty state)

---

## 8. Definition of Done (global)

Ver sección 17 de `plan.txt`: profesional en mobile/desktop, datos separados, frontera server/client correcta, formulario protegido, sin métricas/enlaces inventados, lint/tests/build OK, teclado + reduced motion, contenido principal sin JS cliente.

---

## 9. Siguiente paso

Al aprobar el cierre de Fase 0, ejecutar **Fase 1 — Fundaciones** (tokens, fuentes, componentes UI base, página temporal de showcase).
