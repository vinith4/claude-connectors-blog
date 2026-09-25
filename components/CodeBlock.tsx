export default function CodeBlock({
  code,
  lang,
}: {
  code: string;
  lang?: string;
}) {
  return (
    <div className="my-6 overflow-x-auto rounded-lg border border-white/10 bg-ink">
      {lang && (
        <div className="border-b border-white/10 px-4 py-2 text-xs uppercase tracking-wider text-white/40">
          {lang}
        </div>
      )}
      <pre className="p-4 text-sm leading-relaxed text-white/90">
        <code>{code}</code>
      </pre>
    </div>
  );
}
