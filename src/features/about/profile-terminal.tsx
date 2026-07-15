import { TerminalCommand } from "@/components/ui/terminal-command";
import { WindowFrame } from "@/components/ui/window-frame";
import type { Profile } from "@/types/content";

type ProfileTerminalProps = {
  profile: Profile;
};

export function ProfileTerminal({ profile }: ProfileTerminalProps) {
  const whoamiOutput = [
    `name: ${profile.displayName}`,
    `role: ${profile.role}`,
    `location: ${profile.location}`,
    `status: ${profile.availability.tone}`,
    `areas: ${profile.workAreas.join(" / ")}`,
    `modality: ${profile.preferredModality}`,
  ].join("\n");

  return (
    <WindowFrame
      variant="terminal"
      title="about.md — terminal"
      footer={
        <p className="font-mono text-xs text-muted-foreground">
          session: read-only · no secrets loaded
        </p>
      }
    >
      <div className="space-y-4">
        <TerminalCommand command="whoami" output={whoamiOutput} />
        <TerminalCommand
          command="cat mission.txt"
          output={profile.mission}
        />
      </div>
    </WindowFrame>
  );
}
