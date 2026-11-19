import type { Metadata } from "next";
import { VirtualCampusTab } from "@/components/campuses/CampusSections";
import { Button } from "@/components/ui/Button";
import { Photo } from "@/components/ui/Photo";
import { routes } from "@/config/routes";
import { closures, dayInfo, months, year } from "@/data/calendar2027";
import styles from "./Calendar.module.css";

export const metadata: Metadata = {
  title: "Academic Calendar 2027 | OHLA English Schools",
  description: "Plan your 2027 English studies at OHLA with session start dates, other start dates, holidays and school breaks.",
};

const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function Month({ index }: { index: number }) {
  const month = months[index];
  const firstWeekday = new Date(Date.UTC(year, index, 1)).getUTCDay();
  const days = new Date(Date.UTC(year, index + 1, 0)).getUTCDate();
  const weekCount = Math.ceil((firstWeekday + days) / 7);

  return <table className={styles.month}>
    <caption>{month}</caption>
    <thead><tr>{weekdays.map(name =>
      <th key={name} scope="col" abbr={name}><span aria-hidden="true">{name[0]}</span><span className="sr-only">{name}</span></th>
    )}</tr></thead>
    <tbody>{Array.from({ length: weekCount }, (_, week) =>
      <tr key={week}>{weekdays.map((weekday, column) => {
        const day = week * 7 + column - firstWeekday + 1;
        if (day < 1 || day > days) return <td key={weekday} />;
        const key = [index + 1, day].map(number => String(number).padStart(2, "0")).join("-");
        const event = dayInfo(key);
        return <td key={weekday}>
          <time dateTime={`${year}-${key}`} data-kind={event?.kind} title={event?.label}>
            {day}{event && <span className="sr-only">, {event.label}</span>}
          </time>
        </td>;
      })}</tr>
    )}</tbody>
  </table>;
}

export default function CalendarPage() {
  return <main id="main" className={styles.page}>
    <section className={styles.hero} aria-labelledby="calendar-title">
      <Photo name="calendar/hero" priority />
      <div className={styles.heroCopy}>
        <h1 id="calendar-title">Academic<br />Calendar 2027</h1>
        <p>Plan your English journey with OHLA: see when sessions start, other start dates and the days we have no class.</p>
      </div>
    </section>
    <section className={styles.sheet} aria-label="2027 dates and school closures">
      <ul className={styles.events} aria-label="Important dates">{closures.map(event =>
        <li key={event.start}><strong>{event.label}</strong> – {event.description}</li>
      )}</ul>
      <div className={styles.months}>{months.map((month, index) =>
        <div className={styles.card} key={month}><Month index={index} /></div>
      )}</div>
      <ul className={styles.legend} aria-label="Calendar legend">
        <li data-kind="session">Session Start Dates</li>
        <li data-kind="other">Other Start Dates</li>
        <li data-kind="closed">Holidays / No Class</li>
      </ul>
    </section>
    <section className={styles.contact} aria-labelledby="calendar-contact">
      <div><h2 id="calendar-contact">Ready to start your experience with OHLA?</h2>
        <p>Talk to our team and find out which program best matches your goals.</p></div>
      <Button href={routes.contact}>Talk to a consultant</Button>
    </section>
    <VirtualCampusTab />
  </main>;
}
