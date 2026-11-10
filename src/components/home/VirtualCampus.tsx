import { Button } from "@/components/ui/Button";
import { Photo } from "@/components/ui/Photo";
import { routes } from "@/config/routes";
export function VirtualCampus() {
  return (
    <section
      className="virtual-campus content-container"
      id="virtual-campus"
      aria-labelledby="virtual-title"
    >
      <div className="virtual-copy">
        <h2 id="virtual-title">Virtual Campus</h2>
        <h3>A classroom experience wherever you are</h3>
        <h4>Live interactive classes with OHLA-certified teachers!</h4>
        <p>
          Our award-winning English program is now available online! Join live
          interactive classes with OHLA specialist teachers using our
          state-of-the-art hybrid platform.
        </p>
        <div className="button-row">
          <Button href={routes.apply}>Apply now</Button>
          <Button href={routes.studyOnline} variant="outline">
            Learn more
          </Button>
        </div>
      </div>
      <figure className="virtual-media">
        <Photo
          name="virtual"
          alt="OHLA Online Campus presentation preview"
          sizes="(max-width:767px) 100vw,45vw"
        />
      </figure>
    </section>
  );
}
