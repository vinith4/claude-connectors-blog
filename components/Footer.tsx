export default function Footer() {
  return (
    <footer className="border-t border-black/10 bg-paper py-10 text-center text-sm text-black/50">
      <p>Built as a live demonstration of Claude + GitHub + Vercel connectors.</p>
      <p className="mt-1">
        <a
          href="https://github.com/vinith4/claude-connectors-blog"
          className="underline hover:text-accent"
        >
          View source on GitHub
        </a>
      </p>
    </footer>
  );
}
