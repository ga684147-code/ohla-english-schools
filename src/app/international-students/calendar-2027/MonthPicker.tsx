"use client";

import { useState } from "react";
import { closures, dayInfo, months, year } from "@/data/calendar2027";
import styles from "./Calendar.module.css";

const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function Month({ index }: { index: number }) {
  const month = months[index];
  const firstWeekday = new Date(Date.UTC(year, index, 1)).getUTCDay();
  const days = new Date(Date.UTC(year, index + 1, 0)).getUTCDate();
  const weekCount = Math.ceil((firstWeekday + days) / 7);

  return <table className={styles.month}>
    <caption>{month} {year}</caption>
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

export function MonthPicker() {
  const [monthIndex, setMonthIndex] = useState(0);
  const selectedMonth = String(monthIndex + 1).padStart(2, "0");
  const events = closures.filter(event => event.start.startsWith(selectedMonth + "-"));

  return <>
    <div className={styles.filter}>
      <label htmlFor="calendar-month">Select a month</label>
      <select id="calendar-month" value={monthIndex} aria-controls="selected-month"
        onChange={event => setMonthIndex(Number(event.target.value))}>
        {months.map((name, index) => <option value={index} key={name}>{name}</option>)}
      </select>
    </div>
    <div id="selected-month">
      {events.length > 0 && <ul className={styles.events} aria-label={`Important dates in ${months[monthIndex]}`}>
        {events.map(event => <li key={event.start}><strong>{event.label}</strong> – {event.description}</li>)}
      </ul>}
      <div className={styles.card}><Month index={monthIndex} /></div>
    </div>
  </>;
}
