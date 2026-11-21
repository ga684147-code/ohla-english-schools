import type { Metadata } from "next";
import { AdvisorBanner, InfoIcon, SectionHeading, StudentHero, StudentPage } from "@/components/student-info/StudentSections";
import { Photo } from "@/components/ui/Photo";
import { routes } from "@/config/routes";
import s from "@/components/student-info/StudentInfo.module.css";

export const metadata: Metadata = {
  title: "F-1 Students | OHLA English Schools",
  description: "Explore the steps from applying to OHLA and receiving your I-20 to preparing for your arrival as an F-1 student.",
};

const journey = [
  ["apply", "Apply to OHLA", "Choose your program and send your documents for application review."],
  ["receive", "Receive your I-20", "After you are accepted, OHLA sends the document you need to apply for the F-1 visa."],
  ["visa-apply", "Apply for the F-1 visa", "Pay the SEVIS fee, complete the DS-160, and follow the instructions for the consular interview."],
  ["arrival", "Prepare for your arrival", "Once your visa is approved, organize your trip and start your studies at OHLA."],
];

export default function F1Students() {
  return <StudentPage>
    <StudentHero variant="students" label="F-1 Students" title="Study in the United States with an F-1 student visa"
      text={<>Learn the path to studying<br />English at OHLA.</>} action="Explore accommodation options" href={routes.studentAccommodation} />
    <section className={s.f1Journey}>
      <SectionHeading label="Your journey with OHLA" text="See what happens in each step of the F-1 process.">From the first step to the classroom</SectionHeading>
      <div className={s.f1Layout}>
        <div className={s.f1Photo}><Photo name="student-info/students-documents" alt="Passport and application documents at a consular desk" sizes="(max-width: 760px) 90vw, 34vw" /></div>
        <ol className={s.f1Cards}>{journey.map(([icon, title, text]) => <li key={title}>
          <InfoIcon name={icon} /><h3>{title}</h3><p>{text}</p>
        </li>)}</ol>
      </div>
    </section>
    <AdvisorBanner title="Are you already in the United States?" text="Transfers or status changes follow different paths." />
  </StudentPage>;
}
