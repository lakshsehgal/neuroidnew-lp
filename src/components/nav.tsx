"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const LINKS = [
  { href: "#services", label: "Services" },
  { href: "#compare", label: "Why Us" },
  { href: "#work", label: "Work" },
  { href: "#process", label: "Process" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Track scroll for the shrink-on-scroll effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Close on Escape
  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileOpen]);

  const close = () => setMobileOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 backdrop-blur-xl transition-[background,border,padding,box-shadow] duration-500 ease-out ${
          scrolled
            ? "bg-black/85 border-b border-white/10 py-2 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.6)]"
            : "bg-black/40 border-b border-white/[0.04] py-3"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-6 flex items-center justify-between gap-3">
          <Link
            href="/"
            onClick={close}
            className="flex items-center group animate-slide-down shrink-0"
            style={{ animationDelay: "0ms" }}
          >
            <Image
              src="/brand/logo.png"
              alt="Neuroid"
              width={160}
              height={40}
              priority
              className={`w-auto object-contain transition-all duration-500 ease-out ${
                scrolled ? "h-6 sm:h-7" : "h-7 sm:h-9"
              }`}
            />
          </Link>

          {/* Desktop nav links */}
          <nav
            className="hidden md:flex items-center gap-8 text-sm text-white/70 animate-slide-down"
            style={{ animationDelay: "80ms" }}
          >
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="hover:text-white transition-colors duration-300"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            {/* Desktop CTA (hidden on xs) */}
            <a
              href="#contact"
              className="hidden sm:inline-flex group items-center gap-2 px-4 py-2 rounded-full bg-gold text-black font-semibold text-sm hover:bg-gold-bright hover:scale-[1.04] active:scale-[0.97] transition-all duration-300 shadow-[0_0_24px_rgba(255,210,48,0.3)] animate-slide-down"
              style={{ animationDelay: "160ms" }}
            >
              Book a Call
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                className="group-hover:translate-x-0.5 transition-transform duration-300"
              >
                <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>

            {/* Mobile hamburger */}
            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              className="md:hidden w-11 h-11 grid place-items-center rounded-full border border-white/15 bg-white/[0.03] text-white/85 hover:text-white hover:border-white/30 active:scale-95 transition-all duration-300 animate-slide-down"
              style={{ animationDelay: "160ms" }}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                aria-hidden="true"
              >
                {mobileOpen ? (
                  <>
                    <line x1="6" y1="6" x2="18" y2="18" />
                    <line x1="6" y1="18" x2="18" y2="6" />
                  </>
                ) : (
                  <>
                    <line x1="4" y1="7" x2="20" y2="7" />
                    <line x1="4" y1="12" x2="20" y2="12" />
                    <line x1="4" y1="17" x2="20" y2="17" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-opacity duration-500 ease-out ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!mobileOpen}
      >
        <div className="absolute inset-0 bg-black/95 backdrop-blur-2xl" />
        <div className="absolute inset-0 bg-grid-overlay opacity-25 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_80%)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gold/[0.05] blur-[120px] pointer-events-none" />

        <div className="relative h-full flex flex-col items-center justify-center gap-7 px-6">
          {LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={close}
              className="text-4xl font-black tracking-tight text-white/90 hover:text-gold active:text-gold-bright transition-colors duration-300"
              style={{
                opacity: mobileOpen ? 1 : 0,
                transform: mobileOpen ? "translateY(0)" : "translateY(24px)",
                transition: `opacity 500ms ease ${i * 70}ms, transform 600ms cubic-bezier(0.22, 1, 0.36, 1) ${i * 70}ms`,
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={close}
            className="mt-4 inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gold text-black font-black uppercase text-sm tracking-wider hover:bg-gold-bright active:scale-95 transition-all duration-300 shadow-[0_0_50px_rgba(255,210,48,0.4)]"
            style={{
              opacity: mobileOpen ? 1 : 0,
              transform: mobileOpen ? "translateY(0)" : "translateY(24px)",
              transition:
                "opacity 500ms ease 320ms, transform 600ms cubic-bezier(0.22, 1, 0.36, 1) 320ms",
            }}
          >
            Book a Call
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
            >
              <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </>
  );
}
