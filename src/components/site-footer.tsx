import Link from "next/link";
import { TOP_NAV } from "@/components/site-nav";

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-3">
        <div>
          <div className="text-sm font-semibold">Everyday</div>
          <div className="mt-2 text-sm text-slate-600">Design.System.Everyday.</div>
        </div>

        <nav aria-label="Site nav" className="text-sm">
          <div className="font-semibold">Site</div>
          <ul className="mt-3 space-y-2 text-slate-700">
            {TOP_NAV.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-slate-950">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="More links" className="text-sm">
          <div className="font-semibold">More</div>
          <ul className="mt-3 space-y-2 text-slate-700">
            <li>
              <a href="#" className="hover:text-slate-950">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-slate-950">
                Press
              </a>
            </li>
            <li>
              <Link href="/privacy-policy" className="hover:text-slate-950">
                Privacy policy
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="border-t border-slate-200">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-6 text-xs text-slate-600">
          <span>© {new Date().getFullYear()} Everyday. All rights reserved.</span>
          <span>Everyday Design System</span>
        </div>
      </div>
    </footer>
  );
}


