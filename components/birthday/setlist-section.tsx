"use client";

import { useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa";
import { GiGuitar } from "react-icons/gi";
import { birthday } from "@/data/birthday";
import { Reveal } from "./reveal";

export function SetlistSection() {
  const { playlist } = birthday;
  const [playing, setPlaying] = useState<number | null>(null);

  return (
    <section id="setlist" className="relative px-4 py-24 md:px-6">
      <div className="mx-auto max-w-4xl">
        <Reveal className="text-center">
          <p className="inline-flex items-center gap-2 font-display text-sm uppercase tracking-[0.3em] text-primary">
            <GiGuitar className="h-5 w-5" aria-hidden="true" />
            Trilha sonora
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold uppercase tracking-tight text-balance md:text-5xl">
            {playlist.title}
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            {playlist.subtitle}
          </p>
        </Reveal>

        <div className="mt-12 overflow-hidden rounded-xl border border-border bg-card/60">
          {playlist.tracks.map((track, i) => {
            const isPlaying = playing === i;
            return (
              <Reveal key={track.title} delay={i * 80}>
                <div
                  className={`flex items-center gap-4 border-b border-border/60 px-4 py-4 transition-colors last:border-b-0 md:px-6 ${isPlaying ? "bg-primary/10" : "hover:bg-muted/40"
                    }`}
                >
                  <button
                    type="button"
                    onClick={() => setPlaying(isPlaying ? null : i)}
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform hover:scale-110"
                    aria-label={
                      isPlaying
                        ? `Pausar ${track.title}`
                        : `Tocar ${track.title}`
                    }
                  >
                    {isPlaying ? (
                      <FaPause className="h-3.5 w-3.5" />
                    ) : (
                      <FaPlay className="h-3.5 w-3.5 translate-x-px" />
                    )}
                  </button>

                  <div className="min-w-0 flex-1">
                    <div className="truncate font-display text-sm font-semibold uppercase tracking-wide text-foreground">
                      {track.title}
                    </div>
                    <div className="truncate text-xs text-muted-foreground">
                      {track.artist}
                    </div>
                  </div>

                  {/* Equalizador visível quando "tocando" */}
                  {isPlaying ? (
                    <div className="flex items-end gap-0.5" aria-hidden="true">
                      {[0, 1, 2, 3].map((b) => (
                        <span
                          key={b}
                          className="eq-bar w-1 rounded-full bg-accent"
                          style={{
                            height: "16px",
                            animationDelay: `${b * 0.15}s`,
                          }}
                        />
                      ))}
                    </div>
                  ) : (
                    <span className="font-mono text-xs text-muted-foreground">
                      {track.duration}
                    </span>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
