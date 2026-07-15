import { navigation } from "@/content/navigation";
import { profile } from "@/content/profile";
import { Container } from "@/components/ui/container";
import { SITE_NAME } from "@/lib/constants";

export function AppFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/80 bg-surface/40">
      <Container className="flex flex-col gap-8 py-10 sm:flex-row sm:items-start sm:justify-between">
        <div className="space-y-2">
          <p className="font-mono text-sm font-semibold text-foreground">
            {SITE_NAME}
          </p>
          <p className="max-w-sm text-sm text-muted-foreground">
            {profile.displayName} · {profile.role} · {profile.location}
          </p>
          <p className="font-mono text-xs text-muted-foreground">
            © {year} · system online
          </p>
        </div>

        <nav aria-label="Pie de página">
          <ul className="grid grid-cols-2 gap-x-8 gap-y-2 sm:grid-cols-1">
            {navigation.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className="font-mono text-xs text-muted-foreground transition-colors hover:text-accent"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </footer>
  );
}
