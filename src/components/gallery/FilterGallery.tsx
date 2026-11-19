"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SmartImage from "@/components/ui/SmartImage";
import Lightbox from "./Lightbox";
import type { PhotoItem } from "@/data/portfolio";
import { cn, dims } from "@/lib/utils";

interface Props {
  items: PhotoItem[];
  categories: string[];
  variant?: "masonry" | "grid";
}

export default function FilterGallery({ items, categories, variant = "masonry" }: Props) {
  const [active, setActive] = useState("All");
  const [index, setIndex] = useState<number | null>(null);
  const shown = active === "All" ? items : items.filter((i) => i.category === active);

  return (
    <div className="container-x pb-24 md:pb-32">
      <div role="group" aria-label="Filter by category" className="mb-10 flex flex-wrap gap-x-7 gap-y-3 border-b border-ivory/10 pb-5">
        {["All", ...categories].map((c) => (
          <button
            key={c}
            type="button"
            aria-pressed={active === c}
            onClick={() => setActive(c)}
            className={cn("link-line py-1 text-sm tracking-wide transition-colors", active === c ? "text-gold after:scale-x-100" : "text-ivory/60 hover:text-ivory")}
          >
            {c}
          </button>
        ))}
      </div>

      <motion.div
        key={active}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={variant === "masonry" ? "columns-1 gap-4 sm:columns-2 lg:columns-3" : "grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-3 lg:grid-cols-4"}
      >
        {shown.map((item, i) => (
          <button
            key={item.src}
            type="button"
            onClick={() => setIndex(i)}
            data-cursor="View"
            aria-label={`Open image: ${item.alt}`}
            className={cn("group relative block w-full overflow-hidden bg-charcoal", variant === "masonry" ? "mb-4 break-inside-avoid" : "aspect-[4/5]")}
          >
            {variant === "masonry" ? (
              <SmartImage src={item.src} alt={item.alt} {...dims(item.orientation)} sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" loading="lazy" className="h-auto w-full transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04] motion-reduce:transition-none" />
            ) : (
              <SmartImage src={item.src} alt={item.alt} fill sizes="(min-width:1024px) 25vw, (min-width:768px) 33vw, 50vw" loading="lazy" className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.05] motion-reduce:transition-none" />
            )}
            <span aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent p-4 text-left text-xs text-ivory opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100">
              {item.category}
            </span>
          </button>
        ))}
      </motion.div>

      {shown.length === 0 && <p className="py-20 text-center text-ivory/60">No photographs in this category yet. Add some in src/data/portfolio.ts.</p>}

      <Lightbox items={shown} index={index} onClose={() => setIndex(null)} onChange={setIndex} />
    </div>
  );
}
