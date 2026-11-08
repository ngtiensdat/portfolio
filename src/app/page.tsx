import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import CertificatesShowcase from "@/components/CertificatesShowcase";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { InteractiveSpotlight } from "@/components/effects/InteractiveSpotlight";
import { ScrollProgress } from "@/components/effects/ScrollProgress";
import { CommandPalette } from "@/components/effects/CommandPalette";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-slate-50 dark:bg-[#060e0a] text-slate-900 dark:text-slate-100 transition-colors duration-300 relative overflow-x-hidden">
      <ScrollProgress />
      <InteractiveSpotlight />
      <CommandPalette />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <CertificatesShowcase />
      <Contact />
      <Footer />
    </main>
  );
}
