import { TechBadge } from "@/components/ui/tech-badge";
import { WindowFrame } from "@/components/ui/window-frame";
import type { Article } from "@/types/content";

type ArticleCardProps = {
  article: Article;
};

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <WindowFrame
      variant="editor"
      title={`notes/${article.slug}.md`}
      footer={
        article.publishedAt ? (
          <p className="font-mono text-xs text-muted-foreground">
            published: {article.publishedAt}
          </p>
        ) : null
      }
    >
      <div className="space-y-3">
        <p className="font-mono text-lg font-semibold text-foreground">
          {article.title}
        </p>
        <p className="text-sm leading-relaxed text-muted-foreground text-pretty">
          {article.summary}
        </p>
        {article.tags && article.tags.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <TechBadge key={tag}>{tag}</TechBadge>
            ))}
          </div>
        ) : null}
      </div>
    </WindowFrame>
  );
}
