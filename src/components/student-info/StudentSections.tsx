import type { ReactNode } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Photo } from "@/components/ui/Photo";
import { RevealHeading } from "@/components/ui/RevealHeading";
import { VirtualCampusTab } from "@/components/campuses/CampusSections";
import { routes } from "@/config/routes";
import s from "./StudentInfo.module.css";

export type StudentCard = { title: string; text: string; icon?: string };
export const advisorForm = routes.contact + "#contact-form";

export function StudentPage({ children }: { children: ReactNode }) {
  return <main id="main" className={s.page}>{children}<VirtualCampusTab /></main>;
}

type HeroProps = {
  variant: "overview" | "students" | "housing" | "visa" | "transfer";
  label: string;
  title: ReactNode;
  text?: ReactNode;
  action: string;
  href: string;
  secondary?: boolean;
};

export function StudentHero({ variant, label, title, text, action, href, secondary }: HeroProps) {
  return <section className={s.hero} data-page={variant} aria-labelledby="student-title">
    <Photo name={`student-info/${variant}-hero`} priority />
    <div className={s.heroInner}>
      <p className={s.heroLabel}>{label}</p>
      <RevealHeading as="h1" id="student-title">{title}</RevealHeading>
      {text && <p className={s.heroText}>{text}</p>}
      <div className={s.heroActions}>
        <Button href={href}>{action}</Button>
        {secondary && <Button variant="outline" href={routes.contact}>Talk to our team</Button>}
      </div>
    </div>
  </section>;
}

export function SectionHeading({ label, children, text }: { label?: string; children: ReactNode; text?: string }) {
  return <header className={s.heading}>
    {label && <p className={s.kicker}>{label}</p>}
    <RevealHeading as="h2">{children}</RevealHeading>
    {text && <p className={s.summary}>{text}</p>}
  </header>;
}

export function InfoIcon({ name }: { name: string }) {
  return <Image className={s.icon} src={`/images/student-info/${name}.svg`} width={48} height={48} alt="" />;
}

export function DarkCards({ items }: { items: StudentCard[] }) {
  return <ul className={s.darkCards}>
    {items.map(item => <li key={item.icon ?? item.title}>
      {item.icon && <InfoIcon name={item.icon} />}
      <h3>{item.title}</h3><p>{item.text}</p>
    </li>)}
  </ul>;
}

export function Steps({ label, title, items }: { label: string; title: string; items: StudentCard[] }) {
  return <section className={s.steps}>
    <SectionHeading label={label}>{title}</SectionHeading>
    <ol>{items.map((item, i) => <li key={item.title}>
      <span className={s.stepNumber} aria-hidden="true">{i + 1}</span>
      <h3>{item.title}</h3><p>{item.text}</p>
    </li>)}</ol>
  </section>;
}

export function Documents({ photo, alt, label, title, text, items }: {
  photo: string; alt: string; label: string; title: string; text: string; items: StudentCard[];
}) {
  return <section className={s.documents}>
    <div className={s.docPhoto}><Photo name={`student-info/${photo}`} alt={alt} sizes="(max-width: 760px) 90vw, 39vw" /></div>
    <div className={s.docCopy}>
      <SectionHeading label={label} text={text}>{title}</SectionHeading>
      <ul>{items.map(item => <li key={item.title}>
        {item.icon && <InfoIcon name={item.icon} />}
        <div><h3>{item.title}</h3><p>{item.text}</p></div>
      </li>)}</ul>
    </div>
  </section>;
}

export function AdvisorBanner({ title, text }: { title: string; text: string }) {
  return <section className={s.advisor}>
    <div><RevealHeading as="h2">{title}</RevealHeading><p>{text}</p></div>
    <Button href={advisorForm}>Talk to an advisor <span aria-hidden="true">→</span></Button>
  </section>;
}
