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
      </div>
    </button>
  );
}
