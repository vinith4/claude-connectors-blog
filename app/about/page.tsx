import Section from "@/components/Section";

export const metadata = {
  title: "About",
  description: "About this project: a working demonstration of Claude's GitHub and Vercel connectors.",
};

export default function AboutPage() {
  return (
    <Section kicker="About" title="Why this exists">
      <p>
        This site is both an article and its own proof: every page here was written, committed, and
        deployed by Claude using the GitHub and Vercel connectors described throughout the site, rather
        than being pasted in by hand.
      </p>
      <p>
        The goal isn&apos;t to claim the workflow is magic \u2014 it&apos;s to show, plainly, what an AI
        assistant can and can&apos;t do once it&apos;s holding real, scoped credentials to real developer
        tools: what commits look like, what a permission failure looks like, and how the two services
        hand work back and forth.
      </p>
      <p>
        Source is public at{" "}
        <a href="https://github.com/vinith4/claude-connectors-blog" className="text-accent underline">
          github.com/vinith4/claude-connectors-blog
        </a>
        .
      </p>
    </Section>
  );
}
