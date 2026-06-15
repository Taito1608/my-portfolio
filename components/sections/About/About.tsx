import styles from "./About.module.scss";
import Container from "@/components/layout/Container/Container";

export default function About() {
  return (
    <section className={styles.about}>
      <Container>
        <h2 className={styles.title}>
          About Me
        </h2>
        <p className={styles.description}>
          I am a passionate full-stack developer with experience in Ruby on Rails and Next.js.
        </p>
      </Container>
    </section>
  );
} 
                            