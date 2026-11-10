import { Photo } from "@/components/ui/Photo";
export function InternationalExperience() {
  return (
    <section className="international" aria-labelledby="international-title">
      <Photo
        name="international"
        alt="Colorful OHLA lifeguard tower on a sunny Florida beach"
      />
      <div className="international-copy">
        <h2 id="international-title" className="gradient-text">
          A truly
          <br /> international
          <br /> experience
        </h2>
        <p>
          OHLA welcomes students from more than <strong>70 countries</strong>,
          creating a multicultural environment to learn English and experience
          different cultures.
        </p>
      </div>
    </section>
  );
}
