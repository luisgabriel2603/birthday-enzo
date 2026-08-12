"use client"

import { GiSpiderWeb, GiGuitar } from "react-icons/gi"
import { PhotoFrame } from "./photo-frame"
import { birthday } from "@/data/birthday"
import { FaGuitar } from "react-icons/fa"

export function HeroSection() {
  const { hero } = birthday

  return (
    <section id="inicio" className="relative flex min-h-svh items-center overflow-hidden px-4 pt-24 pb-16 md:px-6">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-2">
        {/* Texto */}
        <div className="text-center md:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 font-display text-xs uppercase tracking-[0.25em] text-primary">
            <FaGuitar className="h-4 w-4" aria-hidden="true" />
            {hero.kicker}
          </span>

          <h1 className="mt-6 font-display text-5xl font-bold uppercase leading-[0.95] tracking-tight text-balance sm:text-6xl md:text-7xl">
            <span className="block text-muted-foreground">{hero.title}</span>
            <span className="animate-glitch block text-primary text-glow">{hero.name}</span>
          </h1>

          <p className="mx-auto mt-6 max-w-md text-pretty leading-relaxed text-muted-foreground md:mx-0">
            {hero.subtitle}
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row md:justify-start">
            <a
              href="#heroi"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 font-display text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-transform hover:scale-105"
            >
              <GiGuitar className="h-5 w-5" aria-hidden="true" />
              {hero.ctaPrimary}
            </a>
            <a
              href="#recado"
              className="inline-flex items-center gap-2 rounded-md border border-border px-6 py-3 font-display text-sm font-semibold uppercase tracking-wider text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              {hero.ctaSecondary}
            </a>
          </div>

          {/* Idade em destaque */}
          <div className="mt-10 flex items-center justify-center gap-4 md:justify-start">
            <div className="font-display text-6xl font-bold text-accent">{hero.age}</div>
            <div className="border-l border-border pl-4 text-left">
              <div className="font-display text-sm uppercase tracking-widest text-foreground">Anos</div>
              <div className="text-xs text-muted-foreground">de pura animação e enzices</div>
            </div>
          </div>
        </div>

        {/* Elemento central: foto + teia + ondas sonoras */}
        <div className="relative mx-auto aspect-square w-full max-w-sm">
          {/* anéis pulsantes (ondas sonoras) */}
          <div className="absolute inset-0 rounded-full border border-primary/30 animate-pulse-ring" />
          <div className="absolute inset-4 rounded-full border border-secondary/30 animate-pulse-ring [animation-delay:0.8s]" />
          <div className="absolute inset-8 rounded-full border border-accent/30 animate-pulse-ring [animation-delay:1.6s]" />

          {/* teia giratória */}
          <GiSpiderWeb
            className="animate-spin-slow absolute inset-0 h-full w-full text-primary/10"
            aria-hidden="true"
          />

          {/* foto flutuante */}
          <div className="animate-float-slow absolute inset-[15%]">
            <PhotoFrame
              src={hero.heroImage}
              alt={`Ilustração do aniversariante ${hero.name} como Homem-Aranha com guitarra`}
              className="h-full w-full rounded-full"
            />
          </div>

          {/* equalizador flutuante */}
          <div className="absolute -bottom-2 left-1/2 flex -translate-x-1/2 items-end gap-1" aria-hidden="true">
            {[0, 1, 2, 3, 4, 5, 6].map((i) => (
              <span
                key={i}
                className="eq-bar w-1.5 rounded-full bg-accent"
                style={{ height: `${18 + (i % 3) * 10}px`, animationDelay: `${i * 0.12}s` }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
