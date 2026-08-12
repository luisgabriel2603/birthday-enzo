interface PhotoFrameProps {
  src: string
  alt: string
  className?: string
  glow?: boolean
}

// Moldura holográfica no estilo HUD para as fotos.
export function PhotoFrame({ src, alt, className, glow = true }: PhotoFrameProps) {
  return (
    <div className={`hud-border group relative overflow-hidden rounded-lg border border-primary/40 bg-card ${className ?? ""}`}>
      {glow && (
        <div className="pointer-events-none absolute -inset-8 -z-10 bg-primary/20 blur-3xl" aria-hidden="true" />
      )}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src || "/placeholder.svg"}
        alt={alt}
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      {/* Varredura holográfica */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-secondary/25 via-transparent to-primary/25 mix-blend-screen"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent"
        aria-hidden="true"
      />
       {/* Scanlines */}
        <div
          className="
            pointer-events-none
            absolute inset-0
            opacity-20
            bg-[linear-gradient(
              to_bottom,
              transparent_50%,
              rgba(255,255,255,0.08)_50%
            )]
            bg-[length:100%_4px]
          "
          aria-hidden="true"
        />

        {/* Varredura holográfica */}
        <div
          className="
            pointer-events-none
            absolute
            inset-x-0
            top-0
            h-[2px]
            bg-gradient-to-r
            from-transparent
            via-red-400
            to-transparent
            shadow-[0_0_15px_rgba(239,68,68,0.9)]
            transition-all
            duration-1000
            group-hover:top-full
          "
          aria-hidden="true"
        />
    </div>
  )
}
