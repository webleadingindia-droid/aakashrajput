import type { ReactNode } from "react";
import SplitTitle from "./SplitTitle";
import Marquee from "./Marquee";

export default function PageHeader({ title, intro, children }: { title: string; intro?: string; children?: ReactNode }) {
  return (
    <header className="container-x pb-12 pt-36 md:pb-20 md:pt-44">
      <h1 aria-label={title} className="display max-w-6xl text-[clamp(4rem,13vw,13rem)] leading-[0.88] tracking-[-0.03em]"><SplitTitle text={title} /></h1>
      {intro && <p className="mt-8 max-w-xl text-base leading-relaxed text-ivory/65 md:text-lg">{intro}</p>}
      {children}
      <div aria-hidden className="mt-14 border-y border-ivory/10 py-3 text-2xl text-ivory/25 md:text-3xl"><Marquee words={[title, title, title]} outline /></div>
    </header>
  );
}
