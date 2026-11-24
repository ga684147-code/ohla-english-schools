import type { ReactNode } from "react";
import Image from "next/image";
import { VirtualCampusTab } from "@/components/campuses/CampusSections";
import { Photo } from "@/components/ui/Photo";
import { RevealHeading } from "@/components/ui/RevealHeading";
import { CampContact, CampNavigation } from "./CampNavigation";
import overview from "./Overview.module.css";
import s from "./Details.module.css";

type DetailProps = {
  current: string;
  hero: string;
  title: [string, string];
  intro: string;
  children: ReactNode;
};

export function CampDetail({ current, hero, title, intro, children }: DetailProps) {
  return <main id="main" className={`${overview.page} ${s.detail}`} data-camp={hero}>
    <section className={s.hero} aria-labelledby="camp-title">
      <Photo name={`youth-detail-${hero}-hero`} priority />
      <div className={s.heroCopy}>
        <RevealHeading as="h1" id="camp-title"><span className={s.gold}>{title[0]}</span><br />{title[1]}</RevealHeading>
        <p>{intro}</p>
      </div>
    </section>
    <CampNavigation current={current} />
    {children}
    <CampContact />
    <VirtualCampusTab />
  </main>;
}

export function CardPhoto({ name, alt = "" }: { name: string; alt?: string }) {
  return <div className={s.cardPhoto}><Photo name={`youth-detail-${name}`} alt={alt} sizes="(max-width: 760px) 92vw, 30vw" /></div>;
}

export type IconItem = readonly [icon: string, label: string];

export function IconList({ items, className = "" }: { items: readonly IconItem[]; className?: string }) {
  return <ul className={`${s.iconList} ${className}`}>{items.map(([icon, label]) =>
    <li key={label}><Image src={`/images/youth-detail-${icon}.svg`} width={28} height={28} alt="" />{label}</li>
  )}</ul>;
}

export type CampProgram = {
  name: string;
  weeks: number;
  photo: string;
  board: "Residence" | "Homestay";
  section: string;
  items: string[];
  disney?: boolean;
};

export function ProgramCards({ programs, age, city }: { programs: CampProgram[]; age: string; city: string }) {
  return <section className={s.panel} aria-label={`${city} camp programs`}>
    <div className={s.cards}>{programs.map(program =>
      <article key={program.name} className={s.card}>
        <CardPhoto name={program.photo} />
        <div className={s.cardBody}>
          <RevealHeading as="h2" className={s.cardTitle}>{program.name}<span>{program.weeks} weeks</span></RevealHeading>
          <IconList className={s.facts} items={[
            ["calendar", `July 4 – July ${program.weeks === 3 ? "25" : "18"}, 2027`],
            ["users", `Ages ${age}`], ["home", `${program.board} + Full Board`],
          ]} />
          <h3 className={s.divider}>{program.section}</h3>
          {program.disney && <>
            <Image className={s.parkLogos} src="/images/youth-detail-disney-parks.webp" width={408} height={60} alt="Disney’s Animal Kingdom, Magic Kingdom, EPCOT and Disney’s Hollywood Studios" />
            <h4 className={s.workshops}>Exclusive Disney workshops</h4>
          </>}
          <IconList className={s.highlights} items={program.items.map(text => [program.disney ? "medal" : "check", text])} />
        </div>
      </article>
    )}</div>
  </section>;
}

export function CampFeature({ photo, children, label }: { photo: string; children: ReactNode; label: string }) {
  return <section aria-label={label} className={s.feature}>
    <div className={s.featurePhoto}><Photo name={`youth-detail-${photo}`} sizes="92vw" /></div>
    <div className={s.featureCopy}>{children}</div>
  </section>;
}
