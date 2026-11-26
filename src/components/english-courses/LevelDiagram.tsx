"use client";

import Image from "next/image";
import { useRef } from "react";
import s from "./Courses.module.css";

const alternative = "Levels 1–4: General English, Basic 1 through Intermediate 2. Levels 5–6: Pre-Academic, Intermediate Plus and Advanced 1. Levels 7–9: Academic English, Advanced 2 through Elite Plus, required for university.";
export function LevelDiagram({ intensive }: { intensive: boolean }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const src = `/images/english-courses/levels${intensive ? "-intensive" : ""}.svg`;
  return <section className={s.diagram} aria-label="English levels and courses">
    <button type="button" className={s.enlarge} aria-haspopup="dialog" onClick={() => dialog.current?.showModal()}>
      <span><Image src="/images/english-courses/zoom.svg" width={32} height={32} alt="" />Click the diagram to enlarge.</span>
      <Image src={src} width={1323} height={222} alt={alternative} />
    </button>
    <dialog ref={dialog} className={s.dialog} aria-label="English levels and courses" onClick={event => {
      if (event.currentTarget === event.target) dialog.current?.close();
    }}>
      <div><button type="button" onClick={() => dialog.current?.close()}>Close</button>
        <div className={s.diagramScroll} tabIndex={0} role="region" aria-label="Enlarged English levels diagram">
          <Image src={src} width={1323} height={222} alt={alternative} />
        </div>
      </div>
    </dialog>
  </section>;
}
