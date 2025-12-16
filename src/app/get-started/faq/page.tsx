export default function FaqPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-4xl font-semibold tracking-tight">FAQs</h1>
      <p className="max-w-2xl text-slate-700">
        You’ve got questions, we’ve got answers. (Placeholder content to start.)
      </p>

      <div className="space-y-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <div className="text-sm font-semibold">What is the Everyday Design System?</div>
          <p className="mt-2 text-sm text-slate-700">
            A shared language, components, and guidance for building consistent Everyday experiences.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <div className="text-sm font-semibold">How should teams use this playbook?</div>
          <p className="mt-2 text-sm text-slate-700">
            Start with Foundations, then use Design system tokens/components, and reference Patterns for common flows.
          </p>
        </div>
      </div>
    </div>
  );
}


