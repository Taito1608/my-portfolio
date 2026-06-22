"use client";

import { motion } from "framer-motion";
import Container from "@/components/layout/Container/Container";
import { fadeUp } from "@/components/common/Motion/fadeUp";
import styles from "./About.module.scss";

export default function About() {
  return (
    <motion.section
      id="about"
      className={styles.about}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
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
    </motion.section>
  );
}
