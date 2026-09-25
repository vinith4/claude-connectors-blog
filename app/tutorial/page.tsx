import Card from "@/components/Card";
import Section from "@/components/Section";
import CodeBlock from "@/components/CodeBlock";
import FlowDiagram from "@/components/FlowDiagram";

export const metadata = {
  title: "Tutorial: Building This Site",
  description:
    "A step-by-step walkthrough of how this blog itself was built, committed, and deployed using Claude's GitHub and Vercel connectors.",
};

export default function TutorialPage() {
  return (
    <>
      <Section kicker="Case study" title="This site is the example">
        <p>
          Rather than describe a hypothetical project, this page documents the one you&apos;re reading: a
          Next.js blog, built and shipped through the exact GitHub \u2192 Vercel loop described on the
          previous pages.
        </p>
      </Section>

      <Section title="Technology stack">
        <div className="grid gap-6 sm:grid-cols-2">
          <Card title="Next.js (App Router)">File-based routing, server components, and built-in metadata APIs.</Card>
          <Card title="TypeScript">Type-checked components and data throughout.</Card>
          <Card title="Tailwind CSS">Utility-first styling with no separate design-system dependency.</Card>
          <Card title="Vercel">Zero-config build and global deployment for the finished app.</Card>
        </div>
        <CodeBlock
          lang="text"
          code={`app/            routes: page.tsx per URL, layout.tsx, metadata\ncomponents/     shared UI: Nav, Footer, Card, CodeBlock, diagrams\npublic/         static assets\nlib/            shared helpers (content, types)\nstyles/         globals.css (Tailwind entrypoints)`}
        />
      </Section>

      <Section title="The eleven-step lifecycle">
        <FlowDiagram
          steps={[
            "1. Create the project",
            "2. Build the website",
            "3. Create the required files",
            "4. Create a GitHub repository",
            "5. Commit the project",
            "6. Connect the repository to Vercel",
            "7. Deploy the application",
            "8. Verify the deployment",
            "9. Make a change",
            "10. Commit the change",
            "11. Trigger a new deployment",
          ]}
        />
        <p>
          Steps 1\u20133 happened locally, inside Claude&apos;s own workspace, before anything touched
          GitHub. Steps 4 onward used the GitHub and Vercel connectors directly \u2014 including one real
          permission failure along the way, documented honestly below rather than glossed over.
        </p>
      </Section>

      <Section title="Security & permissions">
        <ul className="list-disc space-y-2 pl-6">
          <li><strong>OAuth, not passwords</strong> \u2014 connectors authenticate through GitHub&apos;s and Vercel&apos;s own login flows.</li>
          <li><strong>Access tokens</strong> \u2014 short-lived, scoped credentials, never a shared static password.</li>
          <li><strong>Least privilege</strong> \u2014 grant only the repositories and write scope a task actually needs.</li>
          <li><strong>Read vs. write</strong> \u2014 reviewed and revoked independently; one doesn&apos;t imply the other.</li>
          <li><strong>Environment variables</strong> \u2014 configuration and secrets live in Vercel&apos;s environment settings, never in source.</li>
          <li><strong>No credentials in code</strong> \u2014 this repository contains no API keys, tokens, or secrets of any kind.</li>
          <li><strong>Review before approving</strong> \u2014 check exactly which scopes a connector requests before you accept.</li>
        </ul>
      </Section>

      <Section title="Troubleshooting: GitHub">
        <div className="grid gap-6 sm:grid-cols-2">
          <Card title="Can read but not write">The Contents permission is set to read-only on the App installation \u2014 grant read & write to fix it.</Card>
          <Card title="403 permission errors">The token lacks the specific scope the action needs (this project hit exactly this creating its repo).</Card>
          <Card title="Missing repository access">The GitHub App isn&apos;t installed on that repository or organization yet.</Card>
          <Card title="OAuth authorization issues">The authorization expired or was revoked \u2014 reconnect the integration.</Card>
          <Card title="Branch protection blocks">Required reviews or status checks are blocking a direct push to a protected branch.</Card>
        </div>
      </Section>

      <Section title="Troubleshooting: Vercel">
        <div className="grid gap-6 sm:grid-cols-2">
          <Card title="Build failures">Check the build log first \u2014 a missing dependency or type error is the usual cause.</Card>
          <Card title="Environment variable problems">A variable is missing for the environment (production/preview) the build ran in.</Card>
          <Card title="Incorrect framework detection">The framework preset in project settings doesn&apos;t match the actual project \u2014 set it explicitly.</Card>
          <Card title="Deployment failures">Distinguish a build-time failure from a runtime error using the deployment&apos;s function logs.</Card>
          <Card title="Domain configuration">DNS records don&apos;t yet point at Vercel, or the domain isn&apos;t verified on the project.</Card>
        </div>
      </Section>
    </>
  );
}
