import Image from "next/image";
import styles from "./Logo.module.scss";

type Props = {
  size: number;
  alt?: string;
  priority?: boolean;
};

// ライト / ダークで線の色が違う画像をCSSで切り替える（テーマ判定前のちらつきを防ぐため）
export default function Logo({
  size,
  alt = "",
  priority,
}: Props) {
  return (
    <span
      className={styles.logo}
      style={{ width: size, height: size }}
    >
      <Image
        src="/images/logo-light.png"
        alt={alt}
        width={size}
        height={size}
        className={styles.light}
        priority={priority}
      />
      <Image
        src="/images/logo-dark.png"
        alt=""
        width={size}
        height={size}
        className={styles.dark}
        priority={priority}
      />
    </span>
  );
}
