import Card from "@/components/Card";
import Section from "@/components/Section";
import CodeBlock from "@/components/CodeBlock";

export const metadata = {
  title: "Claude Connectors",
  description:
    "What Claude connectors are, how OAuth permissions work, and why read/write scopes matter.",
};

export default function ConnectorsPage() {
  return (
    <>
      <Section kicker="Foundations" title="What are Claude connectors?">
        <p>
          A connector is an authorized bridge between Claude and an external service \u2014 GitHub,
          Vercel, Slack, Google Drive, and others. Instead of pasting code or logs into a chat window,
          you grant Claude a scoped, revocable credential and it calls that service&apos;s real API
          directly, using the Model Context Protocol (MCP) as the wire format.
        </p>
        <p>
          The practical difference is the gap between <em>describing</em> a change and{" "}
          <em>making</em> one. Without a connector, Claude can only suggest a diff for you to apply by
          hand. With a connector, Claude reads the actual repository, writes the actual file, and
          creates the actual commit \u2014 the same way a teammate with push access would.
        </p>
      </Section>

      <Section title="Why connect external tools at all?">
        <div className="grid gap-6 sm:grid-cols-2">
          <Card title="Less copy-paste">
            Claude reads real files and logs instead of you transcribing them into chat.
          </Card>
          <Card title="Fewer stale answers">
            Claude sees current repository state and current deployment status, not a snapshot from
            your last message.
          </Card>
          <Card title="End-to-end workflows">
            A single request can span reading code, editing it, committing it, and watching it deploy.
          </Card>
          <Card title="Auditable actions">
            Every write shows up as a normal commit or deployment, attributed and reviewable like any
            other change.
          </Card>
        </div>
      </Section>

      <Section title="Authentication and authorization">
        <p>
          Connecting a service is an OAuth flow: you sign in on GitHub&apos;s or Vercel&apos;s own site
          and approve a specific set of permissions for a specific application. Claude never sees your
          password or a long-lived personal token by default \u2014 it receives a scoped credential that
          the service can revoke independently at any time.
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong>Authentication</strong> \u2014 proving who is connecting (your GitHub account, your
            Vercel account).
          </li>
          <li>
            <strong>Authorization</strong> \u2014 deciding what that connection is allowed to do once
            connected.
          </li>
        </ul>
      </Section>

      <Section title="Read permissions vs. write permissions">
        <p>Every connector permission falls into one of two buckets:</p>
        <div className="grid gap-6 sm:grid-cols-2">
          <Card title="Read access">
            Claude can look \u2014 list repositories, open files, check deployment logs \u2014 without
            changing anything.
          </Card>
          <Card title="Write access">
            Claude can act \u2014 create commits, open branches, trigger deployments, edit environment
            variables.
          </Card>
        </div>
        <p>
          A connector can hold read access without write access. That&apos;s why an integration can
          browse a repository perfectly and still fail the moment it tries to commit \u2014 the two
          permissions are granted, checked, and revoked independently.
        </p>
      </Section>

      <Section title="Why permissions matter">
        <p>
          Scoped permissions are what make it reasonable to hand an AI assistant real developer tools
          at all. The guiding principle is least privilege: a connector should hold exactly the access a
          task needs, nothing more, for exactly as long as it&apos;s needed.
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>A read-only connector can&apos;t accidentally overwrite production code.</li>
          <li>A write-scoped connector still can&apos;t touch services it was never granted.</li>
          <li>Every action ties back to your own account, so it appears in your normal audit trail.</li>
          <li>Revoking a connector immediately cuts off further access \u2014 no separate cleanup step.</li>
        </ul>
      </Section>

      <Section title="Security considerations">
        <ul className="list-disc space-y-2 pl-6">
          <li>Review exactly which scopes an integration is requesting before approving it.</li>
          <li>Prefer the narrowest scope that gets the job done (read-only where you&apos;re just exploring).</li>
          <li>Use branch protection and required reviews so a connector can propose but not force-merge.</li>
          <li>Keep secrets out of source entirely \u2014 credentials belong in environment variables.</li>
          <li>Revoke connectors you&apos;re no longer using from the provider&apos;s own settings page.</li>
        </ul>
      </Section>

      <Section title="Example: what becomes possible">
        <p>
          Once GitHub and Vercel are both connected, a single conversation can span the whole path from
          idea to production:
        </p>
        <CodeBlock
          lang="workflow"
          code={`"Add a pricing page, commit it, and deploy it"\n   \u2502\n   \u251c\u2500 read current repo structure         (GitHub, read)\n   \u251c\u2500 write app/pricing/page.tsx          (GitHub, write)\n   \u251c\u2500 create commit on main               (GitHub, write)\n   \u2514\u2500 trigger production deployment       (Vercel, write)\n        \u2502\n        \u2514\u2500 report back the live URL`}
        />
      </Section>
    </>
  );
}
