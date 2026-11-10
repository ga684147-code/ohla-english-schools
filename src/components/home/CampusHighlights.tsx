import { Button } from "@/components/ui/Button";
import { Photo } from "@/components/ui/Photo";
import { routes } from "@/config/routes";
export function CampusHighlights() {
  return (
    <section
      className="campus-highlights wide-container"
      aria-label="Explore OHLA"
    >
      <article className="campus-banner">
        <Photo
          name="campuses"
          alt="Illustrated map of Florida highlighting Miami, Tampa, and Orlando"
          sizes="(max-width:767px) 100vw,50vw"
        />
        <div className="campus-copy">
          <h2>
            Live your
            <br /> experience
            <br /> in Florida
          </h2>
          <Button href={routes.campuses} variant="blue">
            Discover our campuses
          </Button>
        </div>
      </article>
      <article className="level-banner">
        <div className="level-photo">
          <Photo
            name="level-student"
            alt="Smiling student carrying books and a phone"
            sizes="(max-width:767px) 50vw,25vw"
          />
        </div>
        <div className="level-copy">
          <h2>Discover your English level</h2>
          <p>
            Take OHLA&apos;s free test and get a reference of your current level
            before choosing a program.
          </p>
          <Button href={routes.levelTest}>Take the free test</Button>
        </div>
      </article>
    </section>
  );
}
