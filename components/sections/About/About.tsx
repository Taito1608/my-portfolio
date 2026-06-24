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
          こんにちは、Taitoと申します。
        </p>

        <p className={styles.description}>
          大学では情報系の学部に所属し、IoTを活用したシステム開発やWebアプリケーション開発に取り組んできました。

          現在は卒業研究として、生成AIを活用したBCP（事業継続計画）発動時の意思決定支援システムの開発と、その有効性の検証を行っています。
          社会課題の解決につながるシステム開発に興味があり、これまで培ってきた横断的な知識を活かして、フロントエンド・バックエンド・組み込み開発まで幅広い領域に挑戦しています。
        </p>

        <ul className={styles.links}>
          <li>
            <a
              href="https://github.com/Taito1608"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </li>
        </ul>
      </Container>
    </motion.section>
  );
}
