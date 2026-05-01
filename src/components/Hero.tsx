"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-[#FAFAF8] md:overflow-hidden md:min-h-screen md:flex md:flex-col">

      {/* ── Desktop: foto full bleed (oculta en móvil) ── */}
      <div className="hidden md:block absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt="Flavia Lopez"
          fill
          className="object-cover object-center"
          priority
          quality={90}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAFAF8]/95 via-[#FAFAF8]/70 to-transparent" />
      </div>

      {/* ── Contenido ── */}
      <div className="relative z-10 flex flex-col justify-center md:flex-1 px-6 md:px-16 lg:px-28 pt-28 pb-16 md:py-0 max-w-2xl">

        {/* Línea decorativa dorada — solo móvil */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="md:hidden w-12 h-px bg-[#C9A96E] origin-left mb-8"
        />

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-[family-name:var(--font-dm-sans)] text-[10px] md:text-xs tracking-[0.25em] md:tracking-[0.3em] uppercase text-[#C9A96E] mb-6 md:mb-6 leading-relaxed"
        >
          Administradora de Negocios
          <br className="md:hidden" />
          <span className="hidden md:inline"> & </span>
          <span className="md:hidden">& </span>
          Creadora de Contenido
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="font-[family-name:var(--font-playfair)] text-6xl sm:text-7xl md:text-7xl lg:text-8xl font-medium text-[#1a1a1a] leading-[1.02] tracking-tight mb-8 md:mb-8"
        >
          Flavia
          <br />
          <span className="italic text-[#C9A96E]">Lopez</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="font-[family-name:var(--font-dm-sans)] font-light text-base md:text-base lg:text-lg text-[#6b6b6b] max-w-sm leading-relaxed mb-10 md:mb-12"
        >
          Creativa trilingüe con visión de negocios — diseñando estrategias de contenido y alianzas de marca que generan resultados reales.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75 }}
          className="flex flex-wrap items-center gap-3"
        >
          <a
            href="#portfolio"
            className="px-8 py-3.5 bg-[#1a1a1a] text-[#FAFAF8] font-[family-name:var(--font-dm-sans)] text-sm tracking-wide hover:bg-[#333] transition-colors duration-300"
          >
            Ver mi trabajo
          </a>

          <div className="flex items-center gap-2">
            <a
              href="https://www.instagram.com/flopezagostinelli"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="inline-flex items-center justify-center w-11 h-11 border border-[#1a1a1a] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-[#FAFAF8] transition-colors duration-300"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
            <a
              href="https://www.tiktok.com/@flopezagostinelli"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="inline-flex items-center justify-center w-11 h-11 border border-[#1a1a1a] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-[#FAFAF8] transition-colors duration-300"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
              </svg>
            </a>
          </div>
        </motion.div>

        {/* Mini foto circular como acento — solo móvil */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="md:hidden mt-16 flex items-center gap-4"
        >
          <div className="relative w-14 h-14 rounded-full overflow-hidden bg-[#EDE8DF] flex-shrink-0">
            <Image
              src="/images/hero.jpg"
              alt="Flavia Lopez"
              fill
              className="object-cover object-top"
              quality={85}
              sizes="56px"
            />
          </div>
          <div>
            <p className="font-[family-name:var(--font-dm-sans)] text-[10px] tracking-[0.2em] uppercase text-[#6b6b6b]">
              Basada en
            </p>
            <p className="font-[family-name:var(--font-playfair)] text-base text-[#1a1a1a]">
              Arequipa, Perú
            </p>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator solo desktop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.7 }}
        className="hidden md:flex absolute bottom-10 left-16 lg:left-28 items-center gap-3 z-10"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ArrowDown size={14} className="text-[#C9A96E]" />
        </motion.div>
        <span className="font-[family-name:var(--font-dm-sans)] text-[10px] tracking-[0.25em] uppercase text-[#C9A96E]">
          Explorar
        </span>
      </motion.div>

    </section>
  );
}
