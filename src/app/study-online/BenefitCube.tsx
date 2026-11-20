"use client";

import { useEffect, useRef, type ReactNode } from "react";
import styles from "./Campus.module.css";

export function BenefitCube({ children }: { children: ReactNode }) {
  const sectionRef = useRef<HTMLElement>(null);
  const sceneRef = useRef<HTMLDivElement>(null);
  const wheelRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const scene = sceneRef.current;
    const wheel = wheelRef.current;
    if (!section || !scene || !wheel) return;
    const faces = Array.from(wheel.children) as HTMLLIElement[];
    const step = 360 / faces.length;
    faces.forEach((face, index) => face.style.setProperty("--face-angle", index * step + "deg"));
    const motion = matchMedia("(prefers-reduced-motion: reduce)");
    const header = document.querySelector(".site-header");
    let inset = 0, travel = 0, frame = 0;

    function update() {
      frame = 0;
      if (!travel || !section || !wheel) return;
      const progress = Math.max(0, Math.min(1, (inset - section.getBoundingClientRect().top) / travel));
      const position = progress * (faces.length - 1);
      const fraction = position % 1;
      // Hold the card facing forward, then ease into the next turn.
      const t = Math.max(0, Math.min(1, (fraction - .19) / .62));
      const turn = Math.floor(position) + t * t * (3 - 2 * t);
      wheel.style.setProperty("--turn", -step * turn + "deg");
      wheel.style.setProperty("--tilt", -5 * Math.sin(Math.PI * t) + "deg");
    }

    function configure() {
      if (!section || !scene || !wheel) return;
      travel = 0;
      delete section.dataset.cube;
      if (motion.matches || faces.length < 3) return;
      inset = Math.max(0, header?.getBoundingClientRect().bottom ?? 0) + 10;
      section.style.setProperty("--inset", inset + "px");
      section.dataset.cube = "active";
      if (scene.offsetHeight + inset > window.innerHeight) {
        delete section.dataset.cube;
        return;
      }
      const depth = wheel.offsetWidth / (2 * Math.tan(Math.PI / faces.length));
      wheel.style.setProperty("--depth", depth + "px");
      travel = (faces.length - 1) * Math.max(340, (window.innerHeight - inset) * .74);
      section.style.setProperty("--travel", travel + "px");
      update();
    }

    function onScroll() {
      if (travel && !frame) frame = requestAnimationFrame(update);
    }

    const resize = new ResizeObserver(configure);
    if (header) resize.observe(header);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", configure);
    motion.addEventListener("change", configure);
    document.fonts.addEventListener("loadingdone", configure);
    configure();
    return () => {
      cancelAnimationFrame(frame);
      resize.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", configure);
      motion.removeEventListener("change", configure);
      document.fonts.removeEventListener("loadingdone", configure);
      delete section.dataset.cube;
    };
  }, []);

  return <section className={styles.benefits} ref={sectionRef} aria-labelledby="benefits-title">
    <div ref={sceneRef} className={styles.scene}>
      <h2 id="benefits-title">OHLA Virtual Campus is not your average online English course!</h2>
      <p className={styles.intro}>See why:</p>
      <div className={styles.stage}><ul ref={wheelRef}>{children}</ul></div>
    </div>
  </section>;
}
