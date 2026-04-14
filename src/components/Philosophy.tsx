"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Philosophy() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-20 md:py-32 lg:py-40 px-6 bg-[#FAFAF8] overflow-hidden">
      <div ref={ref} className="max-w-5xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-[family-name:var(--font-dm-sans)] text-[10px] tracking-[0.35em] uppercase text-[#C9A96E] mb-10"
        >
          Mi filosofía
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
          className="font-[family-name:var(--font-playfair)] text-[2rem] sm:text-4xl md:text-6xl lg:text-[5rem] font-medium text-[#1a1a1a] leading-[1.15] mb-10"
        >
          El contenido que conecta,
          <br />
          <em className="text-[#C9A96E]">la estrategia que convierte.</em>
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.9, delay: 0.45 }}
          style={{ originX: 0.5 }}
          className="w-12 h-px bg-[#C9A96E] mx-auto"
        />
      </div>
    </section>
  );
}
