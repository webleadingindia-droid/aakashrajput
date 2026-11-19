"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

/** next/image with a graceful fallback if the file is missing or broken. */
export default function SmartImage({ alt, className, ...props }: ImageProps & { alt: string }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={cn("flex items-center justify-center bg-charcoal text-xs text-ivory/40", props.fill && "absolute inset-0", className)}
      >
        Image unavailable
      </div>
    );
  }
  return <Image alt={alt} className={className} onError={() => setFailed(true)} {...props} />;
}
