"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Sobre mí", href: "#about" },
  { label: "Qué hago", href: "#services" },
  { label: "Portafolio", href: "#portfolio" },
  { label: "Marcas", href: "#brands" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-[#FAFAF8] ${
        scrolled ? "shadow-[0_1px_0_0_#E8E4DC]" : ""
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo / Name */}
        <a
          href="#"
          className="font-[family-name:var(--font-playfair)] text-base font-semibold tracking-widest text-[#1a1a1a] uppercase"
        >
          Flavia Lopez
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-[family-name:var(--font-dm-sans)] text-[11px] tracking-[0.18em] uppercase text-[#6b6b6b] hover:text-[#1a1a1a] transition-colors duration-200"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA button */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center px-5 py-2 border border-[#1a1a1a] font-[family-name:var(--font-dm-sans)] text-[10px] tracking-[0.2em] uppercase text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-[#FAFAF8] transition-colors duration-300"
        >
          Contacto
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-[#1a1a1a]"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-[#FAFAF8] border-t border-[#E8E4DC]"
          >
            <div className="px-6 pt-8 pb-10 flex flex-col gap-0">
              {[...links, { label: "Contacto", href: "#contact" }].map((l, i) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="font-[family-name:var(--font-playfair)] text-2xl font-medium text-[#1a1a1a] py-4 border-b border-[#E8E4DC] last:border-b-0 hover:text-[#C9A96E] transition-colors duration-200"
                  style={{ transitionDelay: `${i * 40}ms` }}
                >
                  {l.label}
                </a>
              ))}

              {/* Social links */}
              <div className="flex gap-6 mt-8 pt-6 border-t border-[#E8E4DC]">
                <a
                  href="https://www.instagram.com/flopezagostinelli"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="font-[family-name:var(--font-dm-sans)] text-xs tracking-[0.2em] uppercase text-[#6b6b6b] hover:text-[#C9A96E] transition-colors"
                >
                  Instagram
                </a>
                <a
                  href="https://www.tiktok.com/@flopezagostinelli"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="font-[family-name:var(--font-dm-sans)] text-xs tracking-[0.2em] uppercase text-[#6b6b6b] hover:text-[#C9A96E] transition-colors"
                >
                  TikTok
                </a>
                <a
                  href="https://www.linkedin.com/in/flavia-lopez-agostinelli/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="font-[family-name:var(--font-dm-sans)] text-xs tracking-[0.2em] uppercase text-[#6b6b6b] hover:text-[#C9A96E] transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
