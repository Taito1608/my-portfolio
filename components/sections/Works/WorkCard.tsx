"use client";

import Image from "next/image";
import type { Work } from "@/types/work";
import styles from "./WorkCard.module.scss";

type Props = {
  work: Work;

  onClick?: () => void;
};

export default function WorkCard({
  work,

  onClick,
}: Props) {
  return (
    <button
      type="button"
      className={styles.card}
      onClick={onClick}
      aria-haspopup="dialog"
    >
      <div className={styles.imageWrapper}>
        <Image
          src={work.imageUrl}
          alt=""
          fill
          // 768px未満は1列、以上は2列（コンテナ最大1000px）
          sizes="(min-width: 1064px) 500px, (min-width: 768px) 50vw, 100vw"
          className={styles.media}
        />
      </div>

      <div className={styles.body}>
        <h3 className={styles.title}>
          {work.title}
        </h3>

        <p className={styles.desc}>
          {work.description}
        </p>

        <span className={styles.more} aria-hidden="true">
          詳細を見る →
        </span>
      </div>
    </button>
  );
}
