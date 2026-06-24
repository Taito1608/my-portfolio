"use client";

import { useEffect } from "react";
import Image from "next/image";
import { Work } from "@/types/work";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./WorksDrawer.module.scss";

type Props = {
  work: Work | null;

  onClose: () => void;
};

export default function WorksDrawer({
  work,
  onClose,
}: Props) {

  useEffect(() => {
    if (!work) return;

    const scrollY = window.scrollY;

    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";

    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";

      window.scrollTo(0, scrollY);
    };
  }, [work]);

  return (
    <AnimatePresence>
      {work && (
        <>
          <motion.div
            className={styles.overlay}
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            className={styles.drawer}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{
              duration: 0.5,

              ease: [0.22, 0.9, 0.35, 1],
            }}
          >
            <button
              className={styles.close}
              onClick={onClose}
            >
              ×
            </button>

            <div className={styles.imageWrapper}>
              <Image
                src={work.imageUrl}
                alt={work.title}
                fill
                className={styles.image}
              />
            </div>

            <h2>
              {work.title}
            </h2>

            <p className={styles.detail}>
              {work.detail}
            </p>

            <ul className={styles.techList}>
              {work.technologies?.map((technology) => (
                <li key={technology}>
                  {technology}
                </li>
              ))}
            </ul>

            <div className={styles.links}>
              {work.githubUrl ? (
                <a
                  href={work.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github →
                </a>
                ) : null
              }

              {work.demoUrl ? (
                <a
                  href={work.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demo →
                </a>
              ) : null
              }
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
