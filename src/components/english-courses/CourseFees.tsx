"use client";

import Image from "next/image";
import { useState } from "react";
import { RevealHeading } from "@/components/ui/RevealHeading";
import s from "./Courses.module.css";

const headings = [["program", "Program"], ["classes", "Classes per week"], ["tuition", "Weekly tuition"], ["technology", "Technology fee"], ["visa", "Visa type"]];
const programs = [["Semi-intensive", 20, "B1/B2 Visa or Visa Waiver"], ["Intensive", 25, "F-1 Student Visa"], ["Super-intensive", 30, "F-1 Student Visa"]] as const;
const rates = [[270,315,345], [250,295,325], [270,315,345]];

export function CourseFees({ academic }: { academic: boolean }) {
  const [selected, select] = useState(0);
  const campuses = ["Miami Brickell", academic ? "Boca Raton Orlando Celebration" : "Boca Raton Celebration Orlando", "Tampa"];
  return <section className={s.fees} aria-labelledby="course-fees">
    <RevealHeading as="h2" id="course-fees">{academic ? "Enrollment Fees" : "Tuition Fees"}</RevealHeading>
    <p>Each program has a one-time, non-refundable registration fee of $200.</p>
    <fieldset><legend className="sr-only">Select campus for tuition fees</legend>
      {campuses.map((name, index) => <label key={name}><input className="sr-only" type="radio" name="course-campus" checked={selected === index} onChange={() => select(index)} /><span>{name}</span></label>)}
    </fieldset>
    <div className={s.tableScroll} role="region" aria-label={`Tuition for ${campuses[selected]}`} tabIndex={0}>
      <table><caption className="sr-only">Weekly fees for {campuses[selected]}</caption>
        <thead><tr>{headings.map(([icon, label]) => <th scope="col" key={icon}><div><Image src={`/images/english-courses/fees-${icon}.svg`} alt="" width={40} height={40} />{label}</div></th>)}</tr></thead>
        <tbody>{programs.map(([program, classes, visa], i) => <tr key={program}><th scope="row">{program}</th><td>{classes}</td><td>${rates[selected][i]}</td><td>$10 per week</td><td>{visa}</td></tr>)}</tbody>
      </table>
    </div>
  </section>;
}
