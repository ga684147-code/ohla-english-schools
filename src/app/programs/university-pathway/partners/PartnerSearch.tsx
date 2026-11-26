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
  const [city, setCity] = useState("");
  const results = schools.filter(school => (school.name+" "+school.city).toLowerCase().includes(search.toLowerCase()) && school.city.includes(location) && school.city.includes(city) && school.name.includes(schoolName));
  return <section className={s.section}>
    <form className={s.searchForm} onSubmit={event=>{event.preventDefault();setSearch(query)}}>
      <label>Country<select defaultValue="USA"><option>USA</option></select></label>
      <label>Search programs<input value={query} onChange={event=>setQuery(event.target.value)} type="search" /></label>
      <button type="submit">Search programs</button>
    </form>
    <div className={s.results}><aside className={s.filters}><h2>Filters</h2>
      <label>State<select value={location} onChange={event=>setLocation(event.target.value)}><option value="">All states</option><option>California</option><option>Virginia</option></select></label>
      <label>City<select value={city} onChange={event=>setCity(event.target.value)}><option value="">All cities</option><option>Irvine</option><option>Arlington</option></select></label>
      <label>School<select value={schoolName} onChange={event=>setSchoolName(event.target.value)}><option value="">All schools</option><option>Westcliff University</option><option>Marymount University</option></select></label>
      <button type="button" onClick={()=>{setLocation("");setCity("");setSchoolName("");setQuery("");setSearch("");}}>Clear filters</button>
    </aside><div><p role="status">{results.length} university listings found</p>
    {results.length === 0 && <p>No universities match your search. Try another name, city, or state.</p>}
    {results.map((school)=><details className={s.listing} key={school.name+school.city}><summary>{school.name} — {school.city}</summary><p>Private school</p>{school.text && <p>{school.text}</p>}</details>)}
    </div></div>
  </section>;
}
