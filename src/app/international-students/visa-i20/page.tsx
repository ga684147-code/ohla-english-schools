import type { Metadata } from "next";
import { AdvisorBanner, Documents, SectionHeading, Steps, StudentHero, StudentPage } from "@/components/student-info/StudentSections";
import { routes } from "@/config/routes";
import s from "@/components/student-info/StudentInfo.module.css";

export const metadata: Metadata = {
  title: "F-1 Visa & I-20 | OHLA English Schools",
  description: "Learn how the F-1 visa and Form I-20 fit into your application and which documents to prepare for your studies at OHLA.",
};

const steps = [
  { title: "Apply to OHLA", text: "Choose your program and send the documents." },
  { title: "Receive your I-20", text: "After acceptance, OHLA sends your form." },
  { title: "Apply for the F-1 visa", text: "Pay the SEVIS fee and fill out the DS-160." },
  { title: "Prepare for the interview", text: "Follow the embassy or consulate’s instructions." },
];
const documents = [
  { icon: "passport", title: "Valid passport", text: "Valid during your study period." },
  { icon: "funds", title: "Financial proof", text: "Sufficient funds for the course period." },
  { icon: "affidavit", title: "Affidavit of Support", text: "If the proof is in someone else’s name." },
];

export default function VisaI20() {
  return <StudentPage>
    <StudentHero variant="visa" label="F-1 Visa & I-20" title={<>F-1 Visa and I-20 Form:<br />understand where to start</>}
      text="To study English in the United States, the first step is to understand the role of each document in your journey."
      action="Explore accommodation options" href={routes.studentAccommodation} />
    <section className={s.comparison}>
      <SectionHeading label="Understand the difference" text="The I-20 comes from the school. The F-1 visa is requested from the US government.">Two documents, different functions</SectionHeading>
      <ul>
        <li><span>01 I-20 Form</span><h3>Your eligibility to study</h3><p>After you’re accepted, OHLA sends the I-20. You’ll need it to apply for the F-1 visa.</p></li>
        <li><span>02 F-1 Visa</span><h3>Your student visa application</h3><p>With the I-20, you follow the application steps and attend the interview, if required.</p></li>
      </ul>
    </section>
    <Steps label="Step by step" title="How to start your studies" items={steps} />
    <Documents photo="visa-documents" alt="Student checking her passport and paperwork at a desk" label="Before you start" title="Gather your initial documents"
      text="OHLA will let you know which documents to send during your application." items={documents} />
    <AdvisorBanner title="Your path to studying in the US starts here." text="Talk to OHLA about the program and your application." />
  </StudentPage>;
}
