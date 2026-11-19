"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { site } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const links = [
  { href: "/about", label: "About" },
  { href: "/modeling", label: "Modeling" },
  { href: "/acting", label: "Acting" },
  { href: "/showreel", label: "Showreel" },
  { href: "/projects", label: "Projects" },
  { href: "/gallery", label: "Gallery" },
  { href: "/profile", label: "Profile" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "no-print fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled && !open ? "bg-ink/85 py-3 backdrop-blur-md" : "py-6",
        )}
      >
        <div className="container-x flex items-center justify-between">
          <Link href="/" className="display relative z-[60] text-2xl tracking-wide" aria-label={`${site.name} — home`}>
            {site.name}
          </Link>

          <nav aria-label="Main" className="hidden items-center gap-8 lg:flex">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                aria-current={pathname === l.href ? "page" : undefined}
                className={cn("link-line text-sm tracking-wide", pathname === l.href ? "text-gold" : "text-ivory/75 hover:text-ivory")}
              >
                {l.label}
              </Link>
            ))}
            <Link href="/contact" className="border border-gold px-5 py-2 text-xs uppercase tracking-[0.2em] text-gold transition-colors duration-300 hover:bg-gold hover:text-ink">
              Contact
            </Link>
          </nav>

          <button
            type="button"
            className="relative z-[60] flex h-11 w-11 flex-col items-center justify-center gap-[7px] lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className={cn("h-px w-7 bg-ivory transition-transform duration-300", open && "translate-y-[4px] rotate-45")} />
            <span className={cn("h-px w-7 bg-ivory transition-transform duration-300", open && "-translate-y-[4px] -rotate-45")} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            data-lenis-prevent className="no-print fixed inset-0 z-40 flex flex-col justify-center bg-ink px-8 lg:hidden"
            initial={reduce ? false : { clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          >
            <nav aria-label="Mobile" className="flex flex-col gap-2">
              {[...links, { href: "/contact", label: "Contact" }].map((l, i) => (
                <motion.div key={l.href} initial={reduce ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 + i * 0.05, duration: 0.5 }}>
                  <Link href={l.href} className={cn("display block py-1 text-5xl", pathname === l.href ? "text-gold" : "text-ivory")}>
                    {l.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
