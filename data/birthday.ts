
export interface Stat {
  label: string
  value: string
  hint: string
}

export interface GalleryItem {
  title: string
  caption: string
  tag: string
  image: string
}

export interface Track {
  title: string
  artist: string
  duration: string
}

export interface NavLink {
  label: string
  href: string
}

export const birthday = {
  hero: {
    kicker: "Vai no cabelereiro...",
    name: "Enzo",
    age: 15,
    title: "Parabéns",
    subtitle:
      "Metade nego nagô, metade violeiro. .",
    heroImage: "/images/Principal.jpeg",
    ctaPrimary: "Bora começar?",
    ctaSecondary: "Uns recadinhos",
  },
  nav: [
    { label: "Início", href: "#inicio" },
    { label: "O Herói", href: "#heroi" },
    { label: "Recado", href: "#recado" },
    { label: "Setlist", href: "#setlist" },
    { label: "Momentos", href: "#momentos" },
  ] as NavLink[],
  story: {
    title: "O Herói e suas lendas",
    portrait: "/images/EnzoOculos.jpeg",
    paragraphs: [
      "São muitos histórias ao longo desses 15 anos",
      "PJteiro raiz: retirante e tocador",
      "De quebra, ainda curte o miranha, esse cara é o herói da vizinhança.",
    ],
  },
  stats: [
    { label: "Anos", value: "15", hint: "de lendas e trilhas" },
    { label: "Acordes", value: "∞", hint: "e solos improvisados" },
    { label: "Missas", value: "999+", hint: "do exímio acólito" },
    { label: "Energia", value: "100%", hint: "e carga total pro rolê" },
  ] as Stat[],
  gallery: Array.from({ length: 34 }, (_, i) => ({
    title: ``,
    caption: ``,
    tag: `#${i + 1}`,
    image: `/images/foto${i + 1}.jpeg`,
  })) as GalleryItem[],
  playlist: {
    title: "Setlist do Aniversariante",
    subtitle: "Repertório Enzo Atualizado 2026/2027",
    tracks: [
      { title: "Nego Nagô", artist: "PJ", duration: "2:00" },
      { title: "Olária", artist: "PJ", duration: "∞" },
      { title: "A Barata", artist: "SPC", duration: "3:23" },
      { title: "Burguesinha", artist: "Seu Jorge", duration: "4:19" },
      { title: "Sunflower (Spider-Man: Into the Spider-Verse)", artist: "Post Malone", duration: "2:41" },
      { title: "Forget Me Knots (Homem-Aranha: Sem Volta Para Casa)", artist: "Michael Giacchino", duration: "6:50" },
    ] as Track[],
  },
  message: {
    title: "Seção de recados",
    subtitle: "Mensagens de quem te admira.",
    from: "Com carinho",
    paragraphs: [
      {
        message: `Feliz aniversário mano, muitos anos de vida e felicidades, saiba que você é uma pessoa muito especial nas nossas vidas. Dou muitas risadas sozinho lembrando das conversas e histórias hilárias que temos por aí e espero poder continuar escrevendo novas histórias nessa vida com você por perto`,
        author: "Gabriel"
      },
    ],
  },
  footer: {
    note: "Feito por: Geovanna e Gabriel",
    year: 2026,
  },
}
