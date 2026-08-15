
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
  gallery: Array.from({ length: 35 }, (_, i) => ({
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
        message: `Querido irmão,\n\nVocê é um presente de Deus em nossas vidas. Trouxe cor para os dias mais sombrios.\n\nTe amo muito, amo ser sua irmã! Sou muito grata por ter visto você crescer. Sempre foi um menino muito alegre, determinado e carinhoso! Te admiro muito e, a cada dia que passa, vejo o homem virtuoso que tem se tornado. Sua presença me faz muita falta… Feliz vida, feliz aniversário, e que o nosso Deus continue te abençoando hoje e sempre.\n\nDa sua irmã mais linda e maravilhosa,`,
        author: "Laura",
        image: "/images/foto9.jpeg"
      },
      {
        message: `Parabéns ❤️
Hoje eu queria te desejar muito mais do que um simples “feliz aniversário”. Queria te lembrar do quanto é bom ter você por perto, mesmo que a vida e a distância nem sempre permitam que isso aconteça.
Às vezes a gente só percebe o verdadeiro valor de alguém quando não pode estar junto todos os dias. E é justamente nesses momentos que eu percebo o quanto a sua presença é importante para mim. Os momentos que conseguimos compartilhar acabam tendo um valor ainda maior, porque a gente sabe o quanto sente falta quando está longe.
Você é uma daquelas pessoas que, mesmo estando distante, continua sendo uma motivação. Uma presença que permanece, que faz querer seguir em frente e que lembra que vale a pena continuar lutando para viver momentos melhores juntos.
Espero que você nunca esqueça o quanto é importante e o quanto a sua presença faz diferença. Que esse novo ciclo te traga muitos motivos para sorrir, conquistar seus sonhos e, principalmente, para que a gente possa estar mais perto e aproveitar mais aquilo que realmente importa: estar juntos.
Feliz aniversário! ❤️
Que Deus te abençoe, cuide de você e permita que ainda tenhamos muitos momentos para guardar na memória. E quando a distância apertar, lembra que, mesmo longe, você continua sendo muito importante para mim.`,
        author: "Lucas",
        image: "/images/foto35.jpeg"
      },
      {
        message: `Feliz aniversário mano, muitos anos de vida e felicidades, saiba que você é uma pessoa muito especial nas nossas vidas. 

        Sempre dou muitas risadas lembrando das conversas e histórias hilárias que temos por aí e espero poder continuar escrevendo novas histórias nessa vida com você por perto.`,
        author: "Luis Gabriel",
        image: "/images/foto4.jpeg"
      },
    ] as { message: string; author: string; image?: string }[],
  },
  footer: {
    note: "Feito por: Geovanna e Gabriel",
    year: 2026,
  },
}
