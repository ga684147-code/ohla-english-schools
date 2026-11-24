import Image from "next/image";
import Link from "next/link";
import { iconMenus } from "@/data/menus";
import { RevealHeading } from "@/components/ui/RevealHeading";
import { Photo } from "@/components/ui/Photo";
import { Button } from "@/components/ui/Button";
import styles from "./Overview.module.css";

export function CampNavigation({ current }: { current: string }) {
  return <nav id="camp-programs" className={styles.nav} aria-label="Youth camp pages">
      {iconMenus.youth.map(item => <Link key={item.href} href={item.href} aria-current={item.href === current ? "page" : undefined}>
        <span><Image src={`/images/menu/${item.icon}.svg`} width={44} height={44} alt="" /></span>{item.label}
      </Link>)}
    </nav>;
}

export function CampContact() {
  return <section className={styles.contact} aria-labelledby="camp-contact">
      <div className={styles.contactPhoto}><Photo name="youth-camp/contact" sizes="65vw" /></div>
      <div className={styles.contactCopy}>
        <RevealHeading as="h2" id="camp-contact">Ready for youth <span>camp 2027?</span></RevealHeading>
        <p>Let’s plan your group’s Florida adventure.</p>
        <p>For information and pricing, contact <a href="mailto:camps@ohla.com">camps@ohla.com</a> with your destination, arrival date, group size, number of leaders, and students’ age range. We’ll be happy to create a personalized quote for your group!</p>
      </div>
      <Button href="mailto:camps@ohla.com" variant="light">Contact camps@ohla.com ↗</Button>
    </section>;
}
