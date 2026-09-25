export default function Card({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-black/10 bg-white p-6 shadow-sm transition hover:shadow-md">
      <h3 className="mb-2 text-lg font-semibold text-ink">{title}</h3>
      <div className="text-sm leading-relaxed text-black/70">{children}</div>
    </div>
  );
}
