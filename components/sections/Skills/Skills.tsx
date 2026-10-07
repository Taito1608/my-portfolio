"use client";

import Container from "@/components/layout/Container/Container";

import { motion } from "framer-motion";
import { fadeUp } from "@/components/common/Motion/fadeUp";
import { skillCategories } from "@/data/skills";
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

        <div className={styles.grid}>
          {skillCategories.map((category) => (
            <div key={category.title} className={styles.category}>
              <h3 className={styles.categoryTitle}>
                {category.title}
              </h3>

              <ul className={styles.skillList}>
                {category.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </motion.section>
  );
}
