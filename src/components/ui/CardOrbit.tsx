"use client";

import { RevealHeading } from "@/components/ui/RevealHeading";
import { useEffect, useRef, type ReactNode } from "react";
import styles from "./CardOrbit.module.css";

type CardOrbitProps = {
  children: ReactNode;
  title: string;
  titleId: string;
  subtitle: string;
  className: string;
  listClassName?: string;
  subtitleClassName: string;
};

export function CardOrbit({ children, title, titleId, subtitle, className, listClassName = "", subtitleClassName }: CardOrbitProps) {
  const sceneRef = useRef<HTMLDivElement>(null);
  const root = useRef<HTMLElement>(null);
  const list = useRef<HTMLUListElement>(null);
  const intro = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = root.current;
    const wheel = list.current;
    const heading = intro.current;
    if (!section || !wheel || !heading || wheel.children.length < 2) return;

    const cards = Array.from(wheel.children) as HTMLLIElement[];
    cards.forEach((card, i) => card.style.setProperty("--index", String(i)));
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const header = document.querySelector(".site-header");
    let inset = 0, travel = 0, step = 30, frame = 0;
    let visible = true;

    function update() {
      frame = 0;
      if (!travel || !section) return;
      const progress = Math.max(0, Math.min(1, (inset - section.getBoundingClientRect().top) / travel));
      const turn = -step * (cards.length - 1) * progress;
      section.style.setProperty("--turn", turn + "deg");
      section.style.setProperty("--dial-turn", turn * .3 + "deg");
      section.style.setProperty("--lit", (136 + 136 * progress) + "deg");
    }

    function configure() {
      const scene = sceneRef.current;
      if (!section || !heading || !scene) return;
      inset = Math.max(0, header?.getBoundingClientRect().bottom ?? 0) + 10;
      travel = 0;
      delete section.dataset.orbit;
      if (preference.matches) return;

      step = section.clientWidth < 810 ? 34 : 30;
      section.style.setProperty("--inset", inset + "px");
      section.style.setProperty("--step", step + "deg");
      section.dataset.orbit = "active";
      section.style.removeProperty("--height");
      section.style.removeProperty("--intro-height");
      const height = Math.max(...cards.map(card => Math.max(card.offsetHeight, card.scrollHeight)));
      const available = scene.clientHeight;
      if (heading.offsetHeight + height + 55 > available) {
        delete section.dataset.orbit;
        return;
      }
      const half = step * Math.PI / 360;
      const radius = height / 2 + (cards[0].offsetWidth * Math.cos(half) + 28) / (2 * Math.sin(half));
      travel = (cards.length - 1) * Math.max(400, window.innerHeight * .72);
      section.style.setProperty("--intro-height", heading.offsetHeight + "px");
      section.style.setProperty("--height", height + "px");
      section.style.setProperty("--radius", radius + "px");
      section.style.setProperty("--travel", travel + "px");
      update();
    }

    function onScroll() {
      if (visible && travel && !frame) frame = requestAnimationFrame(update);
    }
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) onScroll();
    }, { rootMargin: "100px" });
    observer.observe(section);
    const resize = new ResizeObserver(configure);
    if (header) resize.observe(header);
    window.addEventListener("resize", configure);
    window.addEventListener("scroll", onScroll, { passive: true });
    preference.addEventListener("change", configure);
    document.fonts.addEventListener("loadingdone", configure);
    configure();
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      resize.disconnect();
      preference.removeEventListener("change", configure);
      document.fonts.removeEventListener("loadingdone", configure);
      window.removeEventListener("resize", configure);
      window.removeEventListener("scroll", onScroll);
      delete section.dataset.orbit;
    };
  }, []);

  return <section ref={root} className={`${styles.orbit} ${className}`} aria-labelledby={titleId}>
    <div ref={sceneRef} className={styles.scene}>
      <div ref={intro} className={styles.orbitIntro}>
        <RevealHeading as="h2" id={titleId}>{title}</RevealHeading>
        <p className={subtitleClassName}>{subtitle}</p>
      </div>
      <div className={styles.stage}>
        <ul ref={list} className={`${styles.wheel} ${listClassName}`}>{children}</ul>
        <div aria-hidden="true" className={styles.dial} />
      </div>
    </div>
  </section>;
}
