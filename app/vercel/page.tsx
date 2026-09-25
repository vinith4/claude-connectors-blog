import Card from "@/components/Card";
import Section from "@/components/Section";
import CodeBlock from "@/components/CodeBlock";
import FlowDiagram from "@/components/FlowDiagram";

export const metadata = {
  title: "Vercel Connector",
  description:
    "How Claude uses the Vercel connector to link a repository, trigger builds, and manage deployments.",
};

export default function VercelPage() {
  return (
    <>
      <Section kicker="Hosting & deployment" title="What Vercel is">
        <p>
          Vercel is a hosting platform built around Git: push a branch, and it builds and deploys that
          branch automatically. It&apos;s the default home for Next.js apps, but it deploys most modern
          frontend frameworks the same way.
        </p>
      </Section>

      <Section title="Why Vercel fits frontend workflows">
        <div className="grid gap-6 sm:grid-cols-2">
          <Card title="Zero-config builds">Vercel detects the framework and picks sane build settings automatically.</Card>
          <Card title="Preview per branch">Every branch and pull request gets its own shareable preview URL.</Card>
          <Card title="Instant rollback">Production traffic can be pointed at any previous deployment in seconds.</Card>
          <Card title="Global edge network">Deployments serve from edge locations close to each visitor by default.</Card>
        </div>
      </Section>

      <Section title="Connecting Vercel to an AI assistant">
        <p>
          Like GitHub, the Vercel connector is an OAuth-authorized, scoped connection. Once approved,
          Claude can operate on your Vercel resources \u2014 reading and, where write access is granted,
          acting on them \u2014 the same way you would from the Vercel dashboard or CLI.
        </p>
      </Section>

      <Section title="What Claude can see and do">
        <ul className="list-disc space-y-2 pl-6">
          <li><strong>Projects</strong> \u2014 the container that links a repository to build settings and domains.</li>
          <li><strong>Deployments</strong> \u2014 every build Vercel has produced, with status and logs.</li>
          <li><strong>Production deployments</strong> \u2014 the build currently serving your main domain.</li>
          <li><strong>Preview deployments</strong> \u2014 a unique URL generated automatically for a branch or PR.</li>
          <li><strong>Deployment status</strong> \u2014 queued, building, ready, or error, checked in real time.</li>
          <li><strong>Environment variables</strong> \u2014 configuration and secrets scoped per environment.</li>
          <li><strong>Domains</strong> \u2014 the custom and generated domains attached to a project.</li>
          <li><strong>Logs</strong> \u2014 build output and runtime logs, useful for diagnosing a failed deploy.</li>
        </ul>
      </Section>

      <Section title="Managing a deployment workflow">
        <p>
          Because Claude can read deployment status and logs, it can close the loop on a change instead
          of leaving you to check the dashboard: push a commit, watch the resulting build, read the error
          if it fails, fix the file, and push again \u2014 all inside the same conversation.
        </p>
      </Section>

      <Section title="Example: repository to production">
        <FlowDiagram steps={["GitHub Repository", "Vercel", "Build", "Deployment", "Production URL"]} />
        <CodeBlock
          lang="bash"
          code={`# roughly equivalent to running this yourself\nvercel link --repo vinith4/claude-connectors-blog\nvercel deploy --prod`}
        />
      </Section>
    </>
  );
}
