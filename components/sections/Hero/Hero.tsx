"use client";

import { motion } from "framer-motion";
import Container from "@/components/layout/Container/Container";
import Signature from "@/components/common/Signature/Signature";
import styles from "./Hero.module.scss";

export default function Hero() {
  return (
    <section
      id="hero"
      className={styles.hero}
    >
      <Container>
        <div className={styles.inner}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            style={{ willChange: "opacity" }}
          >
            <Signature duration={7} />
          </motion.div>

          <motion.a
            href="#about"
            className={styles.scroll}
            animate={{
              y: [0, 6, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Scroll
          </motion.a>
        </div>
      </Container>
    </section>
  );
}
