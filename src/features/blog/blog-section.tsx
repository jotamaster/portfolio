import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";
import { getPublishedArticles } from "@/content/articles";
import { ArticleCard } from "@/features/blog/article-card";
import { NotesEmptyState } from "@/features/blog/notes-empty-state";
import { FEATURES } from "@/lib/constants";

export function BlogSection() {
  if (!FEATURES.notesSection) {
    return null;
  }

  const published = getPublishedArticles();

  return (
    <SectionShell
      id="notes"
      aria-labelledby="notes-heading"
      className="border-t border-border/40"
    >
      <SectionHeading
        id="notes-heading"
        eyebrow="notes/"
        title="Notes"
        description="Apuntes técnicos tipados en código. Solo se muestran notas publicadas de verdad."
      />

      <div className="mt-8">
        {published.length === 0 ? (
          <NotesEmptyState />
        ) : (
          <ul className="grid gap-6 md:grid-cols-2">
            {published.map((article) => (
              <li key={article.slug}>
                <ArticleCard article={article} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </SectionShell>
  );
}
