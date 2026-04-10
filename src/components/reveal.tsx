"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  direction?: Direction;
  className?: string;
  threshold?: number;
};

const translations: Record<Direction, string> = {
  up: "translate3d(0, 48px, 0)",
  down: "translate3d(0, -48px, 0)",
  left: "translate3d(48px, 0, 0)",
  right: "translate3d(-48px, 0, 0)",
  none: "translate3d(0, 0, 0)",
};

/**
 * Wraps children in an element that fades + slides into view when it enters
 * the viewport. Uses IntersectionObserver so it's cheap. Respects
 * `prefers-reduced-motion` by showing content instantly.
 */
export function Reveal({
  children,
  delay = 0,
  direction = "up",
  className = "",
  threshold = 0.1,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin: "0px 0px -60px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translate3d(0, 0, 0)" : translations[direction],
        transition:
          "opacity 1000ms cubic-bezier(0.22, 1, 0.36, 1), transform 1000ms cubic-bezier(0.22, 1, 0.36, 1)",
        transitionDelay: `${delay}ms`,
        willChange: visible ? "auto" : "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}
