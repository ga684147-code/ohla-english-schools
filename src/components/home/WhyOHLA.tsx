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

          </article>
        ))}
        <article className={`${styles.accreditation} feature-card`} aria-label="CEA accreditation">
          <span className="feature-icon"><Image src="/images/icon-165-15140.svg" alt="" width={30} height={29} /></span>
          <a className={styles.ceaLink} href="https://www.cea-accredit.org/" target="_blank" rel="noopener noreferrer" aria-label="CEA accreditation">
            <Image className={styles.ceaLogo} src="/images/why-cea.webp" alt="CEA — Leading by Advancing Standards" width={369} height={140} />
          </a>
        </article>
        <article className={`${styles.accreditation} feature-card`} aria-label="SEVIS">
          <span className="feature-icon"><Image src="/images/icon-165-15140.svg" alt="" width={30} height={29} /></span>
          <div className={styles.sevis}>
            <Image src="/images/dhs-logo.webp" alt="U.S. Department of Homeland Security" width={156} height={156} />
            <Image src="/images/sevis-wordmark.webp" alt="SEVIS" width={262} height={84} />
          </div>
        </article>
      </div>
    </section>
  );
}
