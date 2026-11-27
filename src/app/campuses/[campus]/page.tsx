import { RevealHeading } from "@/components/ui/RevealHeading";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogCTA } from "@/components/blog/BlogCTA";
import { CampusCards, CampusHero, VirtualCampusTab } from "@/components/campuses/CampusSections";
import { CampusVideo } from "@/components/campuses/CampusVideo";
import { Photo } from "@/components/ui/Photo";
import { campuses } from "@/data/campuses";
import styles from "@/components/campuses/Campuses.module.css";

type PageProps = { params: Promise<{ campus: string }> };

export function generateStaticParams() {
  return campuses.map(({ href }) => ({ campus: href.split("/").pop()! }));
}

async function getCampus({ params }: PageProps) {
  const { campus: slug } = await params;
  return campuses.find(({ href }) => href === `/campuses/${slug}`) ?? notFound();
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const campus = await getCampus(props);
  return { title: `${campus.name} Campus | OHLA English Schools`, description: campus.introduction };
}

export default async function CampusPage(props: PageProps) {
  const campus = await getCampus(props);
  return <main id="main" className={styles.page}>
    <CampusHero campus={campus} />
    <section className={styles.detail} aria-labelledby="about-campus">
      <div className={styles.gallery}>
        <CampusVideo name={campus.name} videoId={campus.videoId} poster={campus.poster} />
        <div className={styles.cityPhoto}><Photo name={`campuses/${campus.image}`} alt={campus.photoAlt} sizes="(max-width: 740px) 92vw, 34vw" /></div>
      </div>
      <div className={styles.about}>
        <RevealHeading as="h2" id="about-campus">{campus.name}</RevealHeading>
        <address>{campus.address}</address>
        <p>{campus.introduction}</p>
        {campus.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
        <h3>{campus.name} Campus offers</h3>
        <ul>{campus.facilities.map(([label, Icon]) => <li key={label}><Icon aria-hidden="true" />{label}</li>)}</ul>
      </div>
    </section>
    <BlogCTA />
    <CampusCards related items={campuses.filter(other => other !== campus)} buttonLabel={campus.more} />
    <VirtualCampusTab />
  </main>;
}
