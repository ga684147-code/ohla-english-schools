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
      <div className={s.photo}><Photo name="westcliff/program" alt="Graduate student discussing a program with an advisor" /></div>
      <div><h3>{programs[selected][1]} ({programs[selected][0]})</h3>
        {selected === 0 && <p>The Master of Business Administration (MBA) degree program prepares individuals for careers in management. More specifically, its aim is to provide an opportunity for students to develop knowledge, abilities, attitudes and understanding that will constitute a foundation for growth into competent business management professionals. Graduates seek employment in major industries including computer-related services, investment banking, securities and consulting in the areas of management, marketing, research, analysis and finance.</p>}
        <ul className={s.programCards}>{programs.map(([code,name]) => <li key={code}>{name} ({code})</li>)}</ul>
        <Button href={routes.apply}>{programs[selected][0]} program overview</Button>
      </div>
    </div>
  </section>;
}
