import { SectionLanding } from "@/components/section-landing";

export default async function DesignSystemPage({
  searchParams,
}: {
  searchParams: Promise<{ view?: string }>;
}) {
  const { view } = await searchParams;
  const selectedView = view === "list" ? "list" : "grid";

  return (
    <SectionLanding
      title="Design system"
      description="Everyday Design System connects our brand to product execution and enables teams to build great experiences."
      baseHref="/design-system"
      view={selectedView}
      links={[
        { title: "Tokens", href: "/design-system/tokens", description: "Design decisions as reusable variables." },
        { title: "Components", href: "/design-system/components", description: "Reusable UI building blocks." },
        { title: "Patterns", href: "/design-system/patterns", description: "Reusable solutions to common user problems." },
        { title: "Processes", href: "/design-system/processes", description: "How we contribute, review, and ship." },
      ]}
    />
  );
}


