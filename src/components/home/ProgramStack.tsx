"use client";

import { useEffect, useRef, type ReactNode } from "react";
import styles from "./ProgramCards.module.css";

export function ProgramStack({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = ref.current;
    if (!grid) return;
    const cards = Array.from(grid.querySelectorAll<HTMLElement>("article"));
    const media = matchMedia("(max-width: 767px) and (prefers-reduced-motion: no-preference)");
    let frame = 0;
    let visible = false;

    function update() {
      frame = 0;
      if (!grid || !media.matches) return;
      const gap = parseFloat(getComputedStyle(grid).rowGap);
      let naturalTop = grid.getBoundingClientRect().top;
      const viewport = document.documentElement.clientHeight;
      const values = cards.map((card, index) => {
        const height = card.offsetHeight;
        // In short viewports let the bottom of a tall card come into view before pinning it.
        const top = Math.min(100 + index * 8, viewport - height - 12);
        const progress = index === cards.length - 1 ? 0 :
          Math.min(1, Math.max(0, (top - naturalTop) / (height + gap)));
        naturalTop += height + gap;
        return { top, progress };
      });
      cards.forEach((card, i) => {
        card.style.setProperty("--pin", values[i].top + "px");
        card.style.setProperty("--scale", String(1 - values[i].progress * 0.1));
        card.style.setProperty("--brightness", String(1 - values[i].progress * 0.5));
      });
    }
    function schedule() {
      if (media.matches && visible && !frame) frame = requestAnimationFrame(update);
    }
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      schedule();
    }, { rootMargin: "100px" });
    observer.observe(grid);
    const sizes = new ResizeObserver(schedule);
    sizes.observe(grid);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    media.addEventListener("change", schedule);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      sizes.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      media.removeEventListener("change", schedule);
    };
  }, []);

  return <div ref={ref} className={`program-grid ${styles.stack}`}>{children}</div>;
}
