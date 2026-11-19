"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { site } from "@/data/portfolio";

export default function Preloader() {
  const [show, setShow] = useState(true);
  const [n, setN] = useState(0);

  useEffect(() => {
    let seen = false;
    try { seen = !!sessionStorage.getItem("intro-seen"); } catch {}
    if (seen || window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setShow(false); return; }
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / 1500);
      setN(Math.round(p * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
      else { try { sessionStorage.setItem("intro-seen", "1"); } catch {} setTimeout(() => setShow(false), 150); }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          aria-hidden
          className="fixed inset-0 z-[100] flex flex-col justify-between bg-ink p-6 md:p-10"
          exit={{ clipPath: "inset(0 0 100% 0)" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          initial={{ clipPath: "inset(0 0 0% 0)" }}
        >
          <p className="text-sm tracking-[0.3em] text-gold">{site.designation}</p>
          <div className="flex items-end justify-between">
            <p className="display text-[clamp(3rem,11vw,10rem)] leading-none">{site.name}</p>
            <p className="display text-6xl tabular-nums text-gold md:text-8xl">{n}</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
