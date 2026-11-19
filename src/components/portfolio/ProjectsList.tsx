"use client";

import { useState } from "react";
import SmartImage from "@/components/ui/SmartImage";
import { site, type ProjectItem } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export default function ProjectsList({ projects, categories }: { projects: ProjectItem[]; categories: string[] }) {
  const [active, setActive] = useState("All");
  const shown = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <div className="container-x pb-24 md:pb-32">
      <div role="group" aria-label="Filter by category" className="mb-6 flex flex-wrap gap-x-7 gap-y-3">
        {["All", ...categories].map((c) => (
          <button key={c} type="button" aria-pressed={active === c} onClick={() => setActive(c)}
            className={cn("link-line py-1 text-sm tracking-wide", active === c ? "text-gold after:scale-x-100" : "text-ivory/60 hover:text-ivory")}>
            {c}
          </button>
        ))}
      </div>

      <ul className="border-t border-ivory/15">
        {shown.map((p) => {
          const body = (
            <>
              <span className="text-sm text-ivory/50 md:col-span-1">{p.year}</span>
              <span className="md:col-span-5">
                <span className="display block text-3xl leading-tight md:text-4xl">{p.title}</span>
                <span className="mt-1 block text-sm text-ivory/55">{p.category}</span>
              </span>
              <span className="text-sm leading-relaxed text-ivory/70 md:col-span-4">
                {p.role}<br />
                <span className="text-ivory/50">{p.productionHouse} · Dir. {p.director}</span>
              </span>
              <span className="relative hidden aspect-[4/5] w-20 justify-self-end overflow-hidden bg-charcoal md:col-span-2 md:block">
                <SmartImage src={p.poster} alt={`Poster or photograph for ${p.title}`} fill sizes="80px" loading="lazy" className="object-cover transition-transform duration-700 group-hover:scale-110" />
              </span>
            </>
          );
          const cls = "group grid items-center gap-3 border-b border-ivory/15 py-7 transition-colors duration-500 md:grid-cols-12 md:gap-6 hover:bg-charcoal/60";
          return (
            <li key={p.title}>
              {p.link ? (
                <a href={p.link} target="_blank" rel="noopener noreferrer" className={cls} aria-label={`${p.title} (opens in a new tab)`}>
                  {body}
                </a>
              ) : (
                <div className={cls}>{body}</div>
              )}
              {p.isSample && site.showSampleBadges && <p className="sr-only">Sample entry</p>}
            </li>
          );
        })}
      </ul>
      {site.showSampleBadges && shown.some((p) => p.isSample) && (
        <p className="mt-6 text-sm text-ivory/45">These are sample entries. Replace them with your real credits in src/data/portfolio.ts.</p>
      )}
    </div>
  );
}
