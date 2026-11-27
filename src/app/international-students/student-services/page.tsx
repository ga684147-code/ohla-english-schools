import type { Metadata } from "next";
import {
  AdvisorBanner, Documents, SectionHeading, StudentHero, StudentPage,
} from "@/components/student-info/StudentSections";
import s from "@/components/student-info/StudentInfo.module.css";

export const metadata: Metadata = {
  title: "Student Services | OHLA English Schools",
  description: "Explore accommodation, airport transfers, orientation, academic support, cultural activities, and university guidance for OHLA students.",
};

const services = [
  ["Accommodation", "Residence and stay options with local families."],
  ["Airport Transfer", "Request arrival transportation or round-trip."],
  ["Initial Orientation", "Information to start your studies and get to know the school."],
  ["Academic Support", "Guidance to plan your next study steps."],
  ["Cultural Activities", "Experiences to meet people and explore the city."],
  ["University Guidance", "Support to explore paths to higher education."],
];

const stages = [
  { icon: "services-travel", title: "Before travel", text: "Choose accommodation and, if needed, request airport transfer." },
  { icon: "services-arrival", title: "Upon arrival", text: "Receive guidance to get settled and start your classes." },
  { icon: "services-course", title: "During the course", text: "Participate in activities and discuss your academic goals." },
];

export default function StudentServices() {
  return (
    <StudentPage className={s.servicesPage}>
      <StudentHero
        variant="services"
        label="Student Services"
        title={<>Beyond the classroom.<br />Count on OHLA at <span className={s.stagePhrase}>every stage.</span></>}
        text="Support to plan your arrival, find accommodation, and make the most of your US study experience."
        action="Explore our services →"
        href="#services"
      />
      <section className={s.serviceOverview} id="services" aria-label="Student services">
        <SectionHeading label="Student Services" text="Discover the options available to OHLA students.">
          Support that stays with you
        </SectionHeading>
        <ol className={s.serviceGrid}>
          {services.map(([title, description], index) => (
            <li key={title}>
              <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </li>
          ))}
        </ol>
      </section>
      <Documents
        photo="services-campus"
        alt="Two students talking as they walk across campus"
        label="Your experience"
        title="From planning to campus life"
        text="Find the right support at every stage of your journey."
        items={stages}
      />
      <AdvisorBanner
        title="How can we help you on your journey?"
        text="Talk to our team about your next transfer steps."
      />
    </StudentPage>
  );
}
