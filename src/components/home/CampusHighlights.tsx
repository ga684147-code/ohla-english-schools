import { RevealHeading } from "@/components/ui/RevealHeading";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import styles from "./LevelCard.module.css";
import { Button } from "@/components/ui/Button";
import { Photo } from "@/components/ui/Photo";
import { englishTestUrl, routes } from "@/config/routes";
export function CampusHighlights() {
  return (
    <section
      className="campus-highlights wide-container"
      aria-label="Explore OHLA"
    >
      <article className="campus-banner">
        <div className={styles.map}>
          <Photo name="campuses" alt="Map of OHLA campuses in Florida" sizes="(max-width:767px) 100vw,50vw" />
          <nav className={styles.mapLinks} aria-label="Campuses on the Florida map">
            <Link className={styles.miami} href={routes.miamiCampus} aria-label="Miami Brickell campus" />
            <Link className={styles.orlando} href={routes.orlandoCampus} aria-label="Orlando Celebration campus" />
            <Link className={styles.tampa} href={routes.tampaCampus} aria-label="Tampa campus" />
          </nav>
        </div>
        <div className="campus-copy">
          <RevealHeading as="h2">
            Live your
            <br /> experience
            <br /> in Florida
          </RevealHeading>
          <Button href={routes.campuses} variant="blue">
            Discover our campuses
          </Button>
        </div>
      </article>
      <article className={`level-banner ${styles.card}`}>
        <picture className="level-photo">
          <source media="(max-width: 767px)" srcSet="/images/level-student-mobile.webp" />
          <Photo
            name="level-student"
            alt="Smiling student carrying books and a phone"
            sizes="(max-width:767px) 50vw,25vw"
          />
        </picture>
        <div className="level-copy">
          <RevealHeading as="h2">Discover your English level</RevealHeading>
          <p>
            Take OHLA&apos;s free test and get a reference of your current level
            before choosing a program.
          </p>
          <Button href={routes.levelTest} className={styles.desktopTest}>Take the free test</Button>
          <a className={`button button--red ${styles.mobileTest}`}
            href={englishTestUrl}
            target="_blank" rel="noopener noreferrer">
            Take the free test <ChevronRight aria-hidden="true" size={16} strokeWidth={1.5} />
          </a>
        </div>
      </article>
    </section>
  );
}
