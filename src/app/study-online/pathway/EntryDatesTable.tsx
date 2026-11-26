"use client";

import { useEffect, useRef, type ReactNode } from "react";
import styles from "@/components/online-programs/Online.module.css";

export function EntryDatesTable({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLTableElement>(null);
  useEffect(() => {
    const table = ref.current;
    if (!table || !window.IntersectionObserver) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        table.dataset.reveal = "true";
      }
      observer.disconnect();
    });
    observer.observe(table);
    return () => observer.disconnect();
  }, []);
  return (
    <table className={styles.dates} ref={ref}>
      {children}
    </table>
  );
}
