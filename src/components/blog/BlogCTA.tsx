import { RevealHeading } from "@/components/ui/RevealHeading";
import { Photo } from "@/components/ui/Photo";
import { Button } from "@/components/ui/Button";
import { routes } from "@/config/routes";
import styles from "./Blog.module.css";
export function BlogCTA({
  heading = "Contact us for promotional prices.",
  buttonLabel = "Consult now",
  href = routes.contact,
}: {
  heading?: string;
  buttonLabel?: string;
  href?: string;
}) {
  return (
    <section className={styles.cta} aria-labelledby="blog-contact-title">
      <div className={styles.ctaBackdrop} />
      <div className={styles.ctaPhoto}>
        <Photo
          name="contact"
          alt="Students enjoying an afternoon by the waterfront"
          sizes="60vw"
        />
      </div>
      <div className={styles.ctaShade} />
      <div className={styles.ctaCopy}>
        <RevealHeading as="h2" id="blog-contact-title">{heading}</RevealHeading>
        <Button href={href} variant="outline">
          {buttonLabel}
        </Button>
      </div>
    </section>
  );
}
