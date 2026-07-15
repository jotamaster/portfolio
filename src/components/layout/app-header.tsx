import { DesktopNavigation } from "@/components/layout/desktop-navigation";
import { HeaderScrollSurface } from "@/components/layout/header-scroll-surface";
import { MobileNavigation } from "@/components/layout/mobile-navigation";
import { Container } from "@/components/ui/container";
import { GitHubMark } from "@/components/ui/github-mark";
import { navigation } from "@/content/navigation";
import { profile } from "@/content/profile";
import { SITE_NAME } from "@/lib/constants";
import { cn } from "@/lib/cn";

export function AppHeader() {
  return (
    <header className="sticky top-0 z-40">
      <HeaderScrollSurface>
        <Container className="flex h-16 items-center justify-between gap-4">
          <a
            href="#main"
            className="font-mono text-sm font-semibold tracking-tight text-foreground transition-colors hover:text-accent"
          >
            {SITE_NAME}
            <span className="sr-only"> — inicio</span>
          </a>

          <nav className="hidden md:block" aria-label="Principal">
            <DesktopNavigation items={navigation} />
          </nav>

          <div className="flex items-center gap-2">
            {profile.githubUrl ? (
              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "inline-flex size-10 items-center justify-center rounded-md border border-border bg-surface text-muted-foreground",
                  "hover:border-accent/40 hover:text-accent",
                )}
                aria-label="GitHub de Jean Hernández (se abre en una pestaña nueva)"
              >
                <GitHubMark className="size-4" />
              </a>
            ) : null}

            <MobileNavigation items={navigation} />
          </div>
        </Container>
      </HeaderScrollSurface>
    </header>
  );
}
