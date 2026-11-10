import { programs } from "@/data/home";
import { Button } from "@/components/ui/Button";
import { Photo } from "@/components/ui/Photo";
export function ProgramCards() {
  return (
    <section
      className="programs wide-container"
      id="programs"
      aria-labelledby="programs-title"
    >
      <div className="section-heading">
        <h2 id="programs-title">
          Find the ideal
          <br /> program for you
        </h2>
        <p>
          Choose your experience according to your goals, availability, and
          academic plans.
        </p>
      </div>
      <div className="program-grid">
        {programs.map((program) => (
          <article className="program-card" key={program.title}>
            <Photo
              name={program.image}
              alt=""
              sizes="(max-width:600px) 100vw,(max-width:1024px) 50vw,25vw"
            />
            <div className="program-overlay" />
            <div className="program-copy">
              <h3>{program.title}</h3>
              <p>{program.description}</p>
              <Button href={program.href} variant="light">
                {program.cta}
              </Button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
