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
            href="mailto:your-email@example.com"
            className={styles.mailButton}
          >
            Send Email
          </a>

          <div className={styles.links}>
            <a
              href="https://github.com/your-account"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://qiita.com/your-account"
              target="_blank"
              rel="noopener noreferrer"
            >
              Qiita
            </a>

            <a
              href="https://x.com/your-account"
              target="_blank"
              rel="noopener noreferrer"
            >
              X
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
