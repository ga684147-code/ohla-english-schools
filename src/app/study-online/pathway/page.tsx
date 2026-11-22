import type { Metadata } from "next";
import { FeatureCards, OnlineHero, OnlinePage, ProgramIcon, type Feature } from "@/components/online-programs/OnlineSections";
import { RevealHeading } from "@/components/ui/RevealHeading";
import { routes } from "@/config/routes";
import s from "@/components/online-programs/Online.module.css";

export const metadata: Metadata = {
  title: "University Pathway Online | OHLA English Schools",
  description: "Study English online with OHLA teachers and explore the 18 levels, entry dates and university entrance requirements.",
};
const features: Feature[] = [
  ["pathway-levels","18 online levels"], ["pathway-days","4 days a week"],
  ["pathway-weeks","4 weeks per level"], ["pathway-weekday","Monday to Thursday"], ["pathway-hours","12 hours a week"],
];
const levels = [
  ["1–2","Basic 1","A1"], ["3–4","Basic 2","A2"], ["5–6","Intermediate 1","B1"],
  ["7–8","Intermediate 2","B2"], ["9–10","Intermediate Plus","B2+"], ["11–12","Advanced 1","B2+ / C1"],
  ["13–15","Advanced 2","C1+"], ["16–18","Elite","C2"],
];
const dates = [
  ["2026-01","May 25, 2026","June 18, 2026"], ["2026-02","June 22, 2026","July 16, 2026"],
  ["2026-03","July 20, 2026","August 13, 2026"], ["2026-04","August 17, 2026","September 10, 2026"],
  ["2026-05","September 14, 2026","October 8, 2026"], ["2026-06","October 12, 2026","November 5, 2026"],
  ["2026-07","November 9, 2026","December 3, 2026"],
];
const qualifications = [
  "Qualified students can request a Conditional Acceptance Letter from one of OHLA’s partner universities.",
  "Students who intend to enroll in an undergraduate program and complete OHLA Level 15 online can enroll in a bachelor’s degree without needing TOEFL and/or IELTS.",
  "Graduate students who complete OHLA Level 18 online can enroll in their master’s degree without needing TOEFL and/or IELTS.",
];
export default function OnlinePathway() {
  return <OnlinePage promo="Contact us for promotional prices.">
    <OnlineHero program="pathway" title={<>University<br />Pathway Online</>} action="Apply now" href={routes.contact + "#contact-form"}>
      <p className={s.pathLead}>Study English online and prepare for an American university</p>
      <p className={s.pathSub}>Live classes with OHLA teachers</p>
    </OnlineHero>
    <section className={s.pathIntro} aria-label="University Pathway Online program">
      <p>The OHLA Online English Program prioritizes our students’ goal of achieving full fluency. The six main areas addressed in English language learning are: grammar, vocabulary, listening comprehension, oral expression, reading, and writing.</p>
      <FeatureCards items={features} label="Study schedule and levels" />
    </section>
    <section className={s.levels} aria-labelledby="path-levels">
      <RevealHeading as="h2" id="path-levels">Levels</RevealHeading>
      <div className={s.tableScroll} role="region" aria-label="Online levels and university entrance levels" tabIndex={0}>
        <table><caption className="sr-only">Online levels, OHLA levels and CEFR equivalents</caption>
          <thead>
            <tr><td colSpan={7}></td><th colSpan={2}>University entrance levels <ProgramIcon name="pathway-cap" /></th></tr>
            <tr><th scope="row">Online</th>{levels.map(([range]) => <th key={range} scope="col"><span>{range}</span></th>)}</tr>
          </thead>
          <tbody><tr><th scope="row">OHLA</th>{levels.map(([range,name]) => <td key={range}>{name}</td>)}</tr>
            <tr><th scope="row">CEFR</th>{levels.map(([range,,cefr]) => <td key={range}>{cefr}</td>)}</tr>
            <tr><th scope="row">Program tracks</th><td colSpan={8}><div className={s.tracks}><span>General English</span><span>Pre Academic</span><span>Academic English</span></div></td></tr>
          </tbody>
        </table>
      </div>
    </section>
    <section className={s.entries} aria-labelledby="entry-dates">
      <RevealHeading as="h2" id="entry-dates">Entry dates</RevealHeading>
      <p>We accept students on the first day of each session.</p>
      <div className={s.entryGrid}>
        <table className={s.dates} tabIndex={0}><caption className="sr-only">2026 session dates</caption>
          <thead><tr>{["Session","Start","End"].map(t=><th scope="col" key={t}>{t}</th>)}</tr></thead>
          <tbody>{dates.map(([id,start,end])=><tr key={id}><th scope="row">{id}</th><td>{start}</td><td>{end}</td></tr>)}</tbody>
        </table>
        <div className={s.qualifications}><ul>{qualifications.map(text=><li key={text}>{text}</li>)}</ul>
          <p>Note that OHLA Virtual Campus provides instruction through the Open Hearts Learning Abroad program. Courses offered by OHLA Virtual Campus are not accredited by CEA.</p>
        </div>
      </div>
    </section>
  </OnlinePage>;
}
