import Card from "@/components/Card";
import Section from "@/components/Section";
import CodeBlock from "@/components/CodeBlock";
import FlowDiagram from "@/components/FlowDiagram";

export const metadata = {
  title: "GitHub Connector",
  description:
    "How Claude reads, writes, commits, and branches inside a GitHub repository through the GitHub connector.",
};

export default function GitHubPage() {
  return (
    <>
      <Section kicker="Source control" title="What GitHub is, briefly">
        <p>
          GitHub hosts Git repositories and wraps them with collaboration tools \u2014 pull requests,
          issues, branch protection, and an API that every serious developer tool, including Claude, can
          call directly. Connecting it gives Claude the same surface a human contributor works with.
        </p>
      </Section>

      <Section title="Why connect GitHub to an AI assistant">
        <div className="grid gap-6 sm:grid-cols-2">
          <Card title="Grounded answers">
            Claude reads your actual code instead of guessing at file names or structure.
          </Card>
          <Card title="Real changes">
            Edits land as real commits on a real branch, not as text you have to copy in by hand.
          </Card>
          <Card title="Full history">
            Claude can inspect past commits, diffs, and PRs to understand how the project got here.
          </Card>
          <Card title="Team-normal review">
            Every change still goes through the same commit and PR review process as anyone else&apos;s.
          </Card>
        </div>
      </Section>

      <Section title="Repository access">
        <p>
          The GitHub connector authorizes against specific repositories, or an entire account or
          organization, depending on what you approve during setup. Within an authorized repository,
          Claude can:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li><strong>Read repositories</strong> \u2014 list branches, tags, releases, and metadata.</li>
          <li><strong>Read files</strong> \u2014 fetch file contents and directory listings at any commit or branch.</li>
          <li><strong>Create or edit files</strong> \u2014 write new files or update existing ones.</li>
          <li><strong>Create commits</strong> \u2014 bundle one or many file changes into a single commit.</li>
          <li><strong>Work with branches</strong> \u2014 create a branch and push to it, leaving <code>main</code> untouched.</li>
          <li><strong>Open pull requests</strong> \u2014 propose a branch&apos;s changes for review instead of pushing directly.</li>
        </ul>
      </Section>

      <Section title="Repository permissions, and why writes can fail">
        <p>
          GitHub connectors authenticate as a GitHub App installation, and that installation is granted
          a specific permission set \u2014 Contents, Pull requests, Administration, and so on \u2014 each
          independently set to no access, read, or read &amp; write. Two things follow from that:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            A connector can browse a repository flawlessly and still get a <code>403</code> the moment it
            tries to write, if the Contents permission was only granted as read.
          </li>
          <li>
            Some actions \u2014 like creating a brand-new repository \u2014 need an{" "}
            <strong>Administration</strong> permission that most installations don&apos;t grant by
            default, so repo creation can fail even when everyday commits work fine.
          </li>
        </ul>
        <p>
          In other words: read access and write access are not the same approval, and neither implies
          the other.
        </p>
      </Section>

      <Section title="How OAuth permissions affect GitHub actions">
        <p>
          Every call the connector makes is checked against the scopes granted at connection time. If an
          action needs a scope that wasn&apos;t approved, GitHub rejects it before anything happens \u2014
          there&apos;s no partial write, no silent fallback. The fix is always the same: go back to where
          the GitHub App is installed and grant the missing permission, or fall back to a manual step
          (like creating an empty repository yourself) and let the connector handle the rest.
        </p>
      </Section>

      <Section title="Example workflow">
        <FlowDiagram
          steps={[
            "User",
            "Claude",
            "GitHub Connector",
            "Repository",
            "Create / Update Files",
            "Commit",
            "GitHub",
          ]}
        />
        <CodeBlock
          lang="bash"
          code={`# what the connector is effectively doing under the hood\ngit checkout -b feat/pricing-page\n# write app/pricing/page.tsx\ngit add app/pricing/page.tsx\ngit commit -m "feat: add pricing page"\ngit push origin feat/pricing-page`}
        />
      </Section>
    </>
  );
}
