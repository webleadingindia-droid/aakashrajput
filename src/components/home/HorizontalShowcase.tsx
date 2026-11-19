"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import SmartImage from "@/components/ui/SmartImage";
import type { PhotoItem } from "@/data/portfolio";
import { dims } from "@/lib/utils";

/** Desktop: vertical scroll drives a horizontal slide-through. Mobile / reduced motion: a swipeable strip. */
export default function HorizontalShowcase({ items }: { items: PhotoItem[] }) {
  const section = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const [dist, setDist] = useState(0);
  const [pinned, setPinned] = useState(false);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: section, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], [0, -dist]);

  useEffect(() => {
    const measure = () => {
      const desktop = window.matchMedia("(min-width: 768px)").matches && !reduce;
      setPinned(desktop);
      if (track.current) setDist(Math.max(0, track.current.scrollWidth - window.innerWidth));
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [reduce, items.length]);

  return (
    <section ref={section} aria-label="Modeling highlights" style={pinned ? { height: `${Math.max(220, 100 + dist / 8)}vh` } : undefined} className="relative">
      <div className={pinned ? "sticky top-0 flex h-screen flex-col justify-center overflow-hidden" : "py-20"}>
        <div className="container-x mb-8 flex items-end justify-between gap-6">
          <h2 className="display text-[clamp(3.5rem,11vw,10rem)] leading-[0.85]">Model<span className="text-outline-gold">ing</span></h2>
          <Link href="/modeling" className="link-line mb-2 shrink-0 text-sm tracking-wide text-gold">Full portfolio</Link>
        </div>
        <div className={pinned ? "" : "overflow-x-auto snap-x snap-mandatory"}>
          <motion.div ref={track} style={pinned ? { x } : undefined} className="flex w-max gap-4 px-5 sm:px-8 lg:gap-6 lg:px-12">
            {items.map((p, i) => (
              <Link key={p.src} href="/modeling" data-cursor="View" aria-label={`Modeling portfolio — ${p.alt}`} className="group relative block shrink-0 snap-center overflow-hidden bg-charcoal">
                <div className="h-[62vh] md:h-[58vh]" style={{ aspectRatio: p.orientation === "landscape" ? "3/2" : p.orientation === "square" ? "1/1" : "4/5" }}>
                  <SmartImage src={p.src} alt={p.alt} {...dims(p.orientation)} sizes="60vh" loading="lazy" className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-[1.06] motion-reduce:transition-none" />
                </div>
                <span className="absolute bottom-4 left-4 text-sm text-ivory/80">{p.category}</span>
                <span aria-hidden className="absolute right-4 top-4 text-sm tabular-nums text-ivory/60">{String(i + 1).padStart(2, "0")}</span>
              </Link>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
