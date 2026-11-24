import type { Metadata } from "next";
import { routes } from "@/config/routes";
import { CampDetail, ProgramCards, type CampProgram } from "../CampDetails";

const intro = "Study in the vibrant city of Miami and enjoy the sun, beaches, culture and adventure!";
export const metadata: Metadata = { title: "Miami Programs | OHLA Youth Camp", description: intro };

const programs: CampProgram[] = [
  {
    name: "Explorer Camp", weeks: 2, photo: "miami-explorer", board: "Residence",
    section: "Activities included",
    items: ["Nikki Beach", "Bayside Boat Tour", "Wynwood Walls & Design District", "Art Deco District", "Frost Museum of Science", "Everglades", "Paddle Boarding / Kayaking", "Lincoln Road", "Dolphin Mall", "Paradise Cove Water Park", "Farewell BBQ at Crandon Beach"],
  },
  {
    name: "Discover Camp", weeks: 2, photo: "miami-discover", board: "Homestay",
    section: "Program highlights",
    items: ["Same exciting activities as our 2-Week Residence Program!", "Daily lunch stipend", "Local transportation pass", "Full board: breakfast & dinner with host family", "Multicultural immersion"],
  },
  {
    name: "Discover Plus", weeks: 3, photo: "miami-discover-plus", board: "Homestay",
    section: "Program highlights",
    items: ["All the benefits of our 2-Week Homestay Program", "Additional excursions and activities", "More time to learn, explore, and immerse yourself in the culture!", "Explore Miami like a local!"],
  },
];

export default function MiamiPrograms() {
  return <CampDetail current={routes.youthMiami} hero="miami" title={["Miami", "Programs"]} intro={intro}>
    <ProgramCards programs={programs} city="Miami" age="15–18" />
  </CampDetail>;
}
