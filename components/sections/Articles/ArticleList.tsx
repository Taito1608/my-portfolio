"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import type { ArticleSummary } from "@/lib/zenn";
import { formatDate } from "@/lib/formatDate";
import styles from "./Articles.module.scss";

const list: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const item: Variants = {
  hidden: {
    opacity: 0,
    y: 12,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.48,
      ease: [0.22, 0.9, 0.35, 1],
    },
  },
};

type Props = {
  articles: ArticleSummary[];
};

export default function ArticleList({ articles }: Props) {
  return (
    <motion.ul
      className={styles.list}
      variants={list}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {articles.map((article) => (
        <motion.li key={article.slug} variants={item}>
          <Link href={`/articles/${article.slug}`} className={styles.card}>
            <time className={styles.date} dateTime={article.publishedAt}>
              {formatDate(article.publishedAt)}
            </time>
            <h3 className={styles.title}>
              {article.title}
            </h3>
            <p className={styles.excerpt}>
              {article.excerpt}
            </p>
          </Link>
        </motion.li>
      ))}
    </motion.ul>
  );
}
