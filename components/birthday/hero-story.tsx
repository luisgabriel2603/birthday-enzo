import { PhotoFrame } from "./photo-frame"
import { Reveal } from "./reveal"
import { birthday } from "@/data/birthday"

export function HeroStory() {
  const { story, stats } = birthday

  return (
    <section id="heroi" className="relative px-4 py-24 md:px-6">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        <Reveal>
          <PhotoFrame src={story.portrait} alt="Retrato do herói"
            className="aspect-[4/5] w-full"
          />

        </Reveal>

        <div>
          <Reveal>
            <p className="font-display text-sm uppercase tracking-[0.3em] text-primary">Dossiê</p>
            <h2 className="mt-3 font-display text-4xl font-bold uppercase leading-tight tracking-tight text-balance md:text-5xl">
              {story.title}
            </h2>
          </Reveal>

          <div className="mt-6 space-y-4">
            {story.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 120}>
                <p className="leading-relaxed text-muted-foreground">{p}</p>
              </Reveal>
            ))}
          </div>

          {/* Stats HUD */}

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 120}>
                <div
                  className="hud-border group relative overflow-hidden border border-primary/30 bg-card/60 p-4 text-center backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-primary/80 hover:bg-primary/[0.06] hover:shadow-[0_0_30px_rgba(220,38,38,0.25)]"       >
                  {/* Glow interno */}
                  <div
                    className=" pointer-events-none absolute -inset-10 bg-primary/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                    aria-hidden="true"
                  />


                  {/* Linha de escaneamento */}
                  <div
                    className="pointer-events-none absolute left-0 top-0 z-20 h-px w-full bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 shadow-[0_0_12px_rgba(220,38,38,0.9)] group-hover:animate-[scan_1.5s_linear_infinite] group-hover:opacity-100"
                    aria-hidden="true"
                  />


                  {/* Grid holográfico */}
                  <div
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px]"
                    aria-hidden="true"
                  />

                  {/* Cantos HUD */}
                  <div
                    className=" pointer-events-none absolute left-0 top-0 h-5 w-5 border-l border-t border-primary/60 transition-all duration-300 group-hover:h-8 group-hover:w-8"
                    aria-hidden="true"
                  />

                  <div
                    className=" pointer-events-none absolute right-0 top-0 h-5 w-5 border-r border-t border-primary/60 transition-all duration-300 group-hover:h-8 group-hover:w-8"
                    aria-hidden="true"
                  />

                  <div
                    className=" pointer-events-none absolute bottom-0 left-0 h-5 w-5 border-b border-l border-primary/60 transition-all duration-300 group-hover:h-8 group-hover:w-8"
                    aria-hidden="true"
                  />

                  <div
                    className=" pointer-events-none absolute bottom-0 right-0 h-5 w-5 border-b border-r border-primary/60 transition-all duration-300 group-hover:h-8 group-hover:w-8"
                    aria-hidden="true"
                  />

                  {/* Indicador */}
                  <div
                    className=" absolute right-3 top-3 flex items-center gap-1"
                    aria-hidden="true"
                  >
                    <span className="h-1.5 w-1.5 animate-pulse bg-primary shadow-[0_0_8px_currentColor]" />
                    <span className="h-px w-3 bg-primary/40" />
                  </div>

                  {/* Valor */}
                  <div className=" relative z-10 font-display text-3xl font-bold text-primary drop-shadow-[0_0_10px_rgba(220,38,38,0.35)] transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-[0_0_18px_rgba(220,38,38,0.7)]"
                  >
                    {stat.value}
                  </div>

                  {/* Label */}
                  <div
                    className=" relative z-10 mt-1 font-display text-xs uppercase tracking-[0.2em] text-foreground transition-colors duration-300 group-hover:text-primary"
                  >
                    {stat.label}
                  </div>

                  {/* Descrição */}
                  <div
                    className=" relative z-10 mt-1 text-[11px] leading-tight text-muted-foreground"
                  >
                    {stat.hint}
                  </div>

                </div>
              </Reveal>))}
          </div>


        </div>
      </div>
    </section>
  )
}
