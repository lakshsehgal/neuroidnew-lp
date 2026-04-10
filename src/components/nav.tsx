"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 backdrop-blur-xl transition-[background,border,padding,box-shadow] duration-500 ease-out ${
        scrolled
          ? "bg-black/85 border-b border-white/10 py-2 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.6)]"
          : "bg-black/40 border-b border-white/[0.04] py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center group animate-slide-down"
          style={{ animationDelay: "0ms" }}
        >
          <Image
            src="/brand/logo.png"
            alt="Neuroid"
            width={160}
            height={40}
            priority
            className={`w-auto object-contain transition-all duration-500 ease-out ${
              scrolled ? "h-7" : "h-9"
            }`}
          />
        </Link>

        <nav
          className="hidden md:flex items-center gap-8 text-sm text-white/70 animate-slide-down"
          style={{ animationDelay: "80ms" }}
        >
          <a href="#services" className="relative hover:text-white transition-colors duration-300">
            Services
          </a>
          <a href="#compare" className="relative hover:text-white transition-colors duration-300">
            Why Us
          </a>
          <a href="#work" className="relative hover:text-white transition-colors duration-300">
            Work
          </a>
          <a href="#process" className="relative hover:text-white transition-colors duration-300">
            Process
          </a>
        </nav>

        <a
          href="#contact"
          className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold text-black font-semibold text-sm hover:bg-gold-bright hover:scale-[1.04] active:scale-[0.97] transition-all duration-300 shadow-[0_0_24px_rgba(255,210,48,0.3)] animate-slide-down"
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
      </div>
    </header>
  );
}
