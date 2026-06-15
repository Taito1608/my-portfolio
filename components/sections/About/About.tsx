import Container from "@/components/layout/Container/Container";

import styles from "./About.module.scss";

export default function About() {
  return (
    <section
      id="about"
      className={styles.about}
    >
      <Container>
        <h2 className={styles.title}>
          About
        </h2>

        <p className={styles.description}>
          こんにちは、Taito Yusaです。
        </p>

        <p className={styles.description}>
          JavaScript、Railsを中心に学習しています。
          現在はフロントエンド・バックエンドの両方に興味があり、
          個人開発を通して技術力向上に取り組んでいます。
        </p>

        <ul className={styles.links}>
          <li>
            <a
              href="https://github.com/your-account"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
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
        </ul>
      </Container>
    </section>
  );
}
