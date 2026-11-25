import Image from "next/image";
import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { routes } from "@/config/routes";
import { navigation } from "@/config/navigation";
import { programMenu } from "@/data/menus";
import styles from "./Footer.module.css";
const socials = [
  ["Facebook", "165-14467", 16, 16],
  ["TikTok", "165-14469", 18, 20],
  ["Instagram", "165-14471", 16, 16],
  ["LinkedIn", "165-14473", 19.06, 18],
  ["X", "165-14475", 19.78, 17.88],
  ["Flickr", "165-14477", 22, 10],
] as const;
const titleCase = (label: string) =>
  label.toLowerCase().replace(/\b\w/g, (c) => c.toUpperCase());
const categories = navigation.filter((item) => item.panel);
const moreLinks = [
  { label: "Home", href: routes.home },
  { label: "About us", href: routes.about },
  { label: "Blog", href: routes.blog },
  { label: "Contact", href: routes.contact },
  { label: "Apply now", href: routes.apply },
  { label: "English level test", href: routes.levelTest },
];
export function Footer() {
  return (
    <footer className={`site-footer ${styles.footer}`} id="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div>
            <p>Follow us on social media</p>
            <div className="social-links">
              {socials.map(([label, icon, width, height]) => (
                <Link
                  href={`/contact?social=${label.toLowerCase()}`}
                  aria-label={`${label} — contact OHLA for the official profile`}
                  key={label}
                >
                  <Image
                    src={`/images/icon-${icon}.svg`}
                    alt=""
                    width={width}
                    height={height}
                  />
                </Link>
              ))}
            </div>
          </div>
          <Button href={routes.contact}>Talk to our team</Button>
        </div>
        <div className={styles.identity}>
          <Link className={styles.logo} href="/" aria-label="OHLA home">
            <Image
              src="/images/logo.webp"
              width={150}
              height={142}
              alt="OHLA English Schools"
            />
          </Link>
          <p className={styles.description}>
            Learn English, enjoy an international experience, and prepare for
            new academic opportunities in the United States.
          </p>
          <div className={styles.contact}>
            <h2>Contact us</h2>
            <a href="tel:+13053794027">+1-305-379-4027</a>
            <a href="tel:+13053797259">+1-305-379-7259</a>
          </div>
          <div className={styles.address}>
            <h2>Headquarters</h2>
            <address>
              825 Brickell Bay Drive, Suite 1850,
              <br />
              Miami, FL 33131
            </address>
          </div>
        </div>
        <nav className={styles.sitemap} aria-label="Footer navigation">
          {categories.map((category) => (
            <section
              className={
                category.panel === "programs"
                  ? styles.programs
                  : styles.category
              }
              key={category.label}
              aria-labelledby={`footer-${category.panel}`}
            >
              <h2 id={`footer-${category.panel}`}>
                <Link href={category.href}>{category.label}</Link>
              </h2>
              {category.panel === "programs" ? (
                <div className={styles.programGroups}>
                  {programMenu.groups.filter(group => group.href !== routes.gapYear).map((group) => (
                    <div className={styles.programGroup} key={group.href}>
                      <h3>
                        <Link href={group.href}>{titleCase(group.title)}</Link>
                      </h3>
                      {group.links.length > 0 && (
                        <ul>
                          {(group.href === routes.universityPathway ? [...group.links, { label: "GAP Year", href: routes.gapYear }] : group.links).map((link) => (
                            <li key={link.href}>
                              <Link href={link.href}>{link.label}</Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <ul>
                  {category.children?.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href}>
                        {category.panel === "campuses"
                          ? titleCase(link.label)
                          : link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </nav>
        <div className={styles.bottomLinks}>
          <nav aria-label="Institutional and quick links">
            <span className={styles.moreLabel}>More links</span>
            <ul>
              {moreLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <a href="#top" className={styles.backTop} aria-label="Back to top">
            <ArrowUp size={20} aria-hidden="true" />
          </a>
        </div>
      </div>
      <div className={styles.legal}>
        <span>© Copyright OHLA ENGLISH SCHOOLS 2026</span>
        <Link href={routes.privacy}>Privacy Policy</Link>
      </div>
    </footer>
  );
}
