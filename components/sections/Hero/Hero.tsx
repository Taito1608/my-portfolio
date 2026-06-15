import styles from "./Hero.module.scss";
import Container from "@/components/layout/Container/Container";
import Signature from "@/components/common/Signature/Signature";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <Container>
        <Signature duration={7} stagger={0.12} />

        <h1 className={styles.title}>
          Taito Yusa
        </h1>

        <p className={styles.description}>
          Full Stack Developer
        </p>
      </Container>
    </section>
  );
}
