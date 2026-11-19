"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import SmartImage from "@/components/ui/SmartImage";
import Button from "@/components/ui/Button";
import Magnetic from "@/components/ui/Magnetic";
import Marquee from "@/components/ui/Marquee";
import { profile, site } from "@/data/portfolio";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function Hero() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.25]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-18%"]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  let seen = false;
  try { seen = typeof window !== "undefined" && !!sessionStorage.getItem("intro-seen"); } catch {}
  const base = seen || reduce ? 0.15 : 1.9;

  const [first, ...rest] = site.name.split(" ");
  const last = rest.join(" ");
  const line = (t: string, outline: boolean, d: number) => (
    <span className="block overflow-hidden pb-[0.06em]" aria-hidden>
      <motion.span className={`block ${outline ? "text-outline" : ""}`} initial={reduce ? false : { y: "110%" }} animate={{ y: 0 }} transition={{ delay: base + d, duration: 1.2, ease }}>
        {t}
      </motion.span>
    </span>
  );

  return (
    <section ref={ref} className="relative flex min-h-[100svh] flex-col overflow-hidden">
      <motion.div style={{ y: imgY, scale: imgScale }} className="absolute inset-0">
        <SmartImage src={site.heroImage.src} alt={site.heroImage.alt} fill priority sizes="100vw" className="object-cover" />
      </motion.div>
      <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-ink/50" />

      <motion.div style={{ y: textY, opacity: fade }} className="container-x relative flex flex-1 flex-col justify-between pb-10 pt-32 md:pt-36">
        <div className="flex items-start justify-between gap-6">
          <motion.p initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: base + 0.8 }} className="flex items-center gap-3 border border-ivory/20 bg-ink/40 px-4 py-2 text-xs tracking-[0.2em] backdrop-blur">
            <span aria-hidden className="h-2 w-2 rounded-full bg-gold [animation:pulse-dot_2s_ease-in-out_infinite]" />
            Available for casting
          </motion.p>
          <motion.dl initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: base + 0.9 }} className="hidden gap-8 text-right text-xs sm:flex">
            <div><dt className="text-ivory/50">Height</dt><dd className="mt-1 text-sm">{profile.height}</dd></div>
            <div><dt className="text-ivory/50">Based in</dt><dd className="mt-1 text-sm">{profile.location}</dd></div>
          </motion.dl>
        </div>

        <div>
          <p className="mb-4 text-sm tracking-[0.35em] text-gold">{site.designation}</p>
          <h1 className="display text-[clamp(4.2rem,19vw,19rem)] leading-[0.82] tracking-[-0.03em]" aria-label={site.name}>
            {line(first, false, 0.1)}
            {last && line(last, true, 0.25)}
          </h1>
          <motion.div initial={reduce ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: base + 0.9, duration: 0.9 }} className="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="display text-3xl italic md:text-4xl">{site.tagline}</p>
              <p className="mt-1 text-ivory/65">{site.intro}</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Magnetic><Button href="/modeling" variant="solid">Explore portfolio</Button></Magnetic>
              <Magnetic><Button href="/showreel">Watch showreel</Button></Magnetic>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <div className="relative border-y border-ivory/15 bg-ink/60 py-4 text-3xl backdrop-blur md:text-5xl">
        <Marquee words={["Actor", "Model", "Performer", "Storyteller"]} />
      </div>
    </section>
  );
}
