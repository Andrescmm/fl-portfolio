"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    quote:
      "Flavia demostró una capacidad excepcional para liderar equipos creativos y producir contenido de alta calidad. Su combinación de visión creativa y criterio estratégico la hace única en su campo.",
    name: "Christian Pérez",
    role: "Director · Shooters Creadores de Contenido",
  },
  {
    quote:
      "Durante cinco años, Flavia fue un pilar fundamental en nuestra operación. Su ojo para el detalle en la creación de contenido visual y su gestión administrativa eficiente marcaron una diferencia real.",
    name: "Benny López Polar",
    role: "Gerente General · Sommet S.A.C.",
  },
  {
    quote:
      "Flavia tiene una rara habilidad para entender tanto los procesos organizacionales como las necesidades del equipo. Su aporte fue invaluable para optimizar nuestra área de gestión académica.",
    name: "César Puma",
    role: "Director de Gestión Académica · UCSP",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="testimonios" className="py-28 px-6 bg-[#F5F1EB]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-[family-name:var(--font-dm-sans)] text-[10px] tracking-[0.35em] uppercase text-[#C9A96E] mb-4">
            Testimonios
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-medium text-[#1a1a1a] leading-tight">
            Lo que dicen
            <br />
            <em>de mí</em>
          </h2>
        </div>

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid md:grid-cols-3 gap-px bg-[#E8E4DC]"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={item}
              className="bg-[#F5F1EB] p-8 md:p-10 flex flex-col gap-8"
            >
              {/* Opening quote mark */}
              <span className="font-[family-name:var(--font-playfair)] text-5xl text-[#C9A96E] leading-none select-none">
                &ldquo;
              </span>

              <p className="font-[family-name:var(--font-dm-sans)] font-light text-[#4a4a4a] leading-relaxed text-sm flex-1 -mt-4">
                {t.quote}
              </p>

              <div className="border-t border-[#E8E4DC] pt-6">
                <p className="font-[family-name:var(--font-playfair)] text-[#1a1a1a] font-medium text-sm">
                  {t.name}
                </p>
                <p className="font-[family-name:var(--font-dm-sans)] text-[10px] tracking-[0.2em] uppercase text-[#C9A96E] mt-1">
                  {t.role}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <p className="font-[family-name:var(--font-dm-sans)] text-[10px] tracking-wide text-center text-[#bbb] mt-8">
          * Los testimonios deben ser confirmados con las personas mencionadas.
        </p>
      </div>
    </section>
  );
}
