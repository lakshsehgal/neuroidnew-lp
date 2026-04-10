import Link from "next/link";

export function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-black/50 border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-gold-bright to-gold-dim grid place-items-center shadow-[0_0_20px_rgba(229,184,76,0.3)]">
            <span className="text-black font-black text-sm leading-none">N</span>
          </div>
          <span className="font-black tracking-tight text-lg">
            Neuroid<span className="text-gold">.</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
          <a href="#services" className="hover:text-white transition-colors">
            Services
          </a>
          <a href="#compare" className="hover:text-white transition-colors">
            Why Us
          </a>
          <a href="#work" className="hover:text-white transition-colors">
            Work
          </a>
          <a href="#process" className="hover:text-white transition-colors">
            Process
          </a>
        </nav>

        <a
          href="#contact"
          className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold text-black font-semibold text-sm hover:bg-gold-bright transition-colors shadow-[0_0_20px_rgba(229,184,76,0.25)]"
        >
          Book a Call
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            className="group-hover:translate-x-0.5 transition-transform"
          >
            <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </header>
  );
}
