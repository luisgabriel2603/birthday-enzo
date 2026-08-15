"use client";

import { useState } from "react";
import { GiSpiderWeb } from "react-icons/gi";
import { birthday } from "@/data/birthday";
import { Reveal } from "./reveal";
import { PhotoFrame } from "./photo-frame";

export function MessageSection() {
  const { message } = birthday;
  const [opened, setOpened] = useState(false);

  return (
    <section id="recado" className="relative px-4 py-24 md:px-6">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <div className="hud-border relative overflow-hidden rounded-2xl border border-primary/40 bg-card/70 p-8 text-center md:p-12">
            <div
              className="pointer-events-none absolute -inset-10 -z-10 bg-primary/10 blur-3xl"
              aria-hidden="true"
            />

            <GiSpiderWeb
              className="mx-auto h-12 w-12 text-primary"
              aria-hidden="true"
            />
            <div>

              <h2 className="mt-4 mb-2 font-display text-3xl font-bold uppercase tracking-tight text-balance md:text-4xl">
                {message.title}
              </h2>
              <span className=" font-display font-semibold text-xs uppercase tracking-tight text-balance ">
                {message.subtitle}
              </span>
            </div>

            {!opened ? (
              <button
                type="button"
                onClick={() => setOpened(true)}
                className=" transition-all mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 font-display text-sm font-semibold uppercase tracking-wider text-primary-foreground hover:scale-105"
              >
                Abrir mensagens
              </button>
            ) : (
              <div className="mt-8 space-y-6 text-left">
                {message.paragraphs.map((p, i) => (
                  <blockquote
                    key={i}
                    className="relative overflow-hidden rounded-2xl border border-red-400/20 bg-red-400/5 p-6 shadow-sm transition-all duration-500 hover:border-red-400/40 hover:bg-red-400/10 hover:shadow-lg"
                    style={{ transitionDelay: `${i * 120}ms` }}
                  >
                    {p?.image && (
                      <PhotoFrame
                        src={p.image}
                        alt={p.author}
                        className="size-[50%] my-4 mx-auto object-contain"
                      />
                    )}
                    <span className="absolute -top-5 left-4 font-serif text-7xl leading-none text-red-400/20">
                      “
                    </span>
                    <div className="relative">
                      <p className="text-lg font-medium leading-relaxed text-foreground md:text-xl whitespace-pre-line">
                        “{p.message}”
                      </p>
                      <footer className="mt-5 flex items-center gap-3">
                        <div className="h-px w-8 bg-red-400/60" />
                        <cite className="not-italic font-display text-sm font-semibold uppercase tracking-widest text-red-500 ">
                          {p.author}
                        </cite>
                      </footer>
                    </div>
                  </blockquote>
                ))}
                <div className="pt-4 text-right">
                  <p className="font-display text-sm font-semibold uppercase tracking-[0.25em] text-accent">
                    {message.from}
                  </p>
                </div>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
