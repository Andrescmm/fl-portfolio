"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Download } from "lucide-react";

const stats = [
  { value: "5+", label: "Años de experiencia" },
  { value: "10+", label: "Marcas y organizaciones" },
  { value: "3", label: "Idiomas" },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" ref={ref} className="py-16 md:py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Foto */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full max-w-sm mx-auto md:max-w-none"
          >
            <div className="relative w-full h-[480px] md:h-[560px] overflow-hidden bg-[#EDE8DF]">
              <Image
                src="/images/about.jpg"
                alt="Flavia Lopez"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 90vw, 45vw"
                quality={90}
                priority
              />
            </div>
            {/* Borde decorativo */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-[#C9A96E] -z-10" />
          </motion.div>

          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          >
            <p className="font-[family-name:var(--font-dm-sans)] text-xs tracking-[0.3em] uppercase text-[#C9A96E] mb-4">
              Sobre mí
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-medium text-[#1a1a1a] leading-tight mb-6">
              Donde la creatividad
              <br />
              encuentra la <em>estrategia</em>
            </h2>
            <p className="font-[family-name:var(--font-dm-sans)] font-light text-[#6b6b6b] leading-relaxed mb-5">
              Soy Flavia Lopez — Bachiller en Administración de Negocios con mención en Marketing por la Universidad Católica San Pablo, y creadora de contenido basada en Arequipa, Perú. Trilingüe en español, francés e inglés, he desarrollado experiencia en corporaciones multinacionales, agencias creativas y ONGs.
            </p>
            <p className="font-[family-name:var(--font-dm-sans)] font-light text-[#6b6b6b] leading-relaxed mb-10">
              Desde la gestión de campañas digitales para múltiples marcas como Community Manager, hasta el apoyo en operaciones comerciales en empresas como Southern Copper Corporation y FERREYROS — aporto pensamiento estratégico y visión creativa a cada colaboración.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-10 border-t border-[#E8E4DC] mb-10">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="font-[family-name:var(--font-playfair)] text-3xl font-semibold text-[#1a1a1a]">
                    {s.value}
                  </p>
                  <p className="font-[family-name:var(--font-dm-sans)] text-xs text-[#6b6b6b] mt-1 leading-snug">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>

            {/* CV + Redes */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="/flavia-lopez-cv.pdf"
                download="Flavia_Lopez_CV.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 border border-[#1a1a1a] text-[#1a1a1a] font-[family-name:var(--font-dm-sans)] text-xs tracking-[0.15em] uppercase hover:bg-[#1a1a1a] hover:text-[#FAFAF8] transition-colors duration-300"
              >
                <Download size={13} />
                Descargar CV
              </a>

              <a
                href="https://www.instagram.com/flopezagostinelli"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 border border-[#E8E4DC] text-[#6b6b6b] font-[family-name:var(--font-dm-sans)] text-xs tracking-[0.15em] uppercase hover:border-[#C9A96E] hover:text-[#C9A96E] transition-colors duration-300"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
                Instagram
              </a>

              <a
                href="https://www.tiktok.com/@flopezagostinelli"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 border border-[#E8E4DC] text-[#6b6b6b] font-[family-name:var(--font-dm-sans)] text-xs tracking-[0.15em] uppercase hover:border-[#C9A96E] hover:text-[#C9A96E] transition-colors duration-300"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
                </svg>
                TikTok
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
