import styles from "./Contact.module.css";

const crmFormUrl = "https://ohlaconnect.com/webform/33";

export function ContactForm() {
  return (
    <section
      id="contact-form"
      className={styles.formCard}
      aria-labelledby="contact-form-title"
    >
      <div className={styles.formHeading}>
        <h2 id="contact-form-title">Contact OHLA</h2>
        <a href={crmFormUrl} target="_blank" rel="noopener noreferrer">
          Open the contact form in a new tab
        </a>
      </div>
      <iframe
        className={styles.crmFrame}
        src={crmFormUrl}
        title="OHLA Connect contact form"
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </section>
  );
}
