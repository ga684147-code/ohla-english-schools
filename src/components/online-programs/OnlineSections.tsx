import type { ReactNode } from "react";
import Image from "next/image";
import { BlogCTA } from "@/components/blog/BlogCTA";
import { VirtualCampusTab } from "@/components/campuses/CampusSections";
import { Photo } from "@/components/ui/Photo";
import { Button } from "@/components/ui/Button";
import { RevealHeading } from "@/components/ui/RevealHeading";
import { routes } from "@/config/routes";
import s from "./Online.module.css";

export type OnlineProgram = "group" | "private" | "business" | "pathway" | "exam";
export type Feature = [icon: string, text: string];

export function OnlinePage({ children, promo, href }: { children: ReactNode; promo?: string; href?: string }) {
  return <main id="main" className={s.page}>
    {children}
    {promo && <BlogCTA href={href} />}
    <VirtualCampusTab />
  </main>;
}

export function OnlineHero({ program, title, children, action = "Contact Us", href = routes.contact }: {
  program: OnlineProgram; title: ReactNode; children?: ReactNode; action?: string; href?: string;
}) {
  return <section className={s.hero} data-program={program} aria-labelledby="program-title">
    <Photo name={`online-programs/${program}-hero`} priority />
    <div className={s.heroCopy}>
      <RevealHeading as="h1" id="program-title">{title}</RevealHeading>
      {children}
      <Button href={href}>{action}</Button>
    </div>
  </section>;
}

export function ProgramIcon({ name }: { name: string }) {
  return <Image className={s.icon} src={`/images/online-programs/${name}.svg`} width={30} height={30} alt="" />;
}

export function FeatureCards({ items, label }: { items: Feature[]; label: string }) {
  return <ul className={s.features} aria-label={label}>{items.map(([icon, text]) =>
    <li key={icon}><span><ProgramIcon name={icon} /></span><p>{text}</p></li>)}</ul>;
}
