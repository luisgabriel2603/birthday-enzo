
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
  link: string
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
  gallery: Array.from({ length: 36 }, (_, i) => ({
    title: ``,
    caption: ``,
    tag: `#${i + 1}`,
    image: `/images/foto${i + 1}.jpeg`,
  })) as GalleryItem[],
  playlist: {
    title: "Setlist do Aniversariante",
    subtitle: "Repertório Enzo Atualizado 2026/2027",
    tracks: [
      { title: "Nego Nagô", artist: "PJ", duration: "2:00", link: "https://youtu.be/CPXIulGFnQM?si=5zpoDpJd7qee-kGX" },
      { title: "Olária de Deus", artist: "PJ", duration: "∞", link: "https://youtu.be/ecFBpKpUXL4?si=28iufAib_jf3XspM" },
      { title: "A Barata", artist: "SPC", duration: "3:23", link: "https://youtu.be/mjKZQW5kL1c?si=fF-je02Eyo5GfAWG" },
      { title: "Burguesinha", artist: "Seu Jorge", duration: "4:19", link: "https://youtu.be/bWSn9jL1g7I?si=j_mjaNucP32HKDDu" },
      { title: "Sunflower (Spider-Man: Into the Spider-Verse)", artist: "Post Malone", duration: "2:41", link: "https://youtu.be/ApXoWvfEYVU?si=I_05RybcfRfYefNh" },
      { title: "Forget Me Knots (Homem-Aranha: Sem Volta Para Casa)", artist: "Michael Giacchino", duration: "6:50", link: "https://youtu.be/KSraO7ZSn3s?si=bpLIfMbxX2-NxsWw" },
    ] as Track[],
  },
  message: {
    title: "Seção de recados",
    subtitle: "Mensagens de quem te admira.",
    from: "Com carinho",
    paragraphs: [
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
        message: `Querido irmão,\n\nVocê é um presente de Deus em nossas vidas. Trouxe cor para os dias mais sombrios.\n\nTe amo muito, amo ser sua irmã! Sou muito grata por ter visto você crescer. Sempre foi um menino muito alegre, determinado e carinhoso! Te admiro muito e, a cada dia que passa, vejo o homem virtuoso que tem se tornado. Sua presença me faz muita falta… Feliz vida, feliz aniversário, e que o nosso Deus continue te abençoando hoje e sempre.\n\nDa sua irmã mais linda e maravilhosa,`,
        author: "Laura",
        image: "/images/foto9.jpeg"
      },
      {
        message: `Enzo, amado irmão,

No dia 15 de agosto, comemoramos a sua vida, um dos melhores presentes que Deus concedeu à nossa família. Você transformou esta família com seu jeito único de ser.

Sou grata pela sua vida e por Deus ter nos dado um menino tão bom, parceiro e especial. Que, neste novo ano de vida, Deus te conceda a graça de se aproximar cada vez mais daquilo que seu nome indica: ser um Homem de Deus.

Que Ele guie sempre os seus passos e que você nunca se afaste dos caminhos que Ele preparou para você.

Feliz vida, meu irmão! ❤️`,
        author: "Geovanna",
        image: "/images/foto36.jpeg"
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
