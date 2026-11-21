import type { Metadata } from "next";
import { AdvisorBanner, DarkCards, Documents, SectionHeading, Steps, StudentHero, StudentPage, advisorForm } from "@/components/student-info/StudentSections";
import s from "@/components/student-info/StudentInfo.module.css";

export const metadata: Metadata = {
  title: "F-1 Transfer | OHLA English Schools",
  description: "Learn how to transfer your F-1 studies to OHLA, contact your current school and prepare the documents needed for review.",
};
const criteria = [
  { icon: "transfer-status", title: "I have F-1 status", text: "You want to leave your current school and continue studying at OHLA." },
  { icon: "transfer-school", title: "I study at another school", text: "You want to leave your current school and continue studying at OHLA." },
  { icon: "double", title: "I want to study at OHLA", text: "Choose the location and program that match your goals." },
];
const steps = [
  { title: "Choose your program", text: "Define course, location, and expected start date." },
  { title: "Submit your application", text: "Complete the application and gather your documents." },
  { title: "Talk to your current school", text: "The representative at your current school completes OHLA’s transfer form." },
  { title: "Start at OHLA", text: "After the transfer, follow the instructions to start classes." },
];
const documents = [
  { icon: "transfer-i94", title: "I-94, F-1 visa, and I-20", text: "Copies of your current documents." },
  { icon: "transfer-funds", title: "Financial proof", text: "Statement and, if required, Affidavit of Support." },
  { icon: "transfer-passport", title: "Valid passport", text: "Identification document." },
  { icon: "transfer-form", title: "Transfer form", text: "Completed with your current school." },
];

export default function F1Transfer() {
  return <StudentPage>
    <StudentHero variant="transfer" label="F1 Transfer" title={<>Already studying<br />in the United States?<span className={s.transferLine}>Transfer your F-1 to OHLA.</span></>}
      text={<>Continue your studies at one of OHLA’s locations.<br />Learn how to apply for your transfer.</>}
      action="Talk to us about transferring →" href={advisorForm} />
    <section className={s.criteria}>
      <SectionHeading label="F-1 Transfer" text="Check if this is the right path for your application.">Is this transfer for you?</SectionHeading>
      <DarkCards items={criteria} />
    </section>
    <Steps label="How it works" title="Your transfer in four steps" items={steps} />
    <Documents photo="transfer-documents" alt="An advisor handing a student a folder of documents" label="Required documents" title="What you need to submit"
      text="Gather the documents needed to move your application forward." items={documents} />
    <AdvisorBanner title="Ready to continue your studies at OHLA?" text="Talk to our team about the next transfer steps." />
  </StudentPage>;
}
