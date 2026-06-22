"use client";

import { motion } from "framer-motion";
import { pageTransition } from "./pageTransition";

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      variants={pageTransition}
      initial="hidden"
      animate="show"
    >
      {children}
    </motion.div>
  );
}
