"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { ChevronLeft, ChevronRight, ExternalLink, X } from "lucide-react";
import type { ProjectScreenshot } from "@/data/projects";
import ProjectImage from "@/components/ui/ProjectImage";

interface MediaContextValue {
  images: ProjectScreenshot[];
  openAt: (index: number, trigger: HTMLElement | null) => void;
}

const MediaContext = createContext<MediaContextValue | null>(null);

function useMedia(): MediaContextValue {
  const ctx = useContext(MediaContext);
  if (!ctx) {
    throw new Error("Project media components must be inside ProjectMediaProvider");
  }
  return ctx;
}

const iconButton =
  "focus-ring inline-flex h-11 min-w-[44px] items-center justify-center gap-2 rounded-full border border-canvas/30 px-3 text-sm text-canvas transition-colors hover:bg-canvas/15";

/**
 * Holds the screenshot viewer for a project page. The hero image and the
 * gallery both open the same viewer, so keyboard focus, Escape, and
 * previous/next behave consistently.
 */
export function ProjectMediaProvider({
  images,
  title,
  children,
}: {
  images: ProjectScreenshot[];
  title: string;
  children: ReactNode;
}) {
  const [index, setIndex] = useState<number | null>(null);
  const triggerRef = useRef<HTMLElement | null>(null);
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const closeRef = useRef<HTMLButtonElement | null>(null);

  const openAt = useCallback((i: number, trigger: HTMLElement | null) => {
    triggerRef.current = trigger;
    setIndex(i);
  }, []);

  const close = useCallback(() => {
    setIndex(null);
    triggerRef.current?.focus();
  }, []);

  const step = useCallback(
    (delta: number) => {
      setIndex((current) =>
        current === null ? current : (current + delta + images.length) % images.length
      );
    },
    [images.length]
  );

  const isOpen = index !== null;

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        close();
      } else if (event.key === "ArrowLeft" && images.length > 1) {
        event.preventDefault();
        step(-1);
      } else if (event.key === "ArrowRight" && images.length > 1) {
        event.preventDefault();
        step(1);
      } else if (event.key === "Tab") {
        const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(
          "button:not([disabled]), a[href]"
        );
        if (!focusable || focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        const active = document.activeElement;
        if (event.shiftKey && active === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && active === last) {
          event.preventDefault();
          first.focus();
        }
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen, close, step, images.length]);

  const current = index !== null ? images[index] : null;

  return (
    <MediaContext.Provider value={{ images, openAt }}>
      {children}

      {current && index !== null && (
        <div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label={`${title} screenshot viewer`}
          className="fixed inset-0 z-[100] flex animate-fade flex-col bg-ink/95"
          onClick={close}
        >
          <div
            className="flex items-center justify-between gap-3 px-3 py-3 sm:px-5"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-sm text-canvas/80" aria-live="polite">
              {index + 1} / {images.length}
            </p>
            <div className="flex items-center gap-2">
              {images.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() => step(-1)}
                    className={iconButton}
                    aria-label="Previous screenshot"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    type="button"
                    onClick={() => step(1)}
                    className={iconButton}
                    aria-label="Next screenshot"
                  >
                    <ChevronRight size={18} />
                  </button>
                </>
              )}
              <a
                href={current.src}
                target="_blank"
                rel="noopener noreferrer"
                className={iconButton}
              >
                <ExternalLink size={16} aria-hidden="true" />
                <span className="hidden sm:inline">Open full size</span>
                <span className="sr-only sm:hidden">Open full size in a new tab</span>
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
              <button
                ref={closeRef}
                type="button"
                onClick={close}
                className={iconButton}
                aria-label="Close screenshot viewer"
              >
                <X size={18} />
                <span className="hidden sm:inline">Close</span>
              </button>
            </div>
          </div>

          <div className="flex min-h-0 flex-1 items-center justify-center overflow-auto px-3 sm:px-5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              key={current.src}
              src={current.src}
              alt={current.caption}
              width={current.width}
              height={current.height}
              onClick={(e) => e.stopPropagation()}
              className="h-auto max-h-[calc(100dvh-10rem)] w-auto max-w-full rounded-lg bg-white object-contain"
            />
          </div>

          <p
            className="mx-auto max-w-3xl px-4 py-4 text-center text-sm leading-relaxed text-canvas/90"
            onClick={(e) => e.stopPropagation()}
          >
            {current.caption}
          </p>
        </div>
      )}
    </MediaContext.Provider>
  );
}

/** Large first screenshot. Opens the viewer at index 0. */
export function ProjectHeroImage({ title }: { title: string }) {
  const { images, openAt } = useMedia();
  const shot = images[0];
  if (!shot) return null;

  return (
    <figure>
      <button
        type="button"
        aria-haspopup="dialog"
        aria-label={`View larger: ${shot.caption}`}
        onClick={(e) => openAt(0, e.currentTarget)}
        className="focus-ring block w-full cursor-zoom-in overflow-hidden rounded-2xl border border-border bg-peach-soft/30 transition-colors duration-200 hover:border-clay"
      >
        <ProjectImage
          src={shot.src}
          alt={shot.caption || `${title} screenshot`}
          width={shot.width}
          height={shot.height}
          priority
          className={
            shot.width && shot.height
              ? "h-auto w-full"
              : "aspect-video w-full object-contain"
          }
        />
      </button>
      <figcaption className="mt-2 text-xs leading-relaxed text-ink-soft">
        {shot.caption} Select the image to enlarge it.
      </figcaption>
    </figure>
  );
}

/** The remaining screenshots, uncropped, each opening the viewer. */
export function ProjectGallery() {
  const { images, openAt } = useMedia();
  const rest = images.slice(1);
  if (rest.length === 0) return null;

  return (
    <ul className="mt-6 grid gap-8 sm:grid-cols-2">
      {rest.map((shot, i) => (
        <li key={shot.src}>
          <figure>
            <button
              type="button"
              aria-haspopup="dialog"
              aria-label={`View larger: ${shot.caption}`}
              onClick={(e) => openAt(i + 1, e.currentTarget)}
              className="focus-ring block w-full cursor-zoom-in overflow-hidden rounded-2xl border border-border bg-peach-soft/30 transition-colors duration-200 hover:border-clay"
            >
              <ProjectImage
                src={shot.src}
                alt={shot.caption}
                width={shot.width}
                height={shot.height}
                className={
                  shot.width && shot.height
                    ? "h-auto w-full"
                    : "aspect-video w-full object-contain"
                }
              />
            </button>
            <figcaption className="mt-2 text-xs leading-relaxed text-ink-soft">
              {shot.caption}
            </figcaption>
          </figure>
        </li>
      ))}
    </ul>
  );
}
