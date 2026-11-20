import { RevealHeading } from "@/components/ui/RevealHeading";
import { Button } from "@/components/ui/Button";
import { Photo } from "@/components/ui/Photo";
import { routes } from "@/config/routes";
export function ContactCTA() {
  return (
    <section className="contact-cta" aria-labelledby="contact-title">
      <div className="contact-photo">
        <Photo
          name="contact"
          alt="International students enjoying time together by the city waterfront"
          sizes="60vw"
        />
      </div>
      <div className="contact-shade" />
      <div className="contact-copy">
        <RevealHeading as="h2" id="contact-title">Ready to start your experience with OHLA?</RevealHeading>
        <p>
          Talk to our team and find out which program best matches your goals.
        </p>
        <div className="button-row">
          <Button href={routes.contact} variant="outline">
            Talk to a consultant
          </Button>
          <Button href={routes.whatsapp} variant="whatsapp">
            WhatsApp OHLA
          </Button>
        </div>
      </div>
    </section>
  );
}
