import Container from "@/components/layout/Container/Container";

import styles from "./Skills.module.scss";

export default function Skills() {
  return (
    <section
      id="skills"
      className={styles.skills}
    >
      <Container>
        <h2 className={styles.title}>
          Skills
        </h2>

        <div className={styles.category}>
          <h3 className={styles.categoryTitle}>
            Frontend
          </h3>

          <ul className={styles.skillList}>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>React</li>
            <li>Next.js</li>
          </ul>
        </div>

        <div className={styles.category}>
          <h3 className={styles.categoryTitle}>
            Backend
          </h3>

          <ul className={styles.skillList}>
            <li>Ruby</li>
            <li>Ruby on Rails</li>
          </ul>
        </div>

        <div className={styles.category}>
          <h3 className={styles.categoryTitle}>
            Tools
          </h3>

          <ul className={styles.skillList}>
            <li>Git</li>
            <li>GitHub</li>
            <li>Docker</li>
          </ul>
        </div>
      </Container>
    </section>
  );
}
