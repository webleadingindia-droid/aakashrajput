"use client";

import { motion, useReducedMotion } from "framer-motion";

/** Word-by-word masked rise. Put it inside a heading that carries the aria-label. */
export default function SplitTitle({ text, delay = 0.1 }: { text: string; delay?: number }) {
  const reduce = useReducedMotion();
  return (
    <>
      {text.split(" ").map((w, i) => (
        <span key={i} aria-hidden className="mr-[0.22em] inline-block overflow-hidden pb-[0.1em] align-bottom">
          <motion.span className="inline-block" initial={reduce ? false : { y: "110%", rotate: 4 }} animate={{ y: 0, rotate: 0 }} transition={{ delay: delay + i * 0.1, duration: 1, ease: [0.22, 1, 0.36, 1] }}>
            {w}
          </motion.span>
        </span>
      ))}
    </>
  );
}
