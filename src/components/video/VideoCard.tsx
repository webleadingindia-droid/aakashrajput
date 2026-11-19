"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Play, X } from "lucide-react";
import SmartImage from "@/components/ui/SmartImage";
import { site, type VideoItem } from "@/data/portfolio";
import { toEmbedUrl } from "@/lib/video";
import { cn } from "@/lib/utils";

interface Props {
  video: VideoItem;
  variant?: "card" | "feature";
}

export default function VideoCard({ video, variant = "card" }: Props) {
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const embed = toEmbedUrl(video.url);
  const feature = variant === "feature";

  useEffect(() => {
    if (!open) return;
    const prev = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      prev?.focus?.();
    };
  }, [open]);

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} aria-label={`Play ${video.title}`} data-cursor="Play" className="group block w-full text-left">
        <span className={cn("relative block overflow-hidden bg-charcoal", feature ? "aspect-[16/9] md:aspect-[21/9]" : "aspect-video")}>
          <SmartImage src={video.thumb} alt={`Thumbnail for ${video.title}`} fill sizes={feature ? "100vw" : "(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"} loading="lazy" className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04] motion-reduce:transition-none" />
          <span aria-hidden className="absolute inset-0 bg-ink/30 transition-colors duration-500 group-hover:bg-ink/10" />
          <span aria-hidden className={cn("absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-ivory/70 bg-ink/40 backdrop-blur transition-all duration-500 group-hover:border-gold group-hover:bg-gold group-hover:text-ink", feature ? "h-24 w-24" : "h-14 w-14")}>
            <Play size={feature ? 30 : 20} className="ml-1" />
          </span>
          {!embed && site.showSampleBadges && (
            <span className="absolute left-3 top-3 bg-ink/80 px-2.5 py-1 text-[11px] tracking-wide text-ivory/80">Placeholder video</span>
          )}
        </span>
        <span className="mt-4 block">
          <span className={cn("display block leading-tight", feature ? "text-3xl md:text-4xl" : "text-2xl")}>{video.title}</span>
          <span className="mt-1 block text-sm text-ivory/55">{video.description}</span>
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            role="dialog"
            aria-modal="true"
            data-lenis-prevent
            aria-label={video.title}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-ink/95 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <button ref={closeRef} type="button" aria-label="Close video" onClick={() => setOpen(false)} className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center hover:text-gold">
              <X aria-hidden />
            </button>
            <div className="aspect-video w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
              {embed ? (
                <iframe src={embed} title={video.title} className="h-full w-full" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowFullScreen />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center gap-3 border border-ivory/15 bg-charcoal p-6 text-center">
                  <p className="display text-3xl">Video coming soon</p>
                  <p className="max-w-md text-sm text-ivory/60">No video link has been added yet. Add a YouTube or Vimeo URL to this item in <code className="text-gold">src/data/portfolio.ts</code>.</p>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
