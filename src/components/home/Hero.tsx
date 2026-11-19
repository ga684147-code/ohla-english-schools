import { routes } from "@/config/routes";
import { Button } from "@/components/ui/Button";
import { Photo } from "@/components/ui/Photo";
import { Check } from "lucide-react";
export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <Photo
        name="hero"
        alt="OHLA student holding a red OHLA notebook in front of the New York skyline"
        priority
      />
      <div className="hero-content">
        <h1 id="hero-title" className="gradient-text">
          Study English in
          <br className="desktop-break" /> the United States or virtually with
          OHLA
        </h1>
        <p>
          Founded in 1998, OHLA is an award-winning English school in Florida,
          with experience teaching international students and programs that can
          lead students to higher education in the United States.
        </p>
        <div className="hero-actions">
          <Button href="#programs">Discover our programs</Button>
          <Button href={routes.studyOnline} variant="blue">
            Explore the online campus
          </Button>
        </div>
        <ul className="hero-facts">
          {["Since 1998", "70+ nationalities", "200+ partner universities"].map(
            (fact) => (
              <li key={fact}>
                <Check size={13} />
                {fact}
              </li>
            ),
          )}
        </ul>
      </div>
    </section>
  );
}
