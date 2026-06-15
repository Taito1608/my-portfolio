"use client";

import { motion } from "framer-motion";

export default function FadeInMotion({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.48, ease: [0.22, 0.9, 0.35, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
