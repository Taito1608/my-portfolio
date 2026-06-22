"use client";

import { motion } from "framer-motion";
import Container from "@/components/layout/Container/Container";
import Signature from "@/components/common/Signature/Signature";
import styles from "./Hero.module.scss";

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.signatureWrapper}>
        <Signature duration={7} />
      </div>
      <Container>
        <div className={styles.inner}>
          <motion.a
            href="#about"
            className={styles.scroll}
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            Scroll
          </motion.a>
        </div>
      </Container>
    </section>
  );
}
