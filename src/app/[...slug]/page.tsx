import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { futurePages, routes } from "@/config/routes";
import { articles } from "@/data/home";
import { Button } from "@/components/ui/Button";
export const metadata: Metadata = {
  title: "Coming soon | OHLA English Schools",
  robots: { index: false, follow: false },
};
export default async function FuturePage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const path = "/" + slug.join("/");
  const article = articles.find((a) => path === `/blog/${a.slug}`);
  const title = article?.title ?? futurePages[path];
  if (!title) notFound();
  return (
    <main id="main" className="future-page">
      <p className="eyebrow">OHLA English Schools</p>
      <h1>{title}</h1>
      <p>This page is planned for a future phase of the website.</p>
      <p>
        For assistance, call <a href="tel:+13053794027">+1-305-379-4027</a>.
      </p>
      <Button href={routes.home}>Return to home</Button>
    </main>
  );
}

export function generateStaticParams(){return [...Object.keys(futurePages),...articles.map(a=>`/blog/${a.slug}`)].map(path=>({slug:path.slice(1).split("/")}));}
