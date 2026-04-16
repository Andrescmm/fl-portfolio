"use client";

import { motion, type Variants } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Camera, BarChart2, Megaphone, FileText, Users, Layers } from "lucide-react";

const services = [
  {
    icon: Camera,
    category: "Creación de Contenido",
    title: "Narrativa Visual",
    description:
      "Fotografía, video y contenido editorial diseñados para cautivar audiencias y comunicar la esencia de tu marca.",
  },
  {
    icon: Megaphone,
    category: "Creación de Contenido",
    title: "Estrategia en Redes Sociales",
    description:
      "Planificación, producción y ejecución de contenido de principio a fin en Instagram, TikTok, YouTube y más.",
  },
  {
    icon: FileText,
    category: "Creación de Contenido",
    title: "Redacción de Marca",
    description:
      "Textos que hablan con la voz de tu marca — desde captions hasta narrativas completas de campaña.",
  },
  {
    icon: BarChart2,
    category: "Administración de Negocios",
    title: "Operaciones de Marca",
    description:
      "Procesos optimizados, gestión de flujos de trabajo y estrategia operativa para que tu marca funcione con eficiencia.",
  },
  {
    icon: Users,
    category: "Administración de Negocios",
    title: "Gestión de Alianzas",
    description:
      "Negociación, incorporación y gestión de colaboraciones con marcas desde el primer contacto hasta la entrega final.",
  },
  {
    icon: Layers,
    category: "Administración de Negocios",
    title: "Gestión de Proyectos",
    description:
      "Supervisión de campañas creativas de principio a fin — tiempos, presupuestos, equipos y resultados.",
  },
];

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="py-16 md:py-28 px-6 bg-[#F5F1EB]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-[family-name:var(--font-dm-sans)] text-xs tracking-[0.3em] uppercase text-[#C9A96E] mb-4">
            Qué hago
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-medium text-[#1a1a1a] leading-tight">
            Una doble experiencia,
            <br />
            <em>una visión</em>
          </h2>
        </div>

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E8E4DC]"
        >
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                variants={item}
                className="bg-[#F5F1EB] p-8 group hover:bg-[#FAFAF8] transition-colors duration-300"
              >
                <div className="mb-6">
                  <span className="font-[family-name:var(--font-dm-sans)] text-[10px] tracking-[0.25em] uppercase text-[#C9A96E]">
                    {s.category}
                  </span>
                </div>
                <Icon
                  size={24}
                  strokeWidth={1.5}
                  className="text-[#1a1a1a] mb-4 group-hover:text-[#C9A96E] transition-colors duration-300"
                />
                <h3 className="font-[family-name:var(--font-playfair)] text-xl font-medium text-[#1a1a1a] mb-3">
                  {s.title}
                </h3>
                <p className="font-[family-name:var(--font-dm-sans)] text-sm font-light text-[#6b6b6b] leading-relaxed">
                  {s.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
