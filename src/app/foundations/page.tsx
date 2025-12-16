import { SectionLanding } from "@/components/section-landing";

export default async function FoundationsPage({
  searchParams,
}: {
  searchParams: Promise<{ view?: string }>;
}) {
  const { view } = await searchParams;
  const selectedView = view === "list" ? "list" : "grid";

  return (
    <SectionLanding
      title="Foundations"
      description="Foundations are fundamental elements that provide the building blocks for creating consistent and cohesive user experiences."
      baseHref="/foundations"
      view={selectedView}
      links={[
        { title: "Logo", href: "/foundations/logo", description: "How to use Everyday logo assets and lockups." },
        { title: "Color", href: "/foundations/color", description: "Everyday color palette and usage guidance." },
        { title: "Typography", href: "/foundations/typography", description: "Type scale, styles, and accessibility." },
        { title: "Photography", href: "/foundations/photography", description: "Image style and composition guidance." },
        { title: "Iconography", href: "/foundations/iconography", description: "Icon style, sizing, and usage." },
        { title: "Illustration", href: "/foundations/illustration", description: "Illustration principles and usage." },
        { title: "Motion", href: "/foundations/motion", description: "Motion guidelines and micro-interactions." },
        { title: "Accessibility", href: "/foundations/accessibility", description: "Accessibility standards and best practices." },
        { title: "Composition", href: "/foundations/composition", description: "Layout and composition principles." },
        { title: "Interaction", href: "/foundations/interaction", description: "Interaction levels and states." },
        { title: "Object styles", href: "/foundations/object-styles", description: "Object styling in product surfaces." },
      ]}
    />
  );
}


