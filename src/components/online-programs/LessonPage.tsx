import { ContactForm } from "@/components/contact/ContactForm";
import { RevealHeading } from "@/components/ui/RevealHeading";
import { OnlineHero, OnlinePage, ProgramIcon } from "./OnlineSections";
import s from "./Online.module.css";

const courses = {
  group: {
    title: <>Group<br />Classes</>,
    panelTitle: "Online group learning program",
    info: ["12 contact hours per week", "Each session lasts 4 weeks.", "One session is required to complete one level."],
    tiers: ["4 weeks", "8 weeks", "12 weeks or more"],
    rates: ["140,00", "130,00", "120,00"], frequency: "Per class", registration: "Once",
  },
  private: {
    title: <>Private<br />Lessons</>,
    panelTitle: "Private exam preparation and business English lessons.",
    info: ["5 contact hours per week", "Each lesson is 55 minutes + 5 minutes of teacher support", "Minimum enrollment: 10 lessons"],
    tiers: ["For 10 lessons", "For 20 lessons", "For 30 lessons or more"],
    rates: ["50,00", "45,00", "45,00"], frequency: "Per lesson", registration: "One-time",
  },
};
const icons = ["course-calendar", "course-clock", "course-fee"];

export function LessonPage({ program }: { program: keyof typeof courses }) {
  const course = courses[program];
  return <OnlinePage promo="Contact us for promotional pricing." href="#contact-form">
    <OnlineHero program={program} title={course.title} href="#contact-form" />
    <section className={s.lessonPanel} data-course={program} aria-labelledby="lesson-pricing">
      <div className={s.lessonFacts}>
        <RevealHeading as="h2" id="lesson-pricing">{course.panelTitle}</RevealHeading>
        <ul>{course.info.map((text,i) => <li key={text}><span><ProgramIcon name={icons[i]} /></span>{text}</li>)}</ul>
      </div>
      <div className={s.feeBox}>
        <table><caption className="sr-only">Registration and platform fees</caption>
          <thead><tr><th>Fees</th><th>Frequency</th><th>Amount</th></tr></thead>
          <tbody><tr><td>Registration fee</td><td>{course.registration}</td><td>R$ 100,00</td></tr>
            <tr><td>Platform access fee</td><td>Per week</td><td>R$ 5,00</td></tr></tbody>
        </table>
        <table><caption className="sr-only">Tuition by enrollment length</caption>
          <thead><tr><th>Pricing</th><th>Frequency</th><th>Amount</th></tr></thead>
          <tbody>{course.tiers.map((label,i) => <tr key={label}><td>{label}</td><td>{course.frequency}</td><td>R$ {course.rates[i]}</td></tr>)}</tbody>
        </table>
      </div>
    </section>
    <div className={s.inquiry}><ContactForm /></div>
  </OnlinePage>;
}
