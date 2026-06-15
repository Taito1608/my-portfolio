import Container from "@/components/layout/Container/Container";
import Signature from "@/components/common/Signature/Signature";

import styles from "./Hero.module.scss";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <Container>
        <Signature duration={7} stagger={0.12} />

        <div className={styles.inner}>
          <h1 className={styles.title}>
            Taito Yusa
          </h1>

          <p className={styles.description}>
            Frontend / Backend Developer
          </p>

          <span className={styles.scroll}>
            Scroll
          </span>
        </div>
      </Container>
    </section>
  );
}