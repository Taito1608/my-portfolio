"use client";

import Container from "@/components/layout/Container/Container";

import { motion } from "framer-motion";
import { fadeUp } from "@/components/common/Motion/fadeUp";
import styles from "./Skills.module.scss";

export default function Skills() {
  return (
    <motion.section
      id="skills"
      className={styles.skills}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <Container>
        <h2 className={styles.title}>
          Skills
        </h2>

        <div className={styles.category}>
          <h3 className={styles.categoryTitle}>
            Languages
          </h3>

          <ul className={styles.skillList}>
            <li>Ruby</li>
            <li>Python</li>
            <li>C / C++</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>SQL</li>
            <li>Kotlin</li>
          </ul>
        </div>

        <div className={styles.category}>
          <h3 className={styles.categoryTitle}>
            Frontend
          </h3>

          <ul className={styles.skillList}>
            <li>HTML</li>
            <li>CSS</li>
            <li>Tailwind CSS</li>
            <li>React</li>
            <li>Next.js</li>
          </ul>
        </div>

        <div className={styles.category}>
          <h3 className={styles.categoryTitle}>
            Backend / DB
          </h3>

          <ul className={styles.skillList}>
            <li>fastAPI</li>
            <li>flask</li>
            <li>PostgreSQL</li>
            <li>MariaDB</li>
            <li>SQLite</li>
          </ul>
        </div>

        <div className={styles.category}>
          <h3 className={styles.categoryTitle}>
            IoT
          </h3>

          <ul className={styles.skillList}>
            <li>Raspberry Pi</li>
            <li>Arduino</li>
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
            <li>Vercel</li>
          </ul>
        </div>
      </Container>
    </motion.section>
  );
}
