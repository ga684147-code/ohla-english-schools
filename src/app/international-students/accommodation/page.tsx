import type { Metadata } from "next";
import { DarkCards, InfoIcon, SectionHeading, StudentHero, StudentPage } from "@/components/student-info/StudentSections";
import { Photo } from "@/components/ui/Photo";
import s from "@/components/student-info/StudentInfo.module.css";

export const metadata: Metadata = {
  title: "Accommodation | OHLA English Schools",
  description: "Explore homestay and residence options, meals and airport transfers for international students at OHLA.",
};

const options = [
  { icon: "home", title: "Homestay", text: "Selected host family, individual room, Wi-Fi, and meals included. Complete cultural immersion." },
  { icon: "single", title: "Individual Residence", text: "Greater privacy and independence. Single option available depending on location and period." },
  { icon: "double", title: "Shared Residence", text: "Joint booking with another student, when available. Ideal for friends arriving together." },
  { icon: "shared", title: "Shared Residence", text: "Shared common areas with other international students. Multicultural experience." },
];

export default function Accommodation() {
  return <StudentPage>
    <StudentHero variant="housing" label="Accommodation"
      title={<>Feel at home<br />during your experience in the United States</>} action="Check accommodation options" href="#housing-options" />
    <section className={s.housingOptions} id="housing-options">
      <SectionHeading text="OHLA offers different accommodation options, subject to location, period, and availability. Find the option that best fits your style and budget.">Feel at home during your<br />experience in the United States</SectionHeading>
      <DarkCards items={options} />
    </section>
    <section className={s.homestay}>
      <div className={s.housePhoto}>
        <Photo name="student-info/housing-homestay" alt="A white family home with a lawn and a shaded porch" sizes="(max-width: 760px) 90vw, 41vw" />
        <aside className={s.airport}><strong>Airport Transfer</strong><h3>Arrive with more peace of mind</h3><p>Transfer options: Arrival Only or Arrival and Departure, with reception by an OHLA representative or the host family.</p></aside>
      </div>
      <div><SectionHeading>OHLA Homestay<br /><span className={s.benefitSubtitle}>- benefits</span></SectionHeading>
        <ul className={s.houseBenefits}>{[["family","Selected families"],["room","Individual room"],["wifi","Wi-Fi available"],["meals","Breakfast and dinner"]].map(([icon, title]) =>
          <li key={icon}><InfoIcon name={icon} /><h3>{title}</h3></li>)}</ul>
      </div>
    </section>
  </StudentPage>;
}
