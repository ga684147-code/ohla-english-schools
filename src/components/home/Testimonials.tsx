"use client";
import { useState } from "react";
import Image from "next/image";
import { countries } from "@/data/home";
export function Testimonials() {
  const [selected, setSelected] = useState(0);
  return (
    <section className="testimonials" aria-labelledby="testimonials-title">
      <div className="testimonial-inner">
        <div className="testimonial-copy">
          <p className="eyebrow">Testimonials</p>
          <h2 id="testimonials-title">What our students say</h2>
          <div
            role="tablist"
            aria-label="Student country"
            aria-orientation="vertical"
          >
            {countries.map((country, index) => (
              <button
                key={country}
                id={`country-${index}`}
                role="tab"
                aria-controls="country-panel"
                aria-selected={index === selected}
                tabIndex={index === selected ? 0 : -1}
                onClick={() => setSelected(index)}
                onKeyDown={(event) => {
                  let next = index;
                  if (event.key === "ArrowDown")
                    next = (index + 1) % countries.length;
                  else if (event.key === "ArrowUp")
                    next = (index + countries.length - 1) % countries.length;
                  else if (event.key === "Home") next = 0;
                  else if (event.key === "End") next = countries.length - 1;
                  else return;
                  event.preventDefault();
                  setSelected(next);
                  document.getElementById(`country-${next}`)?.focus();
                }}
              >
                {country}
              </button>
            ))}
          </div>
        </div>
        <div
          id="country-panel"
          className="testimonial-panel"
          role="tabpanel"
          aria-labelledby={`country-${selected}`}
          tabIndex={0}
        >
          <div className="window-dots" aria-hidden="true">
            <i />
            <i />
            <i />
          </div>
          <div className="country-visual" key={selected}>
            <Image
              src={`/images/test-${["brazil", "colombia", "france", "russia", "saudi", "spain"][selected]}.webp`}
              alt={`${countries[selected]} testimonial media preview`}
              fill
              sizes="(max-width:767px) 85vw,40vw"
            />
          </div>
          <span className="sr-only">
            {countries[selected]} selected. Testimonial media is not provided in
            this design.
          </span>
        </div>
      </div>
    </section>
  );
}
