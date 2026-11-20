import { RevealHeading } from "@/components/ui/RevealHeading";
import type { Metadata } from "next";
import Image from "next/image";
import { Photo } from "@/components/ui/Photo";
import { BlogCTA } from "@/components/blog/BlogCTA";
import { ContactForm } from "@/components/contact/ContactForm";
import { routes } from "@/config/routes";
import styles from "@/components/contact/Contact.module.css";

export const metadata: Metadata = {
  title: "Contact Us | OHLA English Schools",
  description:
    "Contact OHLA to learn about English programs, university pathways and our Florida campuses in Miami, Orlando and Tampa.",
};
const campuses = [
  {
    name: "Miami Brickell",
    image: "miami",
    address: "825 Brickell Bay Drive, Suite 1850, Miami, FL 33131",
    description:
      "The OHLA Miami campus is located in the Four Ambassadors complex, just one block from Mary Brickell Village and Brickell City Center. Brickell is Miami's famous financial district and offers a variety of luxury condos, shops, and restaurants.",
  },
  {
    name: "Celebration, Orlando",
    image: "orlando",
    address: "715 Bloom Street, Suite 200, Celebration, FL 34747.",
    description:
      "The OHLA campus in Celebration is located in the heart of the picturesque town of Celebration, just a few miles from the Disney parks.",
  },
  {
    name: "Tampa",
    image: "tampa",
    address: "6800 N Dale Mabry Hwy, Suite 124, Tampa, FL 33614.",
    description:
      "Our campus is located near downtown Tampa and the international airport. Tampa is the economic hub of western Florida and is known for its beaches, professional sports teams, and tourist attractions, especially Busch Gardens, where you can enjoy the thrill of an amusement park and the fun of a zoo all in one place.",
  },
];
const socials = [
  ["Facebook", "165-14467", 16, 16, "https://www.facebook.com/ohlaschools"],
  ["TikTok", "165-14469", 18, 20, "https://www.tiktok.com/@ohlaschools"],
  ["Instagram", "165-14471", 16, 16, "https://www.instagram.com/ohlaschools/"],
  [
    "LinkedIn",
    "165-14473",
    19,
    18,
    "https://www.linkedin.com/company/10806967",
  ],
  ["X", "165-14475", 20, 18, "https://twitter.com/OHLASchools"],
  [
    "Flickr",
    "165-14477",
    22,
    10,
    "https://www.flickr.com/photos/90596775@N02/albums",
  ],
] as const;
export default function ContactPage() {
  return (
    <main id="main" className={styles.page}>
      <div className={styles.heroBackdrop} aria-hidden="true">
        <div className={styles.heroPhoto}>
          <Photo name="contact-hero" priority />
        </div>
        <div className={styles.heroShade} />
      </div>
      <div className={styles.content}>
        <section className={styles.intro} aria-labelledby="contact-title">
          <div className={styles.title}>
            <Image
              src="/images/contact-call.webp"
              alt=""
              width={54}
              height={54}
            />
            <RevealHeading as="h1" id="contact-title">Contact Us</RevealHeading>
          </div>
          <p className={styles.description}>
            Do you have questions about our English programs or need information
            about OHLA Schools?
          </p>
          <div className={styles.details}>
            <a href="mailto:info@ohla.com">
              <Image
                src="/images/contact-email.webp"
                alt=""
                width={18}
                height={15}
              />
              info@ohla.com
            </a>
            <a href="tel:+13053794027">
              <Image
                src="/images/contact-phone.webp"
                alt=""
                width={18}
                height={19}
              />
              +1-305-379-4027
            </a>
            <a href="tel:+13053797259">
              <Image
                src="/images/contact-phone.webp"
                alt=""
                width={18}
                height={19}
              />
              +1-305-379-7259
            </a>
            <address>
              <Image
                src="/images/contact-location.webp"
                alt=""
                width={18}
                height={22}
              />
              825 Brickell Bay Drive, Suite 1850, Miami, FL 33131
            </address>
          </div>
          <p className={styles.follow}>Follow us on social media</p>
          <div className={styles.socials}>
            {socials.map(([label, icon, width, height, href]) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={`OHLA on ${label}`}
              >
                <Image
                  src={`/images/icon-${icon}.svg`}
                  alt=""
                  width={width}
                  height={height}
                />
              </a>
            ))}
          </div>
        </section>
        <ContactForm />
        <section className={styles.campuses} aria-label="Our Florida campuses">
          {campuses.map((campus) => (
            <article key={campus.name} className={styles.campus}>
              <div className={styles.campusPhoto}>
                <Photo
                  name={`contact-${campus.image}`}
                  alt={`Inside the OHLA ${campus.name} campus`}
                  sizes="(max-width: 600px) 90vw, 300px"
                />
              </div>
              <div className={styles.campusCopy}>
                <RevealHeading as="h2">{campus.name}</RevealHeading>
                <address>{campus.address}</address>
                <p>{campus.description}</p>
              </div>
            </article>
          ))}
        </section>
      </div>
      <BlogCTA buttonLabel="Contact us now" href="#contact-form" />
      <a className="virtual-tab" href={routes.studyOnline}>
        Virtual Campus
      </a>
    </main>
  );
}
