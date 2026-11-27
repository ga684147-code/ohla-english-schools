import Image from "next/image";
import { RevealHeading } from "@/components/ui/RevealHeading";
import { Button } from "@/components/ui/Button";
import { routes } from "@/config/routes";
import s from "./ContactBanner.module.css";

export function ContactBanner({ href = routes.apply, titleId = "contact-banner-title" }: { href?: string; titleId?: string }) {
  return <section className={s.banner} aria-labelledby={titleId} data-contact-banner>
    <div className={s.desktopArt} aria-hidden="true">
      <Image src="/images/pref-footer-desktop.webp" alt="" fill sizes="100vw" />
    </div>
    <div className={s.mobileArt} aria-hidden="true">
      <Image className={s.city} src="/images/pref-footer-mobile-city.webp" alt="" width={500} height={328} sizes="100vw" />
      <Image className={s.students} src="/images/pref-footer-mobile-students.webp" alt="" width={500} height={259} sizes="100vw" />
    </div>
    <div className={s.copy}>
      <RevealHeading as="h2" id={titleId}>Ready to start your experience with OHLA?</RevealHeading>
      <p>Talk to our team and find out which program best matches your goals.</p>
      <div className={s.actions}>
        <Button href={href} variant="outline" className={s.advisor}>Talk to an advisor</Button>
        <Button href={routes.whatsapp} variant="whatsapp" className={s.whatsapp}>WhatsApp OHLA</Button>
      </div>
    </div>
  </section>;
}
