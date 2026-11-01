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
              href="https://qiita.com/taito0816"
              target="_blank"
              rel="noopener noreferrer"
            >
              Qiita
            </a>

            <a
              href="https://x.com/Taito1608"
              target="_blank"
              rel="noopener noreferrer"
            >
              X
            </a>

            <a
              href="https://www.linkedin.com/in/taito1608/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
