import Image from "next/image";
import { RevealHeading } from "@/components/ui/RevealHeading";
import styles from "./GapYear.module.css";

export const sessions = [
  { weeks: 30, start: "January 5, 2026", end: "July 31, 2026", collegeStart: "August 17, 2026", collegeEnd: "December 4, 2026" },
  { weeks: 20, start: "March 16, 2026", end: "July 31, 2026", collegeStart: "August 17, 2026", collegeEnd: "December 4, 2026" },
  { weeks: 30, start: "May 25, 2026", end: "December 18, 2026", collegeStart: "January 11, 2027", collegeEnd: "May 7, 2027" },
  { weeks: 20, start: "August 3, 2026", end: "December 18, 2026", collegeStart: "January 11, 2026", collegeEnd: "May 7, 2027" },
];

function DatesTable({ college }: { college: boolean }) {
  return <div className={college ? styles.collegeDates : styles.englishDates}>
    <table>
      <caption className="sr-only">{college ? "University semester" : "English at OHLA"} dates by session</caption>
      <thead><tr>
        <th scope="col">Session</th><th scope="col">ESL</th>
        <th scope="col"><Image src="/images/gap-year/calendar-check.svg" width={29} height={29} alt="" />Start date</th>
        <th scope="col"><Image src="/images/gap-year/calendar-x.svg" width={29} height={29} alt="" />End date</th>
      </tr></thead>
      <tbody>{sessions.map((item, index) => <tr key={item.start}>
        <th scope="row">{index + 1}</th>
        <td>{college ? 16 : item.weeks} weeks</td>
        <td>{college ? item.collegeStart : item.start}</td>
        <td>{college ? item.collegeEnd : item.end}</td>
      </tr>)}</tbody>
    </table>
  </div>;
}

export function ProgramDates() {
  return <section className={styles.dates} aria-labelledby="program-dates">
    <RevealHeading as="h2" id="program-dates">Program dates</RevealHeading>
    <fieldset className={styles.picker}>
      <legend className="sr-only">Choose program stage</legend>
      <input className={`sr-only ${styles.firstStage}`} type="radio" name="gap-stage" id="gap-esl" defaultChecked />
      <label htmlFor="gap-esl">Stage 1: English as a Second Language (ESL) at OHLA</label>
      <input className={`sr-only ${styles.secondStage}`} type="radio" name="gap-stage" id="gap-university" />
      <label htmlFor="gap-university">Stage 2: University semester</label>
      <DatesTable college={false} /><DatesTable college />
    </fieldset>
  </section>;
}
