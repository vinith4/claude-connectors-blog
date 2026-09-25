import Card from "@/components/Card";
import Section from "@/components/Section";
import FlowDiagram from "@/components/FlowDiagram";

export const metadata = {
  title: "GitHub + Vercel Workflow",
  description:
    "How GitHub and Vercel connectors complement each other in a continuous deployment workflow driven by Claude.",
};

export default function WorkflowPage() {
  return (
    <>
      <Section kicker="Putting it together" title="Why GitHub and Vercel pair naturally">
        <p>
          GitHub owns source control: history, branches, review. Vercel owns delivery: builds, previews,
          production. Connect both, and Claude can drive the full loop \u2014 edit code, commit it, and
          watch it go live \u2014 without either service standing in for the other.
        </p>
      </Section>

      <Section title="The combined loop">
        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <h3 className="mb-3 font-mono text-sm text-accent">GitHub Connector</h3>
            <FlowDiagram steps={["Repository", "Source Code", "Commit"]} />
          </div>
          <div>
            <h3 className="mb-3 font-mono text-sm text-accent2">Vercel Connector</h3>
            <FlowDiagram steps={["Deployment", "Production"]} />
          </div>
        </div>
      </Section>

      <Section title="What this buys you">
        <div className="grid gap-6 sm:grid-cols-2">
          <Card title="Continuous deployment">Every push to main can trigger a production build automatically \u2014 no manual deploy step.</Card>
          <Card title="Automatic previews">Every branch and PR gets its own URL, so a change is reviewable before it ever touches production.</Card>
          <Card title="Deployment feedback">Build and runtime logs come straight back into the conversation when something breaks.</Card>
          <Card title="Debuggable failures">A failed deployment&apos;s error output is enough for Claude to locate and fix the offending file.</Card>
        </div>
      </Section>

      <Section title="Source control meets continuous deployment">
        <p>
          The result is close to a normal CI/CD pipeline, just conversational: GitHub is the source of
          truth for code, Vercel is the source of truth for what&apos;s live, and Claude is the thing
          moving changes between the two \u2014 always through the same commit and deploy primitives a
          human engineer would use.
        </p>
      </Section>
    </>
  );
}
