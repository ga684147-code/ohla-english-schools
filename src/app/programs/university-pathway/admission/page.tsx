import { Photo } from "@/components/ui/Photo";
import { Button } from "@/components/ui/Button";
import { RevealHeading } from "@/components/ui/RevealHeading";
import { BlogCTA } from "@/components/blog/BlogCTA";
import { VirtualCampusTab } from "@/components/campuses/CampusSections";
import { routes } from "@/config/routes";
import hero from "./AdmissionHero.module.css";
import s from "@/components/pathway/Pathway.module.css";
export const metadata = { title: "University Admission | OHLA English Schools" };
export default function Admission() {
  return <main id="main">
    <section className={hero.hero}><Photo name="pathway/admission-photo" priority /><div className={hero.glow} aria-hidden="true" /><div className={hero.copy}>
      <RevealHeading as="h1">Your path to a U.S. university starts here.</RevealHeading>
      <p>Get support to find the right university, navigate the admission process and take the next step toward your academic goals in the United States.</p>
      <Button href="#admission-options">Explore Your Options</Button>
    </div></section>
    <section className={s.section} id="admission-options"><div className={s.heading}><RevealHeading as="h2">More options. A clearer path.</RevealHeading><p>Explore university and college opportunities based on your academic goals, preferred area of study and future plans.</p></div>
      <ul className={s.steps}>{[["Find Your University","Discover institutions and programs that match your goals."],["Prepare Your Application","Get guidance throughout the university application process."],["Move Forward","Receive support as you prepare for the next stage of your academic journey."]].map(([title,text])=><li key={title}><h3>{title}</h3><p>{text}</p></li>)}</ul>
    </section>
    <section className={s.support}><div><div className={s.photo}><Photo name="pathway/admission-campus" alt="A university campus with students studying outdoors" /></div><div><RevealHeading as="h2">Your path from OHLA to university</RevealHeading>
      <ol>{["Study English at OHLA","Reach the required English level","Apply to a university","Receive admission","Start your university journey"].map(step=><li key={step}>{step}</li>)}</ol></div></div>
    </section>
    <section className={s.direct}><Photo name="pathway/admission-pathway" alt="" /><div><RevealHeading as="h2">Looking for a direct pathway to university?</RevealHeading><p>OHLA students may qualify for admission opportunities at partner institutions after reaching the required English level.</p><Button href={routes.universityPathway}>Explore University Pathway</Button></div></section>
    <BlogCTA href={routes.apply} /><VirtualCampusTab />
  </main>;
}
