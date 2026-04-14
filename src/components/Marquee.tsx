"use client";

const items = [
  "Creadora de Contenido",
  "Community Manager",
  "Administradora de Negocios",
  "Trilingüe",
  "Arequipa, Perú",
  "Marketing Digital",
  "Alianzas de Marca",
  "Diseño Visual",
];

const repeated = [...items, ...items, ...items];

export default function Marquee({ dark = false }: { dark?: boolean }) {
  return (
    <div
      className={`overflow-hidden py-4 border-y ${
        dark
          ? "bg-[#1a1a1a] border-[#2a2a2a]"
          : "bg-[#F5F1EB] border-[#E8E4DC]"
      }`}
    >
      <div className="flex animate-marquee whitespace-nowrap">
        {repeated.map((item, i) => (
          <span
            key={i}
            className={`inline-flex items-center gap-5 font-[family-name:var(--font-dm-sans)] text-[10px] tracking-[0.3em] uppercase mx-5 ${
              dark ? "text-[#444]" : "text-[#B89558]"
            }`}
          >
            {item}
            <span className="text-[#C9A96E] text-base leading-none">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
