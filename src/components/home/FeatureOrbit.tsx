"use client";

import { useEffect, useRef, type ReactNode } from "react";
import styles from "./WhyOHLA.module.css";

export function FeatureOrbit({ children, labels }: { children: ReactNode; labels: string[] }) {
  const track = useRef<HTMLDivElement>(null);
  const scene = useRef<HTMLDivElement>(null);

  function goTo(index: number) {
    const root = track.current;
    const frame = scene.current;
    if (!root || !frame || !root.hasAttribute("data-orbit")) return;
    const start = window.scrollY + root.getBoundingClientRect().top - parseFloat(getComputedStyle(frame).top);
    window.scrollTo({ top: start + index * (root.offsetHeight - frame.offsetHeight) / (labels.length - 1), behavior: "instant" });
  }

  useEffect(() => {
    const root = track.current;
    const frame = scene.current;
    if (!root || !frame) return;
    const cards = Array.from(frame.querySelectorAll("article"));
    const marks = Array.from(frame.querySelectorAll("button"));
    const media = matchMedia("(max-width: 767px) and (prefers-reduced-motion: no-preference)");
    let raf = 0;
    function draw() {
      raf = 0;
      if (!root || !frame || !media.matches) return;
      const travel = root.offsetHeight - frame.offsetHeight;
      const distance = parseFloat(getComputedStyle(frame).top) - root.getBoundingClientRect().top;
      const position = Math.max(0, Math.min(1, distance / Math.max(1, travel))) * (cards.length - 1);
      cards.forEach((card, i) => {
        card.style.setProperty("--angle", ((i - position) * 30) + "deg");
        card.style.visibility = Math.abs(i - position) < 1.6 ? "visible" : "hidden";
        marks[i].setAttribute("aria-current", String(i === Math.round(position)));
      });
    }
    function schedule() {
      if (media.matches && !raf) raf = requestAnimationFrame(draw);
    }
    function configure() {
      root!.toggleAttribute("data-orbit", media.matches);
      if (media.matches) draw();
      else cards.forEach(card => { card.style.removeProperty("visibility"); card.style.removeProperty("--angle"); });
    }
    configure();
    media.addEventListener("change", configure);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(raf);
      media.removeEventListener("change", configure);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);
  return <div ref={track} className={styles.track}>
    <div ref={scene} className={styles.scene}>
      <div className="feature-grid">{children}</div>
      <div className={styles.dial} role="group" aria-label="Explore OHLA highlights">
        {labels.map((label, i) => <button key={label} type="button" aria-label={label} onClick={() => goTo(i)} />)}
      </div>
    </div>
  </div>;
}
