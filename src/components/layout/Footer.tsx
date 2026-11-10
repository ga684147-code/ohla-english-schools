import Image from "next/image";
import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { routes } from "@/config/routes";
const groups = [
  {
    title: "Links",
    links: [
      ["Home", routes.home],
      ["Study Online", routes.studyOnline],
      ["Campuses", routes.campuses],
      ["International Students", routes.internationalStudents],
    ],
  },
  {
    title: "Programs",
    links: [
      ["English Program", routes.englishPrograms],
      ["Gap Year", routes.gapYear],
      ["University Pathway", routes.universityPathway],
    ],
  },
  {
    title: "Institutional",
    links: [
      ["About us", routes.about],
      ["Blog", routes.blog],
      ["Contact", routes.contact],
    ],
  },
  {
    title: "Contacts",
    links: [
      ["+1-305-379-4027", "tel:+13053794027"],
      ["+1-305-379-7259", "tel:+13053797259"],
    ],
  },
  { title: "Legal", links: [["Privacy Policy", routes.privacy]] },
];
const socials = [
  ["Facebook", "165-14467", 16, 16],
  ["TikTok", "165-14469", 18, 20],
  ["Instagram", "165-14471", 16, 16],
  ["LinkedIn", "165-14473", 19.06, 18],
  ["X", "165-14475", 19.78, 17.88],
  ["Flickr", "165-14477", 22, 10],
] as const;
export function Footer() {
  return (
    <footer className="site-footer" id="footer">
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
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" aria-label="OHLA home">
              <Image
                src="/images/logo.webp"
                width={277}
                height={262}
                alt="OHLA English Schools"
              />
            </Link>
            <p>
              Learn English, enjoy an international experience, and prepare for
              new academic opportunities in the United States.
            </p>
          </div>
          <div className="footer-links">
            {groups.map((group) => (
              <div key={group.title}>
                <h2>{group.title}</h2>
                <ul>
                  {group.links.map(([label, href]) => (
                    <li key={label}>
                      <Link href={href}>{label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="headquarters">
              <h2>Headquarters</h2>
              <address>
                825 Brickell Bay Drive, Suite 1850, Miami, FL 33131
              </address>
            </div>
            <a href="#top" className="back-top" aria-label="Back to top">
              <ArrowUp size={22} />
            </a>
          </div>
        </div>
      </div>
      <div className="copyright">© Copyright OHLA ENGLISH SCHOOLS 2026</div>
    </footer>
  );
}
