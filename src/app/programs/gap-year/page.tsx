import type { Metadata } from "next";
import Image from "next/image";
import { VirtualCampusTab } from "@/components/campuses/CampusSections";
import { Button } from "@/components/ui/Button";
import { Photo } from "@/components/ui/Photo";
import { RevealHeading } from "@/components/ui/RevealHeading";
import { routes } from "@/config/routes";
import { ProgramDates, sessions } from "./ProgramDates";
import styles from "./GapYear.module.css";

export const metadata: Metadata = {
  title: "Gap Year Program | OHLA English Schools",
  description: "Study English at OHLA and earn college credits in Florida. Explore Gap Year program dates, costs and university partners.",
};

const benefits = [
  ["Find the perfect program for you", "Study English at OHLA and earn university credits through our partner colleges."],
  ["Experience US culture and university life", "Live in the US, immerse yourself in American culture, and enjoy a vibrant student lifestyle."],
  ["Gain confidence for your future.", "Develop language, academic, and life skills with personalized support before starting university or your career."],
];

const colleges = [
  { name: "Miami Dade College (MDC)", image: "partner-mdc", text: 'Ranked 5th among the best public regional colleges and 16th among all colleges in the South, according to the 2026 “Best Colleges” ranking by US News & World Report. It has the largest number of undergraduate students among all colleges and universities in the United States.' },
  { name: "Hillsborough Community College (HCC)", image: "partner-hcc", text: "Over 200 academic programs, including technical diplomas, certificates, and transfer programs to American universities. More than 46,000 students annually, creating a vibrant and diverse university community." },
];

export default function GapYearPage() {
  return <main id="main" className={styles.page}>
    <section className={styles.hero}>
      <picture className={styles.heroPhoto}>
        <source media="(max-width: 760px)" srcSet="/images/gap-year/hero-mobile.webp" />
        <Image src="/images/gap-year/hero.webp" alt="" fill sizes="100vw" loading="eager" fetchPriority="high" />
      </picture>
      <RevealHeading as="h1">Gap Year<br />Program</RevealHeading>
      <Button className={styles.heroConsult} href={routes.contact} variant="outline">Consult now</Button>
    </section>
    <section aria-labelledby="gap-intro">
      <div className={styles.ribbon}>
        <Image src="/images/logo.webp" width={132} height={132} alt="" />
        <RevealHeading as="h2" id="gap-intro">Study english and experience american university life</RevealHeading>
      </div>
      <div className={styles.intro}>
        <div className={styles.portrait}><Photo name="gap-year/intro" sizes="(max-width: 760px) 90vw, 26vw" alt="Students together outdoors" /></div>
        <div>
          <p>The OHLA Gap Year program is a two-stage program that allows students to improve their English while experiencing American university life and earning academic credits along the way.</p>
          <p>Students begin with OHLA’s English as a Second Language (ESL) academic program to develop the language skills, confidence, and study habits needed to succeed in an American classroom.</p>
          <p>This first stage can be taken in English for 20 or 30 weeks at OHLA schools, depending on the student’s initial level and goals. In Stage 2, students move on to a 16-week university semester at one of our partner institutions — Miami Dade College (MDC) or Hillsborough Community College (HCC) — where they can choose from a wide range of academic options and typically complete 12 university credits.</p>
          <p>It is an ideal “bridge” for students who want to experience American higher education, improve their academic English, and return home (or continue their studies) with real progress and momentum toward earning a degree.</p>
        </div>
      </div>
    </section>
    <section className={styles.highlights} aria-label="The Gap Year experience">
      <div className={styles.gallery}>{[1, 2, 3].map(n => <div key={n}><Photo name={`gap-year/gallery-${n}`} sizes="33vw" /></div>)}</div>
      <ul className={styles.benefits}>{benefits.map(([title, text], i) => <li key={title}>
        <span className={styles.cardNumber} aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
        <h3>{title}</h3><p>{text}</p>
        <picture className={styles.art}>
          {i === 2 && <source media="(max-width: 760px)" srcSet="/images/gap-year/benefit-3-mobile.webp" />}
          <Image src={`/images/gap-year/benefit-${i + 1}.webp`} alt="" fill sizes="(max-width: 760px) 80vw, 27vw" />
        </picture>
      </li>)}</ul>
    </section>
    <ProgramDates />
    <section className={styles.costs} aria-labelledby="gap-cost">
      <RevealHeading as="h2" id="gap-cost">Total program cost</RevealHeading>
      <p>English as a Second Language + university semester</p>
      <div className={styles.costBanner}>
        <table className={styles.prices}>
          <caption className="sr-only">Total cost by Gap Year session</caption>
          <thead><tr><th scope="col">Session</th><th scope="col">Integrated Study Program</th><th scope="col">Cost</th></tr></thead>
          <tbody>{sessions.map(({weeks}, i) => <tr key={i}>
            <th scope="row"><span>{i + 1}</span></th>
            <td><strong>{weeks} weeks</strong> of English as a Second Language (ESL) + 16 weeks of college</td>
            <td><strong>{weeks === 30 ? "$18,500" : "$15,500"}</strong><small>Fees included</small></td>
          </tr>)}</tbody>
        </table>
      </div>
    </section>
    <section className={styles.partners} aria-labelledby="gap-partners">
      <RevealHeading as="h2" id="gap-partners">Learn more about our university partners.</RevealHeading>
      {colleges.map(college => <article key={college.name}>
        <div className={styles.campusPhoto}><Photo name={`gap-year/${college.image}`} sizes="(max-width: 760px) 85vw, 21vw" /></div>
        <h3>{college.name}</h3><p>{college.text}</p>
        <Button href={routes.contact}>Learn more<span className="sr-only"> about {college.name}</span></Button>
      </article>)}
    </section>
    <section className={styles.contact} aria-labelledby="gap-contact">
      <div><RevealHeading as="h2" id="gap-contact">Ready to start?<br />Contact us.</RevealHeading>
        <Button href={routes.contact} variant="light">Consult now</Button></div>
    </section>
    <VirtualCampusTab />
  </main>;
}
