"use client";

import { useRef, useState } from "react";
import type { FormEvent } from "react";
import { countries, languages } from "@/data/contact";
import styles from "./Contact.module.css";

const interests = [
  "I am an F1 student and I want to transfer to OHLA",
  "I am NOT in the USA and I want to apply for an F1 visa",
  "Online Pathway Program",
  "I am a scholarship student from SEGEPLAN",
  "General or Academic English studies",
  "Private One-to-One Lessons",
  "Gap Year program",
  "Westcliff Programs at OHLA",
];

function CountrySelect() {
  const [value, setValue] = useState("");
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(-1);
  const input = useRef<HTMLInputElement>(null);
  const filtered = countries.filter((c) =>
    c.toLowerCase().includes(value.toLowerCase()),
  );
  function select(country: string) {
    setValue(country);
    setOpen(false);
    input.current?.setCustomValidity("");
  }
  return (
    <div
      className={styles.country}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setOpen(false);
      }}
    >
      <label htmlFor="country">Country of origin *</label>
      <input
        ref={input}
        id="country"
        name="Country of origin"
        required
        autoComplete="off"
        placeholder="Search country..."
        role="combobox"
        aria-autocomplete="list"
        aria-expanded={open}
        aria-controls="country-options"
        aria-activedescendant={
          open && active >= 0 && filtered[active]
            ? `country-${active}`
            : undefined
        }
        value={value}
        onFocus={() => setOpen(true)}
        onChange={(e) => {
          const v = e.target.value;
          setValue(v);
          setOpen(true);
          setActive(-1);
          e.target.setCustomValidity(
            countries.includes(v)
              ? ""
              : "Please select a country from the list.",
          );
        }}
        onKeyDown={(e) => {
          if (e.key === "ArrowDown" || e.key === "ArrowUp") {
            e.preventDefault();
            setOpen(true);
            const next =
              e.key === "ArrowDown"
                ? Math.min(active + 1, filtered.length - 1)
                : Math.max(active - 1, 0);
            setActive(next);
            document
              .getElementById(`country-${next}`)
              ?.scrollIntoView({ block: "nearest" });
          }
          if (e.key === "Enter" && open && active >= 0 && filtered[active]) {
            e.preventDefault();
            select(filtered[active]);
          }
          if (e.key === "Escape") {
            setOpen(false);
            setActive(-1);
          }
        }}
      />
      {open && (
        <ul
          id="country-options"
          role="listbox"
          aria-label="Countries"
          className={styles.options}
        >
          {filtered.map((country, i) => (
            <li
              key={country}
              id={`country-${i}`}
              role="option"
              aria-selected={value === country}
              className={active === i ? styles.activeOption : ""}
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => select(country)}
            >
              {country}
            </li>
          ))}
          {!filtered.length && <li role="presentation">No countries found</li>}
        </ul>
      )}
    </div>
  );
}

function SelectField({
  label,
  options,
  placeholder = "Select an option",
  required = false,
}: {
  label: string;
  options: readonly string[];
  placeholder?: string;
  required?: boolean;
}) {
  const id = label.toLowerCase().replace(/[^a-z]+/g, "-");
  return (
    <div className={styles.field}>
      <label htmlFor={id}>
        {label}
        {required && " *"}
      </label>
      <select name={label} id={id} required={required} defaultValue="">
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </div>
  );
}

