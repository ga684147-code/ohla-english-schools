import { RevealHeading } from "@/components/ui/RevealHeading";
import type { Metadata } from "next";
import { VirtualCampusTab } from "@/components/campuses/CampusSections";
import { Button } from "@/components/ui/Button";
import { Photo } from "@/components/ui/Photo";
import { routes } from "@/config/routes";
import { MonthPicker } from "./MonthPicker";
import styles from "./Calendar.module.css";

export const metadata: Metadata = {
  title: "Academic Calendar 2027 | OHLA English Schools",
  description: "Plan your 2027 English studies at OHLA with session start dates, other start dates, holidays and school breaks.",
};

export default function CalendarPage() {
  return <main id="main" className={styles.page}>
    <section className={styles.hero} aria-labelledby="calendar-title">
      <Photo name="calendar/hero" priority />
      <div className={styles.heroCopy}>
        <RevealHeading as="h1" id="calendar-title">Academic<br />Calendar 2027</RevealHeading>
        <p>Plan your English journey with OHLA: see when sessions start, other start dates and the days we have no class.</p>
      </div>
    </section>
    <section className={styles.sheet} aria-label="2027 dates and school closures">
      <MonthPicker />
      <ul className={styles.legend} aria-label="Calendar legend">
        <li data-kind="session">Session Start Dates</li>
        <li data-kind="other">Other Start Dates</li>
        <li data-kind="closed">Holidays / No Class</li>
      </ul>
    </section>
    <section className={styles.contact} aria-labelledby="calendar-contact">
      <div><RevealHeading as="h2" id="calendar-contact">Ready to start your experience with OHLA?</RevealHeading>
        <p>Talk to our team and find out which program best matches your goals.</p></div>
      <Button href={routes.contact}>Talk to an advisor</Button>
    </section>
    <VirtualCampusTab />
  </main>;
}
