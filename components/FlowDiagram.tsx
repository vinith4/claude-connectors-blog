export default function FlowDiagram({ steps }: { steps: string[] }) {
  return (
    <div className="mx-auto flex max-w-md flex-col items-center py-4">
      {steps.map((step, i) => (
        <div key={i} className="w-full">
          <div className="rounded-lg border border-black/10 bg-white px-4 py-3 text-center text-sm font-medium text-ink shadow-sm">
            {step}
          </div>
          {i < steps.length - 1 && (
            <div className="flex justify-center py-1 text-black/30">\u2193</div>
          )}
        </div>
      ))}
    </div>
  );
}
