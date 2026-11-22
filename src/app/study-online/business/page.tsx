import type { Metadata } from "next";
import { OnlinePage, OnlineHero, ProgramIcon } from "@/components/online-programs/OnlineSections";
import s from "@/components/online-programs/Online.module.css";

export const metadata: Metadata = {
  title: "Business English Online | OHLA English Schools",
  description: "Practice professional communication, presentations and corporate vocabulary in OHLA’s online business English lessons.",
};
const highlights = [
  ["business-communication","Professional communication"], ["business-presentations","Presentations"],
  ["business-vocabulary","Corporate vocabulary"], ["business-format","Private or group format, as confirmed"],
];
export default function BusinessEnglish() {
  return <OnlinePage>
    <OnlineHero program="business" title={<>Business<br />English Online</>} action="Contact us">
      <ul className={s.businessTags}>{highlights.map(([icon, text]) =>
        <li key={icon}><ProgramIcon name={icon} />{text}</li>)}</ul>
    </OnlineHero>
  </OnlinePage>;
}
