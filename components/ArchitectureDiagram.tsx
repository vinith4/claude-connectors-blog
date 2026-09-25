export default function ArchitectureDiagram() {
  return (
    <svg
      viewBox="0 0 640 360"
      className="mx-auto w-full max-w-2xl"
      role="img"
      aria-label="Claude connector architecture diagram"
    >
      <defs>
        <marker id="arrow" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6 Z" className="fill-black/30" />
        </marker>
      </defs>

      <rect x="240" y="10" width="160" height="50" rx="10" className="fill-ink" />
      <text x="320" y="40" textAnchor="middle" className="fill-white text-[14px] font-semibold">
        Claude
      </text>

      <line x1="320" y1="60" x2="320" y2="100" className="stroke-black/30" strokeWidth="1.5" markerEnd="url(#arrow)" />

      <rect x="200" y="100" width="240" height="40" rx="8" className="fill-none stroke-accent" strokeWidth="2" strokeDasharray="4 3" />
      <text x="320" y="125" textAnchor="middle" className="fill-black text-[12px] font-medium">
        Connector Layer (MCP)
      </text>

      <line x1="270" y1="140" x2="150" y2="190" className="stroke-black/30" strokeWidth="1.5" markerEnd="url(#arrow)" />
      <line x1="370" y1="140" x2="490" y2="190" className="stroke-black/30" strokeWidth="1.5" markerEnd="url(#arrow)" />

      <rect x="70" y="190" width="160" height="46" rx="10" className="fill-white stroke-black/20" strokeWidth="1.5" />
      <text x="150" y="219" textAnchor="middle" className="fill-black text-[13px] font-semibold">
        GitHub
      </text>

      <rect x="410" y="190" width="160" height="46" rx="10" className="fill-white stroke-black/20" strokeWidth="1.5" />
      <text x="490" y="219" textAnchor="middle" className="fill-black text-[13px] font-semibold">
        Vercel
      </text>

      <line x1="150" y1="236" x2="150" y2="276" className="stroke-black/30" strokeWidth="1.5" markerEnd="url(#arrow)" />
      <line x1="490" y1="236" x2="490" y2="276" className="stroke-black/30" strokeWidth="1.5" markerEnd="url(#arrow)" />

      <rect x="70" y="280" width="160" height="46" rx="10" className="fill-orange-50 stroke-accent" strokeWidth="1.5" />
      <text x="150" y="309" textAnchor="middle" className="fill-black text-[12px] font-medium">
        Repository
      </text>

      <rect x="410" y="280" width="160" height="46" rx="10" className="fill-sky-50 stroke-accent2" strokeWidth="1.5" />
      <text x="490" y="309" textAnchor="middle" className="fill-black text-[12px] font-medium">
        Deployments
      </text>
    </svg>
  );
}
