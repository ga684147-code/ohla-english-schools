import type { Metadata } from "next";
import { FeatureCards, OnlinePage, OnlineHero, type Feature } from "@/components/online-programs/OnlineSections";
import { RevealHeading } from "@/components/ui/RevealHeading";
import { Photo } from "@/components/ui/Photo";
import s from "@/components/online-programs/Online.module.css";
import { CampusFees } from "./CampusFees";

export const metadata: Metadata = {
  title: "Exam Preparation | OHLA English Schools",
  description: "Explore TOEFL and IELTS exam preparation, program requirements, private lessons and campus-specific tuition at OHLA.",
};
const features: Feature[] = [
  ["exam-sessions","Sessions last for 10 consecutive weeks."],
  ["exam-enrollment","Students can enroll for a minimum of 2 weeks."],
  ["exam-duration","Students can take as long as they need to complete the program."],
  ["exam-five-lessons","5 private lessons per week"],
  ["exam-ten-lessons","10 private lessons per week"],
];
export default function ExamPreparation() {
  return <OnlinePage promo="Contact us for promotional pricing.">
    <OnlineHero program="exam" title={<>Exam<br />Preparation</>} />
    <section className={s.examOverview} aria-labelledby="exam-about">
      <div className={s.examIntro}>
        <div className={s.examPhoto}><Photo name="online-programs/exam-support" alt="Classroom prepared for English lessons" sizes="(max-width: 760px) 90vw, 37vw" /></div>
        <div>
          <RevealHeading as="h2" id="exam-about">Exam Preparation for Intermediate Plus to Elite Plus Level Students</RevealHeading>
          <p>These programs help students acquire the skills, confidence, and techniques needed to take their chosen exam and achieve their target score. Students must pass the Intermediate Plus level test or higher to join the program. Prior online assessments can also be arranged upon request.</p>
          <p>Every two weeks, students take a simulated TOEFL or IELTS test. This mirrors the actual exam, allowing them to become familiar with the test format and track their progress.</p>
        </div>
      </div>
      <FeatureCards items={features} label="Exam preparation options" />
    </section>
    <section className={s.examFees} aria-labelledby="enrollment-fees">
      <RevealHeading as="h2" id="enrollment-fees">Enrollment Fees</RevealHeading>
      <p>Each program has a one-time, non-refundable enrollment fee of US$ 200.</p>
      <CampusFees />
    </section>
  </OnlinePage>;
}
