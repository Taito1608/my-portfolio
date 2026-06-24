import Container from "@/components/layout/Container/Container";
import styles from "./Contact.module.scss";

export default function Contact() {
  return (
    <section
      id="contact"
      className={styles.contact}
    >
      <Container>
        <h2 className={styles.heading}>
          Contact
        </h2>

        <div className={styles.card}>
          <p className={styles.catch}>
            お気軽にご連絡ください。
          </p>

          <p className={styles.description}>
            制作のご相談や共同開発のお誘いなど、
            お気軽にご連絡ください。
          </p>

          <a
            href="mailto:taitoyusa.0816@gmail.com"
            className={styles.mailButton}
          >
            Send Email
          </a>

          <div className={styles.links}>
            <a
              href="https://github.com/Taito1608"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://zenn.dev/taito0816"
              target="_blank"
              rel="noopener noreferrer"
            >
              Zenn
            </a>

            <a
              href="https://line.me/ti/p/VYOKfeXB6q"
              target="_blank"
              rel="noopener noreferrer"
            >
              LINE
            </a>

            <a
              href="https://www.instagram.com/taito_816?igsh=MTdjeW9wbzM0cGlvZw%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
