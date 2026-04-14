export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#1a1a1a] py-10 md:py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-6 md:flex-row md:justify-between">
        <p className="font-[family-name:var(--font-playfair)] text-white text-lg">
          Flavia Lopez
        </p>

        <div className="flex gap-8">
          <a
            href="https://www.instagram.com/flopezagostinelli"
            target="_blank"
            rel="noopener noreferrer"
            className="font-[family-name:var(--font-dm-sans)] text-xs tracking-wide text-[#555] hover:text-[#C9A96E] transition-colors duration-200"
          >
            Instagram
          </a>
          <a
            href="https://www.tiktok.com/@flopezagostinelli"
            target="_blank"
            rel="noopener noreferrer"
            className="font-[family-name:var(--font-dm-sans)] text-xs tracking-wide text-[#555] hover:text-[#C9A96E] transition-colors duration-200"
          >
            TikTok
          </a>
          <a
            href="https://www.linkedin.com/in/flavia-lopez-agostinelli/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-[family-name:var(--font-dm-sans)] text-xs tracking-wide text-[#555] hover:text-[#C9A96E] transition-colors duration-200"
          >
            LinkedIn
          </a>
        </div>

        <p className="font-[family-name:var(--font-dm-sans)] text-xs text-[#555]">
          © {year} Flavia Lopez. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
