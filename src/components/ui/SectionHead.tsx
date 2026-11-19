import Link from "next/link";
import Reveal from "./Reveal";

export default function SectionHead({ title, href, linkLabel }: { title: string; href?: string; linkLabel?: string }) {
  return (
    <Reveal className="mb-10 flex flex-wrap items-end justify-between gap-4 md:mb-14">
      <h2 className="display text-5xl leading-none tracking-[-0.02em] sm:text-6xl md:text-8xl">{title}</h2>
      {href && (
        <Link href={href} className="link-line text-sm tracking-wide text-ivory/80">
          {linkLabel ?? "View all"}
        </Link>
      )}
    </Reveal>
  );
}
