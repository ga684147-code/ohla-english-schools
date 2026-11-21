import type { Metadata } from "next";
import { SectionHeading, StudentHero, StudentPage, advisorForm } from "@/components/student-info/StudentSections";
import s from "@/components/student-info/StudentInfo.module.css";

export const metadata: Metadata = {
  title: "International Students | OHLA English Schools",
  description: "Plan your studies at OHLA, from choosing an English program to preparing your documents and arriving in the United States.",
};

const journey = [
  ["Choose your program", "Define the program, location, start date, and study period that best fit your goals."],
  ["Prepare your documents", "Valid passport, proof of funds, and F-1 documents when applicable to your visa type and program."],
  ["Receive your documents", "After application and acceptance, eligible students receive the documentation, including the I-20 when applicable."],
  ["Prepare your arrival", "Organize your trip, accommodation, and transportation. Bring your passport, visa, I-20, contacts, and school address."],
];

export default function InternationalStudents() {
  return <StudentPage>
    <StudentHero variant="overview" label="International Students"
      title={<>Everything you need<br />to start your journey<br />in the United States</>}
      text="Studying abroad involves much more than choosing a course. OHLA supports international students from enrollment to arrival and adaptation in the United States, with guidance on F-1 visas, documentation, accommodation, and student support services. OHLA welcomes international students to its English programs and is SEVIS-certified to enroll non-immigrant students."
      action="Start your application" href={advisorForm} secondary />
    <section className={s.overview}>
      <SectionHeading label="Your journey with OHLA" text="From preparing documents to arriving in the United States, each step requires attention. That’s why we’ve gathered the main information here for international students who want to study on-site at OHLA.">Easier when you know<br />what comes next</SectionHeading>
      <ol className={s.journey}>{journey.map(([title, text], i) => <li key={title}>
        <span aria-hidden="true">0{i + 1}</span><h3>{title}</h3><p>{text}</p>
      </li>)}</ol>
    </section>
  </StudentPage>;
}
