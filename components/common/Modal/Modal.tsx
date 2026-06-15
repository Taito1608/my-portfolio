"use client";

import styles from "./Modal.module.scss";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export default function Modal({
  isOpen,
  onClose,
  children,
}: Props) {
  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div
        className={styles.overlay}
        onClick={onClose}
      />

      <div className={styles.modal}>
        {children}
      </div>
    </>
  );
}
