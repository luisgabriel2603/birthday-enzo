import { GiSpiderWeb, GiGuitar } from "react-icons/gi"
import { birthday } from "@/data/birthday"

export function Footer() {
  const { footer, hero } = birthday

  return (
    <footer className="relative border-t border-border/60 px-4 py-12 md:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 text-center">
        <div className="flex items-center gap-3 text-primary">
          <GiSpiderWeb className="h-6 w-6" aria-hidden="true" />
          <GiGuitar className="h-6 w-6 text-accent" aria-hidden="true" />
        </div>
        <p className="font-display text-lg font-semibold uppercase tracking-widest text-foreground">
          Parabéns, {hero.name}!
        </p>
        <p className="max-w-md text-sm leading-relaxed text-muted-foreground">{footer.note}</p>
        <p className="text-xs text-muted-foreground">© {footer.year}</p>
      </div>
    </footer>
  )
}
