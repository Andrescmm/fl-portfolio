import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Philosophy from "@/components/Philosophy";
import Brands from "@/components/Brands";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <About />
      <Services />
      <Portfolio />
      <Philosophy />
      <Brands />
      <Contact />
    </>
  );
}
