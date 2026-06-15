"use client";

import { useEffect, useState } from "react";
import styles from "./WorkCard.module.scss";

export default function WorkCard({
  title,
  description,
  imageUrl,
}: {
  title: string;
  description: string;
  imageUrl?: string;
}) {
  const placeholder = "/images/placeholder.svg";
  const [src, setSrc] = useState<string>(placeholder);

  useEffect(() => {
    if (!imageUrl) return;
    const probe = new Image();
    probe.src = imageUrl;
    probe.onload = () => setSrc(imageUrl);
    // onerror: keep placeholder
    return () => {
      probe.onload = null;
      probe.onerror = null;
    };
  }, [imageUrl]);

  return (
    <article className={styles.card}>
      <img
        className={styles.media}
        src={src}
        alt={title}
        onError={() => {
          if (src !== placeholder) setSrc(placeholder);
        }}
      />
      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.desc}>{description}</p>
      </div>
    </article>
  );
}
