import Link from "next/link";

const filters = [
  { label: "All", value: "" },
  { label: "Color", value: "color" },
  { label: "Content", value: "content" },
  { label: "Figma", value: "figma" },
  { label: "Iconography", value: "iconography" },
  { label: "Illustration", value: "illustration" },
  { label: "Logo", value: "logo" },
  { label: "Motion", value: "motion" },
  { label: "Photography", value: "photography" },
  { label: "Templates", value: "templates" },
  { label: "Typography", value: "typography" },
];

export default async function ToolsAndResourcesPage({
  searchParams,
}: {
  searchParams: Promise<{ filter?: string; view?: string }>;
}) {
  const { filter, view } = await searchParams;
  const selectedView = view === "list" ? "list" : "grid";

  return (
    <div className="space-y-8">
      <header className="space-y-3">
        <h1 className="text-4xl font-semibold tracking-tight">Tools &amp; resources</h1>
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap gap-2" role="group" aria-label="Resource filters">
            {filters.map((f) => {
              const href = f.value ? `/tools-and-resources?filter=${f.value}` : "/tools-and-resources";
              const active = (filter ?? "") === f.value;
              return (
                <Link
                  key={f.label}
                  href={href}
                  className={`rounded-full px-3 py-1 text-xs font-medium ${
                    active ? "bg-slate-900 text-white" : "border border-slate-300 bg-white"
                  }`}
                >
                  {f.label}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-2 self-start">
            <span className="text-xs font-medium text-slate-500">Views</span>
            <Link
              href={`/tools-and-resources?${new URLSearchParams({ ...(filter ? { filter } : {}), view: "grid" })}`}
              className={`rounded-full px-3 py-1 text-xs font-medium ${
                selectedView === "grid" ? "bg-slate-900 text-white" : "border border-slate-300 bg-white"
              }`}
            >
              Grid
            </Link>
            <Link
              href={`/tools-and-resources?${new URLSearchParams({ ...(filter ? { filter } : {}), view: "list" })}`}
              className={`rounded-full px-3 py-1 text-xs font-medium ${
                selectedView === "list" ? "bg-slate-900 text-white" : "border border-slate-300 bg-white"
              }`}
            >
              List
            </Link>
          </div>
        </div>
      </header>

      <div className={selectedView === "grid" ? "grid gap-4 sm:grid-cols-2 lg:grid-cols-3" : "space-y-3"}>
        {[
          { title: "Brand assets", note: "Logo, emblem, and lockups (placeholder)" },
          { title: "Type styles", note: "Work Sans scale + Geist Mono usage (placeholder)" },
          { title: "Color tokens", note: "Navy/Green/Khaki/Neutrals ramps (placeholder)" },
        ].map((r) => (
          <div key={r.title} className="rounded-2xl border border-slate-200 bg-white p-5">
            <div className="text-base font-semibold">{r.title}</div>
            <div className="mt-2 text-sm text-slate-600">{r.note}</div>
          </div>
        ))}
      </div>
    </div>
  );
}


