"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";

type Category = "Todo" | "Contenido" | "Campañas" | "Marcas";

const filters: Category[] = ["Todo", "Contenido", "Campañas", "Marcas"];

const projects = [
  {
    id: 1,
    title: "Bath & Body Works",
    category: "Marcas",
    size: "large",
    image: "/images/portfolio-1.jpg",
    description: "Creación de contenido para alianza de marca",
  },
  {
    id: 2,
    title: "Contenido de Fragancia",
    category: "Contenido",
    size: "small",
    image: "/images/portfolio-2.jpg",
    description: "Narrativa visual de producto",
  },
  {
    id: 3,
    title: "Serie Editorial",
    category: "Contenido",
    size: "small",
    image: "/images/portfolio-3.jpg",
    description: "Sesión editorial en exteriores",
  },
  {
    id: 4,
    title: "Campaña Lifestyle",
    category: "Campañas",
    size: "small",
    image: "/images/portfolio-4.jpg",
    description: "Producción de contenido lifestyle",
  },
  {
    id: 5,
    title: "Street Style",
    category: "Contenido",
    size: "small",
    image: "/images/portfolio-5.jpg",
    description: "Contenido de moda y estilo de vida",
  },
  {
    id: 6,
    title: "Detrás del Lente",
    category: "Contenido",
    size: "small",
    image: "/images/portfolio-6.jpg",
    description: "Proceso de creación de contenido",
  },
];

export default function Portfolio() {
  const [active, setActive] = useState<Category>("Todo");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const filtered =
    active === "Todo" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="portfolio" className="py-16 md:py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12">
          <div>
            <p className="font-[family-name:var(--font-dm-sans)] text-xs tracking-[0.3em] uppercase text-[#C9A96E] mb-4">
              Portafolio
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-medium text-[#1a1a1a] leading-tight">
              Trabajo
              <br />
              <em>Seleccionado</em>
            </h2>
          </div>

          {/* Filters */}
          <div className="flex gap-2 flex-wrap">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`font-[family-name:var(--font-dm-sans)] text-xs tracking-wide px-4 py-2 border transition-colors duration-200 ${
                  active === f
                    ? "bg-[#1a1a1a] text-[#FAFAF8] border-[#1a1a1a]"
                    : "bg-transparent text-[#6b6b6b] border-[#E8E4DC] hover:border-[#1a1a1a] hover:text-[#1a1a1a]"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className={`group relative overflow-hidden bg-[#EDE8DF] cursor-pointer ${
                  project.size === "large"
                    ? "col-span-2 row-span-2 aspect-[4/3] md:aspect-auto"
                    : "aspect-square"
                }`}
              >
                {project.size === "large" ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 66vw"
                  />
                ) : (
                  <div className="aspect-square relative">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 33vw"
                    />
                  </div>
                )}

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[#1a1a1a]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col items-center justify-center p-6 text-center">
                  <span className="font-[family-name:var(--font-dm-sans)] text-[10px] tracking-[0.25em] uppercase text-[#C9A96E] mb-2">
                    {project.category}
                  </span>
                  <h3 className="font-[family-name:var(--font-playfair)] text-white text-lg font-medium mb-2">
                    {project.title}
                  </h3>
                  <p className="font-[family-name:var(--font-dm-sans)] text-white/70 text-xs">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
