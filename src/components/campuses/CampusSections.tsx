import { RevealHeading } from "@/components/ui/RevealHeading";
import Link from "next/link";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { routes } from "@/config/routes";
import { Photo } from "@/components/ui/Photo";
import { Button } from "@/components/ui/Button";
import type { Campus } from "@/data/campuses";
import styles from "./Campuses.module.css";

export function CampusHero({ campus }: { campus?: Campus }) {
  const title = campus?.name ?? "Campuses";
  return <section className={styles.hero} aria-labelledby="campus-title">
    <Photo name={campus ? `campuses/${campus.image}-hero` : "campuses/florida"} priority />
    <div className={styles.heroInner}>
      <div className={styles.titleRow}>
        {!campus && <span className={styles.pinCircle}><MapPin aria-hidden="true" /></span>}
        <RevealHeading as="h1" id="campus-title">{campus ? title.split(" ").map(word => <span key={word}>{word}</span>) : title}</RevealHeading>
      </div>
      {campus ? <p className={styles.badge}><MapPin size={20} aria-hidden="true" />{campus.region}</p> : <>
        <p className={styles.lead}>Our campuses are located in metropolitan areas throughout Florida.</p>
        <p className={styles.intro}>Our modern facilities offer a student-centered environment and innovative technology so students can explore their linguistic creativity.</p>
      </>}
    </div>
  </section>;
}

export function CampusCards({ items, related, buttonLabel = "Learn more" }: {
  items: Campus[];
  related?: boolean;
  buttonLabel?: string;
}) {
  return <section className={related ? styles.related : styles.directory} aria-label={related ? "See also" : "Explore our Florida campuses"}>
    {related && <RevealHeading as="h2" className={styles.seeAlso}>See also</RevealHeading>}
    <div className={styles.cards}>{items.map(campus => <article className={styles.card} key={campus.href}>
      <div className={styles.cardPhoto}>
        <Photo name={`contact-${campus.image}`} alt={`Inside the OHLA ${campus.name} campus`} sizes="(max-width: 740px) 90vw, 25vw" />
        {!related && <span className={styles.cardTag}>{campus.region}</span>}
      </div>
      <div className={styles.cardBody}>
        <h3>{related ? campus.name : campus.cardTitle}</h3>
        <address>{campus.address}</address>
        <p>{campus.introduction}</p>
        <Button href={campus.href}>{buttonLabel}<span className="sr-only"> about {campus.name}</span></Button>
      </div>
    </article>)}</div>
  </section>;
}

export function VirtualCampusTab() {
  return <Link className={`virtual-tab ${styles.tab}`} href={routes.studyOnline}>
    <Image src="/images/logo.webp" alt="" width={30} height={30} />Virtual Campus
  </Link>;
}
