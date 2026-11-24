import type { Metadata } from "next";
import { routes } from "@/config/routes";
import { RevealHeading } from "@/components/ui/RevealHeading";
import { CampDetail, CampFeature, CardPhoto, IconList, type IconItem } from "../CampDetails";
import s from "../Details.module.css";

const intro = "Two ways to feel at home during your Florida experience.";
export const metadata: Metadata = { title: "Accommodation Options | OHLA Youth Camp", description: intro };

const lodging: { name: string; qualifier: string; photo: string; features: IconItem[] }[] = [
  { name: "Residence", qualifier: "(Miami & Orlando)", photo: "residence", features: [
    ["hotel", "Modern hotel accommodations"], ["double-room", "Double occupancy rooms for students (same gender)"],
    ["single-room", "Group Leaders in single rooms"], ["wifi", "Wi-Fi and hotel amenities"],
    ["meals", "Meals included as per program"], ["laundry", "Laundry facilities"],
    ["walk-to-school", "Walking distance or short ride to school (Miami)"],
  ] },
  { name: "Discover Camp", qualifier: "2 weeks", photo: "homestay", features: [
    ["host-family", "Live with a local host family"], ["roommates", "Double placement (2 students) with same host family"],
    ["breakfast-dinner", "Breakfast & Dinner with host family"], ["lunch", "Daily lunch stipend of $15"],
    ["local-transport", "Local transportation pass included"], ["immersion", "Cultural immersion & language practice every day"],
  ] },
];

export default function Accommodation() {
  return <CampDetail current={routes.youthAccommodation} hero="accommodation" title={["Accommodation", "Options"]} intro={intro}>
    <section className={s.panel} aria-label="Youth camp accommodation options">
      <div className={s.cards}>{lodging.map(option => <article className={s.card} key={option.photo}>
        <CardPhoto name={option.photo} />
        <div className={s.cardBody}>
          <RevealHeading as="h2" className={s.cardTitle}>{option.name}<span>{option.qualifier}</span></RevealHeading>
          <IconList items={option.features} className={s.lodgingList} />
        </div>
      </article>)}</div>
    </section>
    <CampFeature photo="safety" label="Camp safety">
      <RevealHeading as="h2">Safety is our priority</RevealHeading>
      <p>Peace of mind starts here. From carefully vetted and prepared host families to dedicated OHLA staff supervising activities and excursions, student safety and well-being are always a priority. We are committed to providing a safe, supportive, and welcoming experience where students can learn, explore, and feel at home.</p>
    </CampFeature>
  </CampDetail>;
}
