import { CodeLine } from "@/components/ui/code-line";
import { WindowFrame } from "@/components/ui/window-frame";
import type { Profile } from "@/types/content";

type HeroCodeWindowProps = {
  profile: Profile;
};

export function HeroCodeWindow({ profile }: HeroCodeWindowProps) {
  return (
    <WindowFrame
      variant="editor"
      title="profile.ts"
      actions={
        <span
          aria-hidden
          className="rounded-md border border-border bg-surface px-2 py-1 font-mono text-[10px] text-accent uppercase"
        >
          Run Profile
        </span>
      }
      footer={
        <p className="font-mono text-xs text-muted-foreground">
          ln 1–12 · module: public profile
        </p>
      }
    >
      <div className="space-y-0.5 overflow-x-auto">
        <CodeLine number={1} muted>
          <span className="text-accent-secondary">export const</span>
          {" profile = {"}
        </CodeLine>
        <CodeLine number={2}>
          {"  name: "}
          <span className="text-accent">{`"${profile.displayName}"`}</span>
          {","}
        </CodeLine>
        <CodeLine number={3}>
          {"  role: "}
          <span className="text-accent">{`"${profile.role}"`}</span>
          {","}
        </CodeLine>
        <CodeLine number={4}>
          {"  location: "}
          <span className="text-accent">{`"${profile.location}"`}</span>
          {","}
        </CodeLine>
        <CodeLine number={5}>
          {"  focus: ["}
        </CodeLine>
        <CodeLine number={6}>
          {"    "}
          <span className="text-accent">&quot;web apps&quot;</span>
          {","}
        </CodeLine>
        <CodeLine number={7}>
          {"    "}
          <span className="text-accent">&quot;backend services&quot;</span>
          {","}
        </CodeLine>
        <CodeLine number={8}>
          {"    "}
          <span className="text-accent">&quot;integrations&quot;</span>
          {","}
        </CodeLine>
        <CodeLine number={9}>{"],"}</CodeLine>
        <CodeLine number={10}>
          {"  status: "}
          <span className="text-success">{`"${profile.availability.tone}"`}</span>
          {","}
        </CodeLine>
        <CodeLine number={11} muted>
          {"} as const;"}
        </CodeLine>
        <CodeLine number={12} muted>
          {" "}
        </CodeLine>
      </div>
    </WindowFrame>
  );
}
