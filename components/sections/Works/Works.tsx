"use client";

import { works } from "@/data/works";
import Container from "@/components/layout/Container/Container";
import WorkCard from "./WorkCard";
import { motion } from "framer-motion";
import styles from "./Works.module.scss";

const list = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.48, ease: [0.22, 0.9, 0.35, 1] as any } },
};

export default function Works() {
  return (
    <section>
      <Container>
        <motion.h2 initial={{ opacity: 0, y: 6 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.48 }}>
          Works
        </motion.h2>

        <motion.div className={styles.grid} variants={list} initial="hidden" whileInView="show" viewport={{ once: true }}>
          {works.map((work) => (
            <motion.div key={work.id} variants={item}>
              <WorkCard title={work.title} description={work.description} imageUrl={work.imageUrl} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
