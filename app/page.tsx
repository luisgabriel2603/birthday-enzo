import { Footer } from "@/components/birthday/footer";
import { GallerySection } from "@/components/birthday/gallery-section";
import { HeroSection } from "@/components/birthday/hero-section";
import { HeroStory } from "@/components/birthday/hero-story";
import { MessageSection } from "@/components/birthday/message-section";
import { Navbar } from "@/components/birthday/navbar";
import { ParticleBackground } from "@/components/birthday/particle-background";
import { Reveal } from "@/components/birthday/reveal";
import { SetlistSection } from "@/components/birthday/setlist-section";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-neutral-950 text-white">
      {/* Background global */}
      <ParticleBackground />

      {/* Navegação */}
      <Navbar />

      {/* Conteúdo */}
      <div className="relative z-10">
        {/* HERO */}
        <section id="inicio">
          <HeroSection />
        </section>

        {/* HISTÓRIA */}
        <Reveal>
          <section id="historia">
            <HeroStory />
          </section>
        </Reveal>

        {/* MENSAGEM */}
        <Reveal>
          <section id="mensagem">
            <MessageSection />
          </section>
        </Reveal>


        {/* PLAYLIST / SETLIST */}
        <Reveal>
          <section id="setlist">
            <SetlistSection />
          </section>
        </Reveal>

        {/* GALERIA */}

        <section id="galeria">
          <GallerySection />
        </section>


      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}