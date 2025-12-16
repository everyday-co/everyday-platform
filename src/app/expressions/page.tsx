import { SectionLanding } from "@/components/section-landing";

export default async function ExpressionsPage({
  searchParams,
}: {
  searchParams: Promise<{ view?: string }>;
}) {
  const { view } = await searchParams;
  const selectedView = view === "list" ? "list" : "grid";

  return (
    <SectionLanding
      title="Expressions"
      description="Expressions are applications of the system to a particular subject or area."
      baseHref="/expressions"
      view={selectedView}
      links={[
        {
          title: "Marketing UI graphics",
          href: "/expressions/marketing-ui-graphics",
          description: "Applying the system to marketing UI surfaces.",
        },
        {
          title: "Email design system",
          href: "/expressions/email-design-system",
          description: "Email components and guidance for campaigns and lifecycle messaging.",
        },
      ]}
    />
  );
}


