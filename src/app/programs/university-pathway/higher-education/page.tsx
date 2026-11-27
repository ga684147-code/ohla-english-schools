import { Photo } from "@/components/ui/Photo";
import { Button } from "@/components/ui/Button";
import { RevealHeading } from "@/components/ui/RevealHeading";
import { BlogCTA } from "@/components/blog/BlogCTA";
import { VirtualCampusTab } from "@/components/campuses/CampusSections";
import { routes } from "@/config/routes";
import s from "@/components/pathway/Pathway.module.css";

export const metadata = { title: "Higher Education | OHLA English Schools" };
export default function HigherEducation() {
  return <main id="main">
    <section className={s.hero}><Photo name="pathway/higher-hero" priority /><div className={s.heroCopy}>
      <RevealHeading as="h1">Your English can open doors to universities in Canada, the USA and Europe.</RevealHeading>
      <p>Discover OHLA’s academic path and receive guidance to plan your next steps in higher education.</p>
      <Button href="#higher-education">Explore Higher Education</Button>
    </div></section>
    <section id="higher-education" className={s.section}><div className={s.heading}><p>Higher education</p><RevealHeading as="h2">From English to higher education</RevealHeading></div></section>
    <section className={s.support}><div>
      <div className={s.photo}><Photo name="pathway/higher-support" alt="OHLA campus reception" /></div>
      <div><p>Your next step</p><RevealHeading as="h2">How OHLA supports your journey</RevealHeading><p>Guidance to turn your goal into a study plan.</p>
        <h3>Choose a university</h3><p>Find college or university options that fit your profile.</p>
        <h3>Admissions guidance</h3><p>Understand the application process and the required documents.</p>
        <h3>Campus visits</h3><p>Explore partner universities through organized campus visits.</p>
      </div>
    </div></section>
    <section className={s.section}><div className={s.heading}><p>How to get started</p><RevealHeading as="h2">Your path in three steps</RevealHeading></div>
      <ol className={s.steps}>{[["Choosing a university","Share your academic goals with our team."],["Submit your application","Select the program and submit your documents."],["Plan your university path","Get guidance on the next steps."]].map(([title,text])=><li key={title}><h3>{title}</h3><p>{text}</p></li>)}</ol>
    </section>
    <BlogCTA href={routes.apply} /><VirtualCampusTab />
  </main>;
}
