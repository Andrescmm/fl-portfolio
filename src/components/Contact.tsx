"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    // TODO: wire up Resend API route
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("sent");
  }

  return (
    <section id="contact" className="py-16 md:py-28 px-6 bg-[#F5F1EB]">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p className="font-[family-name:var(--font-dm-sans)] text-xs tracking-[0.3em] uppercase text-[#C9A96E] mb-4">
              Contacto
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-medium text-[#1a1a1a] leading-tight mb-6">
              Creemos algo
              <br />
              <em>extraordinario</em>
            </h2>
            <p className="font-[family-name:var(--font-dm-sans)] font-light text-[#6b6b6b] leading-relaxed mb-10">
              Si eres una marca buscando un socio creativo o tienes un proyecto en mente, me encantaría escucharte.
            </p>

            <div className="space-y-4">
              <div>
                <span className="font-[family-name:var(--font-dm-sans)] text-[10px] tracking-[0.25em] uppercase text-[#C9A96E]">
                  Correo
                </span>
                <p className="font-[family-name:var(--font-dm-sans)] text-sm text-[#1a1a1a] mt-1">
                  flopezagostinelli@gmail.com
                </p>
              </div>
              <div>
                <span className="font-[family-name:var(--font-dm-sans)] text-[10px] tracking-[0.25em] uppercase text-[#C9A96E]">
                  Ubicación
                </span>
                <p className="font-[family-name:var(--font-dm-sans)] text-sm text-[#1a1a1a] mt-1">
                  Arequipa, Perú
                </p>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          >
            {status === "sent" ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20">
                <p className="font-[family-name:var(--font-playfair)] text-2xl text-[#1a1a1a] mb-3">
                  Gracias.
                </p>
                <p className="font-[family-name:var(--font-dm-sans)] text-sm text-[#6b6b6b]">
                  Me pondré en contacto pronto.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="font-[family-name:var(--font-dm-sans)] text-[10px] tracking-[0.25em] uppercase text-[#6b6b6b] block mb-2">
                      Nombre
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Tu nombre"
                      className="w-full bg-transparent border-b border-[#C9C4BB] py-2 font-[family-name:var(--font-dm-sans)] text-sm text-[#1a1a1a] placeholder-[#bbb] focus:outline-none focus:border-[#1a1a1a] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="font-[family-name:var(--font-dm-sans)] text-[10px] tracking-[0.25em] uppercase text-[#6b6b6b] block mb-2">
                      Correo
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="your@email.com"
                      className="w-full bg-transparent border-b border-[#C9C4BB] py-2 font-[family-name:var(--font-dm-sans)] text-sm text-[#1a1a1a] placeholder-[#bbb] focus:outline-none focus:border-[#1a1a1a] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-[family-name:var(--font-dm-sans)] text-[10px] tracking-[0.25em] uppercase text-[#6b6b6b] block mb-2">
                    Empresa / Marca
                  </label>
                  <input
                    type="text"
                    placeholder="Tu marca (opcional)"
                    className="w-full bg-transparent border-b border-[#C9C4BB] py-2 font-[family-name:var(--font-dm-sans)] text-sm text-[#1a1a1a] placeholder-[#bbb] focus:outline-none focus:border-[#1a1a1a] transition-colors"
                  />
                </div>

                <div>
                  <label className="font-[family-name:var(--font-dm-sans)] text-[10px] tracking-[0.25em] uppercase text-[#6b6b6b] block mb-2">
                    Mensaje
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Cuéntame sobre tu proyecto..."
                    className="w-full bg-transparent border-b border-[#C9C4BB] py-2 font-[family-name:var(--font-dm-sans)] text-sm text-[#1a1a1a] placeholder-[#bbb] focus:outline-none focus:border-[#1a1a1a] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="flex items-center gap-3 px-8 py-3.5 bg-[#1a1a1a] text-[#FAFAF8] font-[family-name:var(--font-dm-sans)] text-sm tracking-wide hover:bg-[#333] transition-colors duration-300 disabled:opacity-60"
                >
                  {status === "sending" ? "Enviando..." : "Enviar mensaje"}
                  <Send size={14} />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
