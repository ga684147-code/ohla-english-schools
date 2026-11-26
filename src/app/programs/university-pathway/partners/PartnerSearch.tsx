"use client";
import { useState } from "react";
import s from "@/components/pathway/Pathway.module.css";
const schools = [
  { name: "Westcliff University", city: "Irvine, California, USA", text: "Westcliff University’s institutional mission is to educate, inspire, and empower students from around the world to acquire the skills needed to excel personally and professionally through practical, innovative, and high-quality programs offered both online and on campus." },
  { name: "Westcliff University", city: "Arlington, Virginia, USA", text: "Our commitment is to serve you, our students. Together with the staff and faculty, my personal goal is to create a true sense of community that fosters your academic success." },
  { name: "Marymount University", city: "Arlington, Virginia, USA", text: "" },
];
export function PartnerSearch() {
  const [query,setQuery] = useState("");
  const [search,setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [schoolName, setSchoolName] = useState("");
  const results = schools.filter(school => (school.name+" "+school.city).toLowerCase().includes(search.toLowerCase()) && school.city.includes(location) && school.name.includes(schoolName));
  return <section className={s.section}>
    <form className={s.searchForm} onSubmit={event=>{event.preventDefault();setSearch(query)}}>
      <label>Country<select defaultValue="USA"><option>USA</option></select></label>
      <label>Search programs<input value={query} onChange={event=>setQuery(event.target.value)} type="search" /></label>
      <button type="submit">Search programs</button>
    </form>
    <div className={s.results}><aside className={s.filters}><h2>Filters</h2>
      <label>State<select value={location} onChange={event=>setLocation(event.target.value)}><option value="">All states</option><option>California</option><option>Virginia</option></select></label>
      <label>School<select value={schoolName} onChange={event=>setSchoolName(event.target.value)}><option value="">All schools</option><option>Westcliff University</option><option>Marymount University</option></select></label>
    </aside><div><p role="status">{results.length} university listings found</p>
    {results.map((school)=><details className={s.listing} key={school.name+school.city}><summary>{school.name} — {school.city}</summary><p>Private school</p>{school.text && <p>{school.text}</p>}</details>)}
    </div></div>
  </section>;
}
