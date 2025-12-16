const definitions = [
  {
    term: "Foundations",
    definition: "Fundamental elements that provide building blocks for consistent and cohesive user experiences.",
    examples: ["Color", "Typography", "Iconography", "Spacing"],
  },
  {
    term: "Token",
    definition: "A reusable variable representing a specific design decision.",
    examples: ["color.brand.navy.500", "spacing.page.gutter", "radius.md"],
  },
  {
    term: "Component",
    definition: "A reusable UI building block that serves a specific interface function.",
    examples: ["Button", "Card", "Text field"],
  },
  {
    term: "Pattern",
    definition: "A reusable solution to a common user problem or flow.",
    examples: ["Progressive disclosure", "Bulk edit", "Upload flow"],
  },
];

export default function SystemDefinitionsPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <h1 className="text-4xl font-semibold tracking-tight">System definitions</h1>
        <p className="max-w-2xl text-slate-700">
          Definitions and examples of words and elements throughout Everyday Design System.
        </p>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white">
        <ul className="divide-y divide-slate-200">
          {definitions.map((d) => (
            <li key={d.term} className="p-6">
              <div className="text-base font-semibold">{d.term}</div>
              <p className="mt-2 text-sm text-slate-700">{d.definition}</p>
              <div className="mt-3 text-xs font-semibold text-slate-500">Examples</div>
              <ul className="mt-2 flex flex-wrap gap-2">
                {d.examples.map((e) => (
                  <li key={e} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs">
                    {e}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}


