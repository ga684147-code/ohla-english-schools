"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./PartnerOdometer.module.css";

const digits = "200";
const sequence = "0123456789012";

export function PartnerOdometer() {
  const counter = useRef<HTMLElement>(null);
  const [rolling, setRolling] = useState(false);

  useEffect(() => {
    const element = counter.current;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!element || motion.matches || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        observer.disconnect();
        setRolling(!motion.matches);
      }
    }, { threshold: 0.5 });
    observer.observe(element);

    function onMotionChange() {
      if (motion.matches) {
        observer.disconnect();
        setRolling(false);
      }
    }
    motion.addEventListener("change", onMotionChange);
    return () => {
      observer.disconnect();
      motion.removeEventListener("change", onMotionChange);
    };
  }, []);

  return (
    <strong ref={counter}>
      {rolling ? (
        <>
          <span className="sr-only">{digits}+</span>
          <span aria-hidden="true">
            {Array.from(digits, (digit, index) => (
              <span key={index} className={styles.window}>
                <span className={styles.spacer}>{digit}</span>
                <span
                  className={styles.reel}
                  style={{ animationDelay: `${120 + index * 110}ms` }}
                  onAnimationEnd={index === digits.length - 1 ? () => setRolling(false) : undefined}
                >
                  {Array.from(sequence.slice(0, 11 + Number(digit)), (value, row) => (
                    <span key={row}>{value}</span>
                  ))}
                </span>
              </span>
            ))}+
          </span>
        </>
      ) : `${digits}+`}
    </strong>
  );
}
