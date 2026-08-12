import { birthday } from "@/data/birthday";
import { PhotoFrame } from "./photo-frame";
import { Reveal } from "./reveal";

export function GallerySection() {
  const { gallery } = birthday;

  return (
    <section id="momentos" className="relative px-4 py-24 md:px-6">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="font-display text-sm uppercase tracking-[0.3em] text-primary">Registros</p>
          <h2 className="mt-3 font-display text-4xl font-bold uppercase tracking-tight text-balance md:text-5xl">
            Momentos
          </h2>
          <p className="mt-4 mb-8 leading-relaxed text-muted-foreground">
            Uma galeria de momentos especiais.
          </p>
        </Reveal>

        <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
          {gallery.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 10}
              className="mb-6 "
            >
              <figure className="group">
                <div className="relative overflow-hidden rounded-xl bg-muted/20">
                  <PhotoFrame
                    src={item.image}
                    alt={item.title}
                    className="h-auto w-full object-contain"
                  />

                  <span className="absolute left-3 top-3 z-10 rounded-full bg-background/80 px-3 py-1 font-display text-[11px] uppercase tracking-widest text-accent backdrop-blur">
                    {item.tag}
                  </span>
                </div>

                <figcaption className="mt-4">
                  <h3 className="font-display text-lg font-semibold uppercase tracking-wide text-foreground">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {item.caption}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
