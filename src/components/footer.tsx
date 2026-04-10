export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/[0.06] py-12 mt-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-gold-bright to-gold-dim grid place-items-center">
              <span className="text-black font-black text-xs leading-none">N</span>
            </div>
            <span className="font-black tracking-tight">
              Neuroid<span className="text-gold">.</span>
            </span>
          </div>

          <div className="text-sm text-white/40">
            © {year} Neuroid Media. All rights reserved.
          </div>

          <div className="flex items-center gap-6 text-sm text-white/60">
            <a href="mailto:hello@neuroidmedia.com" className="hover:text-white transition-colors">
              Contact
            </a>
            <a
              href="https://linkedin.com/company/neuroid-media"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://instagram.com/neuroidmedia"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
