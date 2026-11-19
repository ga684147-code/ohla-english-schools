import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { BlogCTA } from "@/components/blog/BlogCTA";
import { VirtualCampus } from "@/components/home/VirtualCampus";
import { routes } from "@/config/routes";
import styles from "./Campus.module.css";

export const metadata: Metadata = {
  title: "Virtual Campus | Study English online with OHLA",
  description: "Join live online English classes with OHLA-certified teachers in small groups.",
};

const benefits = [
  ["live", "While most online courses only offer pre-recorded classes, students and teachers interact in real time at OHLA Virtual Campus."],
  ["classroom", "Students can write responses that can be shared instantly with classmates and teachers, mirroring the traditional classroom environment."],
  ["feedback", "Teachers review and provide immediate feedback, enriching the learning experience."],
  ["groups", "Personalized approach in a small group setting (max 12 students per class)."],
  ["pathway", "By joining the OHLA Pathway program, students can access over 100 top US universities and colleges."],
];

export default function StudyOnlinePage() {
  return (
    <main id="main" className={styles.page}>
      <section className={styles.hero} aria-labelledby="online-title">
        <picture className={styles.heroArt}>
          <source media="(max-width: 699px)" srcSet="/images/virtual-campus/hero-mobile.webp" />
          <Image src="/images/virtual-campus/hero.webp" alt="" fill sizes="100vw" fetchPriority="high" loading="eager" />
        </picture>
        <div className={styles.heroCopy}>
          <h1 id="online-title">Study English online with OHLA</h1>
          <p>Live classes with OHLA teachers</p>
          <Button href={routes.apply}>Apply now</Button>
        </div>
      </section>
      <VirtualCampus videoSrc="/videos/virtual-campus.mp4" showActions={false} />
      <section className={styles.benefits} aria-labelledby="benefits-title">
        <h2 id="benefits-title">OHLA Virtual Campus is not your average online English course!</h2>
        <p>See why:</p>
        <ul>{benefits.map(([icon, text]) => (
          <li key={icon}>
            <Image src={`/images/virtual-campus/${icon}.webp`} width={49} height={49} alt="" />
            <p>{text}</p>
          </li>
        ))}</ul>
      </section>
      <BlogCTA heading="Contact us for promotional pricing." buttonLabel="Check prices now" />
    </main>
  );
}
