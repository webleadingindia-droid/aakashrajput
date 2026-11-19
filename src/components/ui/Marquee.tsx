import { cn } from "@/lib/utils";

export default function Marquee({ words, className, outline = false }: { words: string[]; className?: string; outline?: boolean }) {
  const row = (k: string) => (
    <div key={k} className="flex shrink-0 items-center" aria-hidden={k === "b"}>
      {words.map((w, i) => (
        <span key={i} className="flex items-center">
          <span className={cn("display px-6 md:px-10", outline ? "text-outline" : "")}>{w}</span>
          <span className="text-gold" aria-hidden>✦</span>
        </span>
      ))}
    </div>
  );
  return (
    <div className={cn("marquee overflow-hidden whitespace-nowrap", className)} role="presentation">
      <div className="marquee-track">{row("a")}{row("b")}</div>
    </div>
  );
}
