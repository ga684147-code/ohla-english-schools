import type { Metadata } from "next";
import { routes } from "@/config/routes";
import { Photo } from "@/components/ui/Photo";
import { RevealHeading } from "@/components/ui/RevealHeading";
import { CampDetail, CampFeature, IconList, type IconItem } from "../CampDetails";
import s from "../Details.module.css";

const intro = "Six simple steps to start your OHLA adventure.";
export const metadata: Metadata = { title: "Enrollment Process | OHLA Youth Camp", description: intro };
const steps = [
  ["Confirm program", "Confirm the destination and dates."],
  ["Send participant list", "Send a list of participants and group leader(s). We will provide an Excel template."],
  ["Initial deposit", "$400 per participant is due at least 90 days before arrival to confirm the program."],
  ["Application package", "We will provide the application package once the deposit has been received."],
  ["Final payment", "Due 45 days prior to arrival."],
  ["Arrival", "Arrive and start the program!"],
];
const included: IconItem[] = [
  ["airport", "Airport Transfers"], ["excursions", "Activities & Excursions"],
  ["classes", "English Classes"], ["entrance", "Entrance Fees"],
  ["placement", "Placement Test"], ["transportation", "Transportation"],
  ["materials", "Learning Materials"], ["meal-plan", "Meals"],
  ["certificate", "Certificate of Completion"], ["team", "OHLA Team Support"],
];

export default function EnrollmentProcess() {
  return <CampDetail current={routes.youthEnrollment} hero="enrollment" title={["Enrollment", "Process"]} intro={intro}>
    <section className={s.panel} aria-label="Enrollment steps for Miami and Orlando">
      <div className={s.enrollment}>
        <div className={s.student}><Photo name="youth-detail-enrollment-steps" sizes="(max-width: 760px) 92vw, 36vw" /></div>
        <div className={s.stepsCard}>
          <RevealHeading as="h2" className={s.cardTitle}>Residence<span>(Miami &amp; Orlando)</span></RevealHeading>
          <ol className={s.steps}>{steps.map(([title, description], index) =>
            <li key={title}><span aria-hidden="true" className={s.stepNumber}>{String(index + 1).padStart(2, "0")}</span>
              <div><h3>{title}</h3><p>{description}</p></div>
            </li>)}</ol>
        </div>
      </div>
    </section>
    <CampFeature photo="included" label="What’s included in youth camp">
      <RevealHeading as="h2">What’s included</RevealHeading>
      <IconList className={s.included} items={included} />
    </CampFeature>
  </CampDetail>;
}
