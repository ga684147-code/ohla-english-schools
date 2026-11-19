import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { VirtualCampusTab } from "@/components/campuses/CampusSections";
import { Button } from "@/components/ui/Button";
import { Photo } from "@/components/ui/Photo";
import { routes } from "@/config/routes";
import { iconMenus } from "@/data/menus";
import styles from "./Overview.module.css";

export const metadata: Metadata = {
  title: "Youth Camp 2027 | OHLA English Schools",
  description: "Explore OHLA’s 2027 youth camps in Miami and Orlando, with English lessons, supervised activities and Florida excursions.",
};

const facts = [
  ["people", "Ages", "13–18 Orlando", "15–18 Miami"],
  ["palm", "Miami & Orlando", "Two amazing destinations in Florida"],
  ["lessons", "English lessons", "15+ hours of English learning every week"],
  ["globe", "International students", "Make friends from around the world"],
];
const benefits = [
  ["book", "Learn beyond the classroom", "Practice English through real experiences and everyday interactions."],
  ["sun", "Experience the best of Florida", "Enjoy exciting attractions, cultural experiences, beaches, and local favorites."],
  ["ticket", "Activities included", "A full schedule of activities and excursions is built into the experience."],
  ["sparkle", "Memories that last", "Discover new places, build confidence, and create unforgettable friendships."],
  ["calendar", "OHLA Life", "Special days bring students together through activities, culture, and connection."],
  ["shield", "Safe & supervised", "OHLA staff lead scheduled activities and excursions throughout the program."],
];
const activities = [
  { icon: "morning", time: "9:00 – 12:45", title: "English classes", text: "Improve your English at one of the top ESL schools in the USA, with engaging lessons in a dynamic, international environment.", photo: "classes", alt: "Campers in front of a colorful OHLA mural" },
  { icon: "pin", time: "13:45 – 18:00", title: "Activities & excursions", text: "Discover the best of Florida with exciting activities, cultural experiences and fun with new friends.", photo: "excursions", alt: "Students posing together during a Florida excursion" },
  { icon: "moon", time: "Evening", title: "Dinner & free time", text: "Enjoy dinner with your group, games and cultural activities each evening.", photo: "evening", alt: "Palm trees and illuminated buildings in Miami at sunset" },
];

function CampIcon({ name, size }: { name: string; size: number }) {
  return <Image src={`/images/youth-camp/${name}.webp`} width={size} height={size} alt="" />;
}

export default function YouthCampPage() {
  return <main id="main" className={styles.page}>
    <section className={styles.hero} aria-labelledby="camp-title">
      <Photo name="youth-camp/hero" priority />
      <div className={styles.heroCopy}>
        <h1 id="camp-title">Youth <span>Camp 2027</span></h1>
        <p className={styles.lead}>Learn English.<br />Experience Florida.</p>
        <p className={styles.memories}>Create Memories for Life.</p>
        <p className={styles.intro}>Two unforgettable destinations. English lessons, excursions and international friendships in Miami &amp; Orlando.</p>
        <div className={styles.actions}>
          <Button href="#camp-programs">Explore programs</Button>
          <Button href={routes.studyOnline} variant="blue">How it works</Button>
        </div>
      </div>
    </section>
    <nav id="camp-programs" className={styles.nav} aria-label="Youth camp pages">
      {iconMenus.youth.map(item => <Link key={item.href} href={item.href} aria-current={item.href === routes.youthCamp ? "page" : undefined}>
        <span><Image src={`/images/menu/${item.icon}.svg`} width={44} height={44} alt="" /></span>{item.label}
      </Link>)}
    </nav>
    <ul className={styles.facts} aria-label="Camp at a glance">
      {facts.map(([icon, title, ...lines]) => <li key={icon}>
        <CampIcon name={icon} size={44} />
        <div><strong>{title}</strong>{lines.map(line => <p key={line}>{line}</p>)}</div>
      </li>)}
    </ul>
    <section className={styles.why} aria-labelledby="why-camp">
      <h2 id="why-camp">Why choose OHLA?</h2>
      <p className={styles.subtitle}>Learn beyond the classroom and discover the best of Florida.</p>
      <ul className={styles.benefits}>{benefits.map(([icon, title, text]) =>
        <li key={icon}><CampIcon name={icon} size={60} /><h3>{title}</h3><p>{text}</p></li>
      )}</ul>
    </section>
    <section className={styles.day} aria-labelledby="camp-day">
      <h2 id="camp-day">A typical day at OHLA</h2>
      <p className={styles.subtitle}>English lessons, exciting activities and time to connect.</p>
      <ol className={styles.schedule}>{activities.map(item =>
        <li key={item.photo}>
          <div className={styles.time}><CampIcon name={item.icon} size={32} />{item.time}</div>
          <h3>{item.title}</h3><p>{item.text}</p>
          <div className={styles.activityPhoto}><Photo name={`youth-camp/${item.photo}`} alt={item.alt} sizes="(max-width: 767px) 90vw, 28vw" /></div>
        </li>)}</ol>
    </section>
    <section className={styles.contact} aria-labelledby="camp-contact">
      <div className={styles.contactPhoto}><Photo name="youth-camp/contact" sizes="65vw" /></div>
      <div className={styles.contactCopy}>
        <h2 id="camp-contact">Ready for youth <span>camp 2027?</span></h2>
        <p>Let’s plan your group’s Florida adventure.</p>
        <p>For information and pricing, contact <a href="mailto:camps@ohla.com">camps@ohla.com</a> with your destination, arrival date, group size, number of leaders, and students’ age range. We’ll be happy to create a personalized quote for your group!</p>
      </div>
      <Button href="mailto:camps@ohla.com" variant="light">Contact camps@ohla.com ↗</Button>
    </section>
    <VirtualCampusTab />
  </main>;
}
