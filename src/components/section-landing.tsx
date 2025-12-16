import Link from "next/link";

export type SectionLink = {
  title: string;
  href: string;
  description?: string;
};

export function SectionLanding({
  title,
  description,
  links,
  view = "grid",
  baseHref,
}: {
  title: string;
  description: string;
  links: SectionLink[];
  view?: "grid" | "list";
  baseHref: string;
}) {
  return (
    <div className="space-y-8">
      <header className="space-y-3">
        <h1 className="text-4xl font-semibold tracking-tight">{title}</h1>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="max-w-2xl text-slate-700">{description}</p>
          <div className="flex items-center gap-2">
            <span className="text-xs font-medium text-slate-500">Views</span>
            <Link
              href={`${baseHref}?view=grid`}
              className={`rounded-full px-3 py-1 text-xs font-medium ${
                view === "grid" ? "bg-slate-900 text-white" : "border border-slate-300 bg-white"
              }`}
            >
              Grid
            </Link>
            <Link
              href={`${baseHref}?view=list`}
              className={`rounded-full px-3 py-1 text-xs font-medium ${
                view === "list" ? "bg-slate-900 text-white" : "border border-slate-300 bg-white"
              }`}
            >
              List
            </Link>
          </div>
        </div>
      </header>

      {view === "grid" ? (
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {links.map((l) => (
            <li key={l.href} className="rounded-2xl border border-slate-200 bg-white p-5">
              <Link href={l.href} className="block">
                <div className="text-base font-semibold">{l.title}</div>
                {l.description ? (
                  <div className="mt-2 text-sm text-slate-600">{l.description}</div>
                ) : null}
                <div className="mt-4 text-sm font-medium text-slate-900">Learn more</div>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <ul className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
          {links.map((l) => (
            <li key={l.href} className="p-5">
              <Link href={l.href} className="flex items-center justify-between gap-4">
                <div>
                  <div className="font-semibold">{l.title}</div>
                  {l.description ? <div className="mt-1 text-sm text-slate-600">{l.description}</div> : null}
                </div>
                <div className="text-sm font-medium text-slate-900">Learn more</div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}


