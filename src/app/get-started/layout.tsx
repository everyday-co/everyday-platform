import Link from "next/link";

const items = [
  { label: "Overview", href: "/get-started" },
  { label: "FAQ", href: "/get-started/faq" },
  { label: "System definitions", href: "/get-started/system-definitions" },
];

export default function GetStartedLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid gap-10 lg:grid-cols-[220px_1fr]">
      <aside className="lg:sticky lg:top-6 lg:h-[calc(100dvh-6rem)] lg:overflow-auto">
        <nav aria-label="Get started" className="rounded-2xl border border-slate-200 bg-white p-4">
          <div className="text-sm font-semibold">Get started</div>
          <ul className="mt-3 space-y-2 text-sm text-slate-700">
            {items.map((i) => (
              <li key={i.href}>
                <Link href={i.href} className="hover:text-slate-950">
                  {i.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      <main className="min-w-0">{children}</main>
    </div>
  );
}


