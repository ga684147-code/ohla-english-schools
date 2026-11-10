import Image from "next/image";
import { features } from "@/data/home";
export function WhyOHLA() {
  return (
    <section className="why-ohla content-container" aria-labelledby="why-title">
      <div className="section-heading">
        <h2 className="gradient-text" id="why-title">
          Why study at OHLA?
        </h2>
        <p>
          An international experience that combines English learning, student
          support, and academic opportunities in the United States.
        </p>
      </div>
      <div className="feature-grid">
        {features.map((feature, index) => (
          <article className="feature-card" key={feature.title}>
            <div className="feature-icons">
              <span className="feature-icon">
                <Image
                  src={`/images/icon-${feature.icon}.svg`}
                  alt=""
                  width={feature.width}
                  height={feature.height}
                />
              </span>
              {index === 1 && (
                <Image
                  className="nationality-flags"
                  src="/images/feature-flags.webp"
                  alt=""
                  width={111}
                  height={34}
                />
              )}
            </div>
            <h3>{feature.title}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}
