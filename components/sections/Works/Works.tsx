"use client";
import { useState } from "react";

import { motion } from "framer-motion";

import { works } from "@/data/works";

import type { Work } from "@/types/work";
import WorksDrawer from "./WorksDrawer";
import Container from "@/components/layout/Container/Container";

import WorkCard from "./WorkCard";

import styles from "./Works.module.scss";

const list = {
  hidden: {},

  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 12,
  },

  show: {
    opacity: 1,

    y: 0,

    transition: {
      duration: 0.48,

      ease: [0.22, 0.9, 0.35, 1] as any,
    },
  },
};

export default function Works() {
  const [selectedWork, setSelectedWork] = useState<Work | null>(null);

  return (
    <section
      id="works"
      className={styles.works}
    >
      <Container>
        <motion.h2
          className={styles.heading}
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.48 }}
        >
          Works
        </motion.h2>

        <motion.div
          className={styles.grid}
          variants={list}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {works.map((work) => (
            <motion.div
              key={work.id}
              variants={item}
              onClick={() => setSelectedWork(work)}
            >
              <WorkCard
                work={work}
                onClick={() => setSelectedWork(work)}
              />
            </motion.div>
          ))}
        </motion.div>
      </Container>
      <WorksDrawer
        work={selectedWork}
        onClose={() => setSelectedWork(null)}
      />
    </section>
  );
}
