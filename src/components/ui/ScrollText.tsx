"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";

function Word({ w, p, a, b }: { w: string; p: MotionValue<number>; a: number; b: number }) {
  const opacity = useTransform(p, [a, b], [0.15, 1]);
  return <motion.span style={{ opacity }} className="mr-[0.25em] inline-block">{w}</motion.span>;
}

/** Words light up as the section scrolls through the viewport. */
export default function ScrollText({ text, className }: { text: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.45"] });
  const words = text.split(" ");
  return (
    <p ref={ref} className={className} aria-label={text}>
      {words.map((w, i) => <Word key={i} w={w} p={scrollYProgress} a={i / words.length} b={Math.min(1, (i + 1.5) / words.length)} />)}
    </p>
  );
}
