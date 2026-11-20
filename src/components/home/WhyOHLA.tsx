import { RevealHeading } from "@/components/ui/RevealHeading";
import styles from "./WhyOHLA.module.css";
import Image from "next/image";
import { features } from "@/data/home";
export function WhyOHLA() {
  return (
    <section id="why-ohla" className={`${styles.section} why-ohla content-container`} aria-labelledby="why-title">
      <div className="section-heading">
        <RevealHeading as="h2" className="gradient-text" id="why-title">
          Why study at OHLA?
        </RevealHeading>
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
            {feature.icon === "165-15140" && <a className={styles.ceaLink} href="https://www.cea-accredit.org/" target="_blank" rel="noopener noreferrer" aria-label="CEA accreditation — opens in a new tab"><Image className={styles.ceaLogo} src="/images/cea-logo.webp" alt="CEA — Leading by Advancing Standards" width={148} height={59}/></a>}
          </article>
        ))}
      </div>
    </section>
  );
}
