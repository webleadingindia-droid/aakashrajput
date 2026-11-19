"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

/** Follower ring for mouse users. Grows on links, shows a label on [data-cursor] elements. */
export default function Cursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 450, damping: 38, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 450, damping: 38, mass: 0.4 });
  const [enabled, setEnabled] = useState(false);
  const [label, setLabel] = useState("");
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;
    setEnabled(true);
    const move = (e: MouseEvent) => { x.set(e.clientX); y.set(e.clientY); };
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setLabel((t.closest("[data-cursor]") as HTMLElement | null)?.dataset.cursor ?? "");
      setHover(!!t.closest("a,button,[role=button],input,select,textarea"));
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => { window.removeEventListener("mousemove", move); window.removeEventListener("mouseover", over); };
  }, [x, y]);

  if (!enabled) return null;
  return (
    <motion.div aria-hidden style={{ x: sx, y: sy }} className="no-print pointer-events-none fixed left-0 top-0 z-[90]">
      <div className={cn("flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border text-[10px] font-medium uppercase tracking-[0.2em] transition-all duration-300",
        label ? "h-24 w-24 border-gold bg-gold text-ink" : hover ? "h-14 w-14 border-gold bg-gold/15" : "h-8 w-8 border-ivory/60")}>
        {label}
      </div>
    </motion.div>
  );
}
