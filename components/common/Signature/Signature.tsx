"use client";

import { SIGNATURE_PATH } from "./signaturePath";
import styles from "./Signature.module.scss";

export default function Signature({
  duration = 7,
}: {
  duration?: number;
}) {
  return (
    <div className={styles.wrapper}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="280 850 1480 280"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden
        focusable="false"
      >
        <path
          className={styles.path}
          style={{
            "--duration": `${duration}s`,
            strokeDasharray: 4000,
            strokeDashoffset: 4000,
          } as React.CSSProperties}
          d={SIGNATURE_PATH}
        />
      </svg>
    </div>
  );
}
