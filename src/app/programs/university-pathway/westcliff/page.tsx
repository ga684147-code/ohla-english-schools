import Image from "next/image";
import { Photo } from "@/components/ui/Photo";
import { RevealHeading } from "@/components/ui/RevealHeading";
import { VirtualCampusTab } from "@/components/campuses/CampusSections";
import { LevelDiagram } from "@/components/english-courses/LevelDiagram";
import { Programs } from "./Programs";
import s from "./Westcliff.module.css";

export const metadata = { title: "Westcliff University at OHLA | OHLA English Schools" };
export default function Westcliff() {
  return <main id="main" className={s.page}>
    <section className={s.hero}><Photo name="westcliff/hero" priority /><RevealHeading as="h1">Universidade Westcliff</RevealHeading></section>
    <section className={s.content}>
      <Image className={s.logo} src="/images/westcliff/logo.webp" width={305} height={90} alt="Westcliff University" />
      <div className={s.intro}><RevealHeading as="h2">Westcliff university at ohla?</RevealHeading><div>
        <p>OHLA is proud to welcome Westcliff University on its premises. As one of the most innovative global education institutions in the US, Westcliff University is respected for its transformative, technologically advanced programs and initiatives with a focus on excellence, social responsibility, and diversity.</p>
        <p>Westcliff University delivers the skills to Educate, Inspire and Empower students from around the world to achieve personal and professional success by providing practical training.</p>
      </div></div>
    </section>
    <Programs />
    <section className={s.content}><div className={s.detail}><div><RevealHeading as="h2">Programs offered</RevealHeading>
      <p>Established since 1993, Westcliff University’s primary goal is to support the integration of classroom instruction into the real world of business, STEM and education. Students at Westcliff University learn from professors working in the field, providing a special opportunity to learn from enlightened and practical instructors.</p>
      <h3>Who Qualifies?</h3><p>All students seeking to pursue a Master’s or Doctoral’s degree in the US can enroll at Westcliff University at OHLA.</p>
    </div><div className={s.photo}><Photo name="westcliff/campus" alt="Student studying on campus" /></div></div></section>
    <LevelDiagram intensive={false} />
    <section className={s.content}><div className={s.cards}><Image className={s.ohlaLogo} src="/images/logo.webp" width={250} height={250} alt="OHLA English Schools" />
      <article><h2>TOEFL or IELTS Required?</h2><p>You do not need TOEFL or IELTS to transition to Westcliff University. You only need to complete the Elite Level at OHLA for your Master’s or Doctoral’s degree.</p></article>
      <article><h2>University Admission Assistance</h2><p>OHLA, through its sister company, UniApplyNow does the University admission process for YOU and we GUARANTEE your admission to Westcliff University.</p></article>
      <article><h2>Virtual Campus Class offered?</h2><p>Westcliff University programs are currently available at our OHLA Miami Brickell and OHLA Orlando Celebration campuses.</p></article>
    </div></section><VirtualCampusTab />
  </main>;
}
