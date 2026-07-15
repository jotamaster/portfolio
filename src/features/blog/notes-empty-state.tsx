import { TerminalCommand } from "@/components/ui/terminal-command";
import { WindowFrame } from "@/components/ui/window-frame";
import { upcomingArticleTopics } from "@/content/articles";

export function NotesEmptyState() {
  const queue = upcomingArticleTopics
    .map((topic, index) => `${String(index + 1).padStart(2, "0")}. ${topic}`)
    .join("\n");

  return (
    <WindowFrame
      variant="terminal"
      title="notes/ — empty"
      footer={
        <p className="font-mono text-xs text-muted-foreground">
          status: waiting for first published note · Sanity pending post-MVP
        </p>
      }
    >
      <div className="space-y-4">
        <TerminalCommand
          command="ls notes/"
          output={"(empty) — no published articles yet"}
        />
        <TerminalCommand command="cat queue.txt" output={queue} />
        <p className="text-sm text-muted-foreground text-pretty">
          La sección está lista. Cuando exista contenido real se listará aquí;
          no se publican artículos ficticios.
        </p>
      </div>
    </WindowFrame>
  );
}
