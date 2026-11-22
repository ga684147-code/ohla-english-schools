"use client";

import { useState } from "react";
import { Photo } from "@/components/ui/Photo";
import s from "@/components/online-programs/Online.module.css";

const campuses = [
  { name: "Miami Brickell", image: "campus-miami", rates: [290, 580] },
  { name: "Celebration, Boca Raton, Orlando", image: "campus-orlando", rates: [280, 560] },
  { name: "Tampa", image: "campus-tampa", rates: [290, 560] },
];
export function CampusFees() {
  const [index, select] = useState(0);
  const campus = campuses[index];
  return <div className={s.campusBox}>
    <div className={s.campusPhoto}><Photo name={`online-programs/${campus.image}`} alt={campus.name} sizes="(max-width: 760px) 90vw, 29vw" /></div>
    <div className={s.campusDetails}>
      <fieldset className={s.campusPicker}><legend className="sr-only">Choose your campus for fees</legend>
        {campuses.map((item,i) => <label key={item.image}>
          <input className="sr-only" type="radio" name="exam-campus" checked={index === i} onChange={() => select(i)} />
          <span>{item.name}</span>
        </label>)}
      </fieldset>
      <h3>{campus.name}</h3>
      <div className={s.tableScroll} role="region" aria-label="Campus fees" tabIndex={0}>
        <table><caption className="sr-only">Exam preparation fees for {campus.name}</caption>
          <thead><tr>{["Program","Classes per week","Weekly tuition","Technology fee","Visa type"].map(h => <th key={h} scope="col">{h}</th>)}</tr></thead>
          <tbody>{campus.rates.map((rate,i) => <tr key={i}><td>TOEFL/IELTS</td><td>{i ? 10 : 5}</td><td>R${rate}</td><td>$10 per week</td><td>ESTA or B1-B2</td></tr>)}</tbody>
        </table>
      </div>
    </div>
  </div>;
}
