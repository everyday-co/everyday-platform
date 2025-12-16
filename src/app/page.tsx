import Link from "next/link";

export default function HomePage() {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-10">
        <h1 className="text-4xl font-semibold tracking-tight">Everyday Design System</h1>
        <p className="mt-3 max-w-2xl text-slate-700">
          A public playbook for building consistent Everyday experiences. This is a structure-first
          scaffold mirroring the eBay Playbook’s layout patterns.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/get-started"
            className="rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white"
          >
            Get started
          </Link>
          <Link
            href="/foundations"
            className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium"
          >
            Foundations
          </Link>
          <Link
            href="/design-system"
            className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium"
          >
            Design system
          </Link>
        </div>
      </div>
    </div>
  );
}


