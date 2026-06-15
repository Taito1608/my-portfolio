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

        <p className={styles.description}>
          お気軽にご連絡ください。
        </p>

        <ul className={styles.links}>
          <li>
            <a
              href="https://github.com/your-account"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>

          <li>
            <a
              href="https://qiita.com/your-account"
              target="_blank"
              rel="noopener noreferrer"
            >
              Qiita
            </a>
          </li>

          <li>
            <a href="mailto:example@example.com">
              Email
            </a>
          </li>
        </ul>
      </Container>
    </section>
  );
}
