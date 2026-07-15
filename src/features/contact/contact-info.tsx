import { StatusIndicator } from "@/components/ui/status-indicator";
import { WindowFrame } from "@/components/ui/window-frame";
import { CodeLine } from "@/components/ui/code-line";
import { profile } from "@/content/profile";

export function ContactInfo() {
  return (
    <WindowFrame
      variant="editor"
      title="contact.json"
      footer={
        <StatusIndicator
          tone={profile.availability.tone}
          label={profile.availability.label}
        />
      }
    >
      <div className="space-y-0.5 overflow-x-auto">
        <CodeLine number={1} muted>
          {"{"}
        </CodeLine>
        <CodeLine number={2}>
          {"  "}
          <span className="text-accent-secondary">&quot;operator&quot;</span>
          {": "}
          <span className="text-accent">{`"${profile.displayName}"`}</span>
          {","}
        </CodeLine>
        <CodeLine number={3}>
          {"  "}
          <span className="text-accent-secondary">&quot;role&quot;</span>
          {": "}
          <span className="text-accent">{`"${profile.role}"`}</span>
          {","}
        </CodeLine>
        <CodeLine number={4}>
          {"  "}
          <span className="text-accent-secondary">&quot;location&quot;</span>
          {": "}
          <span className="text-accent">{`"${profile.location}"`}</span>
          {","}
        </CodeLine>
        <CodeLine number={5}>
          {"  "}
          <span className="text-accent-secondary">&quot;availability&quot;</span>
          {": "}
          <span className="text-success">{`"${profile.availability.tone}"`}</span>
          {","}
        </CodeLine>
        <CodeLine number={6}>
          {"  "}
          <span className="text-accent-secondary">&quot;email&quot;</span>
          {": "}
          {profile.email ? (
            <span className="text-accent">{`"${profile.email}"`}</span>
          ) : (
            <span className="text-muted-foreground">
              &quot;TODO: confirmar con Jean&quot;
            </span>
          )}
          {","}
        </CodeLine>
        <CodeLine number={7}>
          {"  "}
          <span className="text-accent-secondary">&quot;github&quot;</span>
          {": "}
          {profile.githubUrl ? (
            <a
              href={profile.githubUrl}
              className="text-accent underline-offset-2 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {`"${profile.githubUrl}"`}
            </a>
          ) : (
            <span className="text-muted-foreground">
              &quot;TODO: confirmar con Jean&quot;
            </span>
          )}
          {","}
        </CodeLine>
        <CodeLine number={8}>
          {"  "}
          <span className="text-accent-secondary">&quot;linkedin&quot;</span>
          {": "}
          {profile.linkedinUrl ? (
            <a
              href={profile.linkedinUrl}
              className="text-accent underline-offset-2 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {`"${profile.linkedinUrl}"`}
            </a>
          ) : (
            <span className="text-muted-foreground">
              &quot;TODO: confirmar con Jean&quot;
            </span>
          )}
        </CodeLine>
        <CodeLine number={9} muted>
          {"}"}
        </CodeLine>
      </div>
    </WindowFrame>
  );
}
