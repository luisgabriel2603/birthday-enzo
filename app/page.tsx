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
      <ParticleBackground />

      <Navbar />

      <div className="relative z-10">

        <section>
          <HeroSection />
        </section>

        <Reveal>
          <section>
            <HeroStory />
          </section>
        </Reveal>

        <Reveal>
          <section>
            <MessageSection />
          </section>
        </Reveal>

        <Reveal>
          <section>
            <SetlistSection />
          </section>
        </Reveal>

        <section>
          <GallerySection />
        </section>

      </div>

      <Footer />
    </main>
  );
}
