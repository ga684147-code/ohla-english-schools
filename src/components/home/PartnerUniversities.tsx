import { PartnerOdometer } from "./PartnerOdometer";
import { RevealHeading } from "@/components/ui/RevealHeading";
import { Button } from "@/components/ui/Button";
import { Photo } from "@/components/ui/Photo";
import { routes } from "@/config/routes";
export function PartnerUniversities() {
  return (
    <section className="partner wide-container" aria-labelledby="partner-title">
      <div className="partner-photo">
        <Photo
          name="partner"
          alt="Students studying together on a university campus"
          sizes="70vw"
        />
      </div>
      <div className="partner-shade" />
      <span className="partner-outline" aria-hidden="true">
        UNIVERSITY
        <br /> PATHWAY
      </span>
      <div className="partner-copy">
        <div className="partner-stat">
          <PartnerOdometer />
          <span>
            partner universities
            <br /> and colleges
          </span>
        </div>
        <RevealHeading as="h2" id="partner-title">
          Your English can open the doors to a university in the United States
        </RevealHeading>
        <p>
          OHLA partners with{" "}
          <strong>more than 200 universities and colleges</strong>. Qualified
          students can use certain advanced OHLA levels as part of the admission
          process, including at institutions that waive TOEFL or IELTS
          requirements under the conditions established by the program.
        </p>
      </div>
      <Button href={routes.universityPathway} variant="light">
        Discover the University Pathway
      </Button>
    </section>
  );
}
