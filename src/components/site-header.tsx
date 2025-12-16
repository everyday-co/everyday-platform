import Link from "next/link";
import Image from "next/image";
import { TOP_NAV } from "@/components/site-nav";

function BrandLockup() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <Image
        src="/brand/home_main.svg"
        alt="Everyday Homebuyers"
        width={180}
        height={48}
        priority
      />
    </Link>
  );
}

export function SiteHeader() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-4">
        <BrandLockup />

        <nav className="hidden items-center gap-4 md:flex" aria-label="Site navigation">
          {TOP_NAV.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-slate-700 hover:text-slate-950">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            className="rounded-full border border-slate-300 bg-white px-3 py-1.5 text-xs font-medium"
            aria-label="Toggle theme (stub)"
          >
            Theme
          </button>
          <button
            type="button"
            className="rounded-full border border-slate-300 bg-white px-3 py-1.5 text-xs font-medium"
            aria-label="Search (stub)"
          >
            Search
          </button>
        </div>
      </div>
    </header>
  );
}


