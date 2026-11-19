import type { Metadata } from "next";
import { BlogCTA } from "@/components/blog/BlogCTA";
import { CampusCards, CampusHero, VirtualCampusTab } from "@/components/campuses/CampusSections";
import { campuses } from "@/data/campuses";
import styles from "@/components/campuses/Campuses.module.css";

export const metadata: Metadata = {
  title: "Our Florida Campuses | OHLA English Schools",
  description: "Explore OHLA English Schools in Miami Brickell, Orlando Celebration and Tampa.",
};

export default function CampusesPage() {
  return <main id="main" className={styles.page}>
    <CampusHero />
    <CampusCards items={campuses} />
    <BlogCTA />
    <VirtualCampusTab />
  </main>;
}
