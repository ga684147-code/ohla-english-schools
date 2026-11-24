import type { Metadata } from "next";
import { routes } from "@/config/routes";
import { RevealHeading } from "@/components/ui/RevealHeading";
import { CampDetail, CampFeature, ProgramCards, type CampProgram } from "../CampDetails";
import s from "../Details.module.css";

const intro = "Experience the magic in Orlando with world-famous theme parks, exciting attractions and unforgettable memories!";
export const metadata: Metadata = { title: "Orlando Programs | OHLA Youth Camp", description: intro };

const programs: CampProgram[] = [
  {
    name: "Adventure Camp", weeks: 2, photo: "orlando-adventure", board: "Residence",
    section: "Activities included",
    items: ["3 Theme Park Tickets", "Universal Studios", "Universal Epic Universe", "Islands of Adventure", "Gatorland", "ICON Park", "Ripley’s Believe It or Not!", "Andretti Orlando", "Winter Summerland Mini Golf", "Outlet Mall Shopping", "Farewell BBQ"],
  },
  {
    name: "Disney Camp", weeks: 2, photo: "orlando-disney", board: "Residence", disney: true,
    section: "4 Disney park tickets + 3 exclusive workshops",
    items: ["Technology of Disney Parks Workshop", "Physics of Disney Parks Workshop", "Disney Theme Park Design Workshop"],
  },
];

export default function OrlandoPrograms() {
  return <CampDetail current={routes.youthOrlando} hero="orlando" title={["Orlando", "Programs"]} intro={intro}>
    <ProgramCards programs={programs} city="Orlando" age="13–18" />
    <CampFeature photo="orlando-magic" label="Orlando camp experience">
      <RevealHeading as="h2" className={s.magicTitle}>{intro}</RevealHeading>
    </CampFeature>
  </CampDetail>;
}
