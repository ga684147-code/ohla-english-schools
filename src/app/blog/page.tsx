import type { Metadata } from "next";
import { BlogHero } from "@/components/blog/BlogHero";
import { BlogListing } from "@/components/blog/BlogListing";
import { BlogCTA } from "@/components/blog/BlogCTA";
import { routes } from "@/config/routes";
export const metadata: Metadata = {
  title: "Ohla Blog | English, Study & Life in the United States",
  description:
    "Explore OHLA articles about learning English, studying in the United States, university pathways, and student life.",
};
export default function BlogPage() {
  return (
    <main id="main">
      <BlogHero />
      <BlogListing />
      <BlogCTA />
      <a className="virtual-tab" href={`${routes.home}#virtual-campus`}>
        Virtual Campus
      </a>
    </main>
  );
}
