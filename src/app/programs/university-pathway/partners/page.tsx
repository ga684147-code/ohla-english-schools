import { Photo } from "@/components/ui/Photo";
import { RevealHeading } from "@/components/ui/RevealHeading";
import { VirtualCampusTab } from "@/components/campuses/CampusSections";
import { PartnerSearch } from "./PartnerSearch";
import s from "@/components/pathway/Pathway.module.css";
export const metadata = { title: "University Partners | OHLA English Schools" };
export default function Partners() {
  return <main id="main"><section className={s.hero}><Photo name="pathway/partners-hero" priority /><div className={s.heroCopy}>
    <RevealHeading as="h1">Find the perfect program for you</RevealHeading>
    <p>Explore your options and compare programs side-by-side to find the perfect fit for your goals. Best of all, you can streamline your admission process as all of our partner universities accept the OHLA program as proof of English proficiency, allowing you to bypass the need for TOEFL, IELTS, or Duolingo exams.</p>
    <p>Let us help make your higher education dream a reality.</p>
  </div></section><PartnerSearch /><VirtualCampusTab /></main>;
}
