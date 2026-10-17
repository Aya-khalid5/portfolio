"use client";

import { useState } from "react";
import { BarChart3 } from "lucide-react";

interface ProjectImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  /** Load immediately (use for above-the-fold images). */
  priority?: boolean;
}

/**
 * Renders a screenshot when the file exists at `src`. If the file is missing
 * (404), it falls back to a clearly labeled placeholder tile instead of a
 * broken image icon.
 */
export default function ProjectImage({
  src,
  alt,
  className,
  width,
  height,
  priority = false,
}: ProjectImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed || !src) {
    return (
      <div
        className={`flex flex-col items-center justify-center gap-3 border border-dashed border-border bg-peach-soft/40 text-clay-dark ${className ?? ""}`}
        role="img"
        aria-label={`${alt} (screenshot not added yet)`}
      >
        <BarChart3 size={32} strokeWidth={1.5} />
        <p className="px-4 text-center text-xs font-medium text-ink-soft">
          Screenshot coming soon
        </p>
      </div>
    );
  }

  // eslint-disable-next-line @next/next/no-img-element
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      onError={() => setFailed(true)}
      className={className}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
    />
  );
}
