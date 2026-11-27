"use client";

import { useState } from "react";
import { Photo } from "@/components/ui/Photo";
import { Button } from "@/components/ui/Button";
import { routes } from "@/config/routes";
import s from "./Westcliff.module.css";

const programs = [
  ["MBA", "Master in Business Administration"],
  ["MATESOL", "Master in TESOL"],
  ["MSIT", "Master of Science in Information Technology"],
  ["MSCS", "Master of Science in Computer Science"],
];
const descriptions = [
  "",
  "The Master of Arts in Teaching English to Speakers of Other Languages (MATESOL) produces graduates with the skills to train teaching faculty who excel in their roles as educators, creative scholars and researchers. This program will prepare teachers for a wide variety of positions both in the US and abroad. Our students will be equipped with the specialized knowledge and field skills for teaching English to speakers of other languages. Upon graduation, they will be competent professional educators with demonstrable leadership skills.",
  "The Master of Science in Information Technology (MSIT) at Westcliff University provides a blend of technical and management skills in areas like IT security and data analytics, with specializations including Cybersecurity and Cloud Computing. This 36-credit-hour program prepares graduates to strategically manage technology solutions and analyze business intelligence.",
  "The Master of Science in Computer Science (MSCS) program at Westcliff University focuses on advanced skills in computer systems and software development, emphasizing design principles and problem-solving. This 36-credit-hour program offers concentrations like Software Development and Data Analytics, aiming to equip students for advanced roles in the computing field.",
];
const photos = ["program", "matesol", "msit", "mscs"];
export function Programs() {
  const [selected, select] = useState(0);
  return <section className={s.content} aria-labelledby="programs-title">
    <h2 id="programs-title" className={s.programHeading}>Programs offered</h2>
    <div className={s.tabs} role="tablist" aria-label="Westcliff graduate programs">
      {programs.map(([code, name], i) => <button key={code} type="button" role="tab" id={`tab-${code}`}
        aria-controls="program-panel" aria-selected={selected === i}
        tabIndex={selected === i ? 0 : -1}
        onClick={() => select(i)}
        onKeyDown={event => {
          const direction = event.key === "ArrowRight" ? 1 : event.key === "ArrowLeft" ? -1 : 0;
          if (direction) {
            event.preventDefault();
            const next = (selected + direction + programs.length) % programs.length;
            select(next);
            document.getElementById(`tab-${programs[next][0]}`)?.focus();
          }
        }}>{name} ({code})</button>)}
    </div>
    <div id="program-panel" role="tabpanel" aria-labelledby={`tab-${programs[selected][0]}`} className={s.programPanel}>
      <div className={s.photo}><Photo name={`westcliff/${photos[selected]}`} alt="Graduate student discussing a program with an advisor" /></div>
      <div><h3>{programs[selected][1]} ({programs[selected][0]})</h3>
        {selected === 0 && <p>The Master of Business Administration (MBA) degree program prepares individuals for careers in management. More specifically, its aim is to provide an opportunity for students to develop knowledge, abilities, attitudes and understanding that will constitute a foundation for growth into competent business management professionals. Graduates seek employment in major industries including computer-related services, investment banking, securities and consulting in the areas of management, marketing, research, analysis and finance.</p>}
        {selected !== 0 && <p>{descriptions[selected]}</p>}
        <ul className={s.programCards}>{programs.map(([code,name]) => <li key={code}>{name} ({code})</li>)}</ul>
        <Button href={routes.apply}>{programs[selected][0]} program overview</Button>
      </div>
    </div>
  </section>;
}
