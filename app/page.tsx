import Link from "next/link";
import Card from "@/components/Card";
import ArchitectureDiagram from "@/components/ArchitectureDiagram";

export default function Home() {
  return (
    <>
      <section className="border-b border-black/10 bg-ink text-white">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center">
          <p className="mb-4 font-mono text-sm text-accent">a working case study</p>
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
            Claude + Connectors: From AI Assistant to Developer Workflow
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">
            How GitHub and Vercel connectors can turn an AI conversation into a real
            development, version-control, and deployment workflow.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/connectors"
              className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-ink hover:bg-orange-400"
            >
              Read the Guide
            </Link>
            <a
              href="https://github.com/vinith4/claude-connectors-blog"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:border-white/40"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="mb-8 text-center text-2xl font-bold">What this site actually demonstrates</h2>
        <div className="grid gap-6 sm:grid-cols-3">
          <Card title="Connectors">
            MCP-based connectors let Claude call real GitHub and Vercel APIs, scoped by OAuth
            permissions.
          </Card>
          <Card title="GitHub">
            Claude read, wrote, and committed the files that make up this site, commit by commit.
          </Card>
          <Card title="Vercel">
            Claude linked the repository to a Vercel project and triggered the build that put this
            page online.
          </Card>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-20">
        <h2 className="mb-8 text-center text-2xl font-bold">Connector architecture</h2>
        <ArchitectureDiagram />
      </section>
    </>
  );
}
