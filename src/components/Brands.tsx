"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const brands = [
  "FERREYROS S.A.",
  "Southern Copper",
  "Tisur",
  "Sommet S.A.C.",
  "Shooters",
  "Consultora Sapiens",
  "UCSP",
  "Patrulla Ecológica",
];

export default function Brands() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="brands" className="py-16 md:py-28 px-6 bg-[#1a1a1a]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-[family-name:var(--font-dm-sans)] text-xs tracking-[0.3em] uppercase text-[#C9A96E] mb-4">
            Confiaron en mí
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-medium text-white leading-tight">
            Marcas con las que
            <br />
            <em className="text-[#C9A96E]">he trabajado</em>
          </h2>
        </div>

        {/* Brand logo grid */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#333]"
        >
          {brands.map((brand, i) => (
            <div
              key={i}
              className="bg-[#1a1a1a] aspect-[3/2] flex items-center justify-center group hover:bg-[#222] transition-colors duration-300"
            >
              {/* Replace inner div with <Image> for actual logos */}
              <span className="font-[family-name:var(--font-playfair)] text-[#444] text-sm italic group-hover:text-[#C9A96E] transition-colors duration-300">
                {brand}
              </span>
            </div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="font-[family-name:var(--font-dm-sans)] text-xs text-center text-[#555] mt-8 tracking-wide"
        >
          Y muchas más colaboraciones nacionales e internacionales
        </motion.p>
      </div>
    </section>
  );
}