export function ContactForm() {
  const [selected, setSelected] = useState<string[]>([]);
  const [prepared, setPrepared] = useState(false);
  const firstCheckbox = useRef<HTMLInputElement>(null);
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!selected.length) {
      firstCheckbox.current?.setCustomValidity(
        "Please choose at least one area of interest.",
      );
      firstCheckbox.current?.reportValidity();
      return;
    }
    const data = new FormData(e.currentTarget);
    const lines = [...data.entries()]
      .filter(([key]) => key !== "Interests")
      .map(([key, value]) => `${key}: ${value || "Not provided"}`);
    lines.push(`Interests: ${selected.join("; ")}`);
    const subject = `OHLA inquiry — ${data.get("First name")} ${data.get("Last name")}`;
    window.location.href = `mailto:info@ohla.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
    setPrepared(true);
  }
  return (
    <section
      id="contact-form"
      className={styles.formCard}
      aria-labelledby="contact-form-title"
    >
      <div className={styles.formHeading}>
        <p>CONTACT OHLA</p>
        <h2 id="contact-form-title">
          Please provide the following information
        </h2>
        <span>* indicates required fields</span>
      </div>
      <form className={styles.form} onSubmit={submit}>
        <div className={styles.pair}>
          <div className={styles.field}>
            <label htmlFor="first-name">First name *</label>
            <input
              id="first-name"
              name="First name"
              placeholder="Your first name"
              autoComplete="given-name"
              required
              maxLength={50}
            />
          </div>
          <div className={styles.field}>
            <label htmlFor="last-name">Last name *</label>
            <input
              id="last-name"
              name="Last name"
              placeholder="Your last name"
              autoComplete="family-name"
              required
              maxLength={50}
            />
          </div>
        </div>
        <div className={styles.field}>
          <label htmlFor="email">Email *</label>
          <input
            id="email"
            type="email"
            name="Email"
            placeholder="you@example.com"
            autoComplete="email"
            required
            maxLength={100}
          />
        </div>
        <div className={styles.pair}>
          <div className={styles.field}>
            <label htmlFor="phone">Phone number *</label>
            <input
              id="phone"
              type="tel"
              name="Phone number"
              placeholder="+1 (___) ___-____"
              autoComplete="tel"
              required
              minLength={7}
              maxLength={30}
              pattern="[+0-9() .\-]{7,30}"
              title="Enter your phone number with the country code, using digits, spaces, +, parentheses or hyphens."
            />
          </div>
          <div className={styles.field}>
            <label htmlFor="promo">Promo code</label>
            <input
              id="promo"
              name="Promo code"
              placeholder="Optional"
              maxLength={80}
            />
          </div>
        </div>
        <SelectField
          label="OHLA Campus you would like to attend"
          required
          placeholder="Select a campus"
          options={["Miami", "Aventura", "Boca Raton", "Orlando", "Tampa"]}
        />
        <fieldset className={styles.interests}>
          <legend>What are you most interested in? *</legend>
          <p>Choose the options that most apply to you</p>
          <div>
            {interests.map((interest, i) => (
              <label key={interest}>
                <input
                  ref={i === 0 ? firstCheckbox : undefined}
                  type="checkbox"
                  name="Interests"
                  value={interest}
                  checked={selected.includes(interest)}
                  onChange={(e) => {
                    setSelected((prev) =>
                      e.target.checked
                        ? [...prev, interest]
                        : prev.filter((x) => x !== interest),
                    );
                    firstCheckbox.current?.setCustomValidity("");
                    setPrepared(false);
                  }}
                />
                <span>{interest}</span>
              </label>
            ))}
          </div>
        </fieldset>
        <div className={styles.pair}>
          <SelectField label="Preferred language" options={languages} />
          <CountrySelect />
        </div>
        <SelectField
          label="How did you hear about us?"
          options={["Friends", "Google", "Instagram/Facebook", "Site", "Other"]}
        />
        <SelectField
          label="Is an agency or visa company already assisting you in contacting OHLA Schools?"
          options={["Yes", "No"]}
        />
        <button className={styles.send} type="submit">
          SEND MY REQUEST <span aria-hidden="true">→</span>
        </button>
        <p className={styles.deliveryNote}>
          Opens your email app with your request. Confirm sending there, or use
          the{" "}
          <a
            href="https://www.ohla.com/contactus/"
            target="_blank"
            rel="noreferrer"
          >
            official OHLA form
          </a>
          .
        </p>
        {prepared && (
          <p role="status" className={styles.status}>
            Your email draft is ready. This website has not sent your
            information. If your email app did not open, use the official OHLA
            form above.
          </p>
        )}
      </form>
    </section>
  );
}
