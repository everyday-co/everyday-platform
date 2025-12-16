import Link from "next/link";

type Article = { date: string; title: string; href: string; excerpt?: string; author: string };

const featured: Article[] = [
  { date: "Sep 18, 2025", title: "Everyday Design System launches (placeholder)", href: "/articles/launch", author: "Everyday" },
  { date: "Jul 15, 2025", title: "Animating the playbook (placeholder)", href: "/articles/animating", excerpt: "A technical dive into animation patterns for the playbook UI.", author: "Everyday" },
];

const news: Article[] = [
  ...featured,
  { date: "Jan 16, 2025", title: "Design updates in review (placeholder)", href: "/articles/2024-in-review", excerpt: "A look back at improvements and what’s next.", author: "Everyday" },
];

function ArticleRow({ a }: { a: Article }) {
  return (
    <li className="rounded-2xl border border-slate-200 bg-white p-5">
      <Link href={a.href} className="block">
        <div className="text-xs text-slate-500">{a.date}</div>
        <div className="mt-1 text-base font-semibold">{a.title}</div>
        {a.excerpt ? <div className="mt-2 text-sm text-slate-600">{a.excerpt}</div> : null}
        <div className="mt-3 text-xs text-slate-500">
          <span className="font-semibold text-slate-600">Author:</span> {a.author}
        </div>
      </Link>
    </li>
  );
}

export default function ArticlesPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-semibold tracking-tight">Articles</h1>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Featured</h2>
        <ul className="grid gap-4 md:grid-cols-2">
          {featured.map((a) => (
            <ArticleRow key={a.href} a={a} />
          ))}
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">News</h2>
        <ul className="grid gap-4 md:grid-cols-2">
          {news.map((a) => (
            <ArticleRow key={a.href} a={a} />
          ))}
        </ul>
      </section>
    </div>
  );
}


