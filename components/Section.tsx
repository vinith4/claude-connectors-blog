export default function Section({
  id,
  title,
  kicker,
  children,
}: {
  id?: string;
  title: string;
  kicker?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-4xl px-6 py-16">
      {kicker && (
        <p className="mb-2 text-sm font-medium uppercase tracking-widest text-accent">
          {kicker}
        </p>
      )}
      <h2 className="mb-6 text-3xl font-bold text-ink">{title}</h2>
      <div className="space-y-4 leading-relaxed text-black/75">{children}</div>
    </section>
  );
}
