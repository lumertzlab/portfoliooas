const input = {
  video_hero: "img/video-hero.mp4",
  tag_hero: "PORTFÓLIO",
  titulo_hero: "Objetos de<br>Aprendizagem",
  // texto_hero:
  //   "Lorem ipsum dolor sit amet. Ea illum consequuntur est itaque galisum est accusamus facere rem optio voluptatem.",
  titulo_sec_objeto: "EXPERIÊNCIAS IMERSIVAS",
  texto_sec_objeto:
    "Confira a nossa coleção de objetos e recursos imersivos que enriquecem o processo de ensino e aprendizado. Essas experiências são projetadas para envolver os alunos de forma profunda e significativa, utilizando diferentes tipos de tecnologias e formatos para criar um ambiente educativo mais interativo e envolvente.",

  objeto: [
    {
      img_objeto: "../img/banner-h5p.png",
      titulo_objeto: "Interativos H5P",
      texto_objeto:
        "Conteúdos H5P que proporcionam um aprendizado dinâmico e envolvente através de atividades interativas.",
      link_objeto: "interativosh5p",
    },
    {
      img_objeto: "../img/banner-html.png",
      titulo_objeto: "Interativos HTML",
      texto_objeto:
        "Conteúdos interativos em HTML, que oferecem uma experiência visual e prática para um aprendizado envolvente.",
    },
    {
      img_objeto: "../img/banner-3D.png",
      titulo_objeto: "Objetos 3D",
      texto_objeto:
        "Modelos 3D educacionais que oferecem uma imersão visual e uma experiência de aprendizado inovadora.",
      link_objeto: "objetos3d",
    },
    {
      img_objeto: "../img/banner-podcast.png",
      titulo_objeto: "<i>Podcasts</i>",
      texto_objeto:
        "Podcasts com especialistas discutindo temas práticos do dia a dia em diversas áreas do conhecimento.",
      link_objeto: "podcast",
    },
    {
      img_objeto: "../img/banner-videos.png",
      titulo_objeto: "Vídeos",
      texto_objeto:
        "Alguns exemplos dos principais formatos audiovisuais disponíveis em nosso catálogo.",
      link_objeto: "videos",
    },
    {
      img_objeto: "../img/banner_videos-imersivos.png",
      titulo_objeto: "Vídeos Imersivos",
      texto_objeto:
        "Vídeos que envolvem o estudante de maneira profunda, utilizando a tecnologia para criar uma sensação imersiva no conteúdo.",
      link_objeto: "imersivos",
    },
  ],
};

const interativosh5p = {
  img_hero: "",
  titulo_hero: "Interativos H5P",
  texto_hero:
    "Conteúdos H5P que proporcionam um aprendizado dinâmico e envolvente através de atividades interativas.",
  general_menu: [
    {
      link_objeto: "",
      objeto: "Interativos H5P",
    },
    {
      link_objeto: "",
      objeto: "Interativos HTML",
    },
    {
      link_objeto: "",
      objeto: "Objetos 3D",
    },
    {
      link_objeto: "",
      objeto: "<i>Podcasts</i>",
    },
    {
      link_objeto: "videos",
      objeto: "Vídeos",
    },
    {
      link_objeto: "",
      objeto: "Vídeos Imersivos",
    },
  ],
  item_menu: [
    {
      id: "sub01",
      objeto: "Interativos H5P",
    },
    {
      id: "sub02",
      objeto: "Drag and Drop",
    },
    {
      id: "sub03",
      objeto: "Livro H5P",
    },
  ],
  item: [
    {
      id: "sub01",
      objeto: "Interativos H5P",
      texto_objeto:
        "Peça gráfica desenvolvida com H5P que permite interação direta com o conteúdo através de atividades integradas. Os alunos podem explorar e interagir com diversos elementos, proporcionando uma compreensão mais profunda e envolvente do material.",
      video_samba: [
        {
          titulo_objeto: "Gestão de Conflitos",
          area: "Sociais aplicadas",
          ua: "",
          link_objeto:
            "https://fast.player.liquidplatform.com/pApiv2/embed/cee29914fad5b594d8f5918df1e801fd/702b62a579ffe0ab1132b2e387769278",
        },
      ],
    },
    {
      id: "sub02",
      objeto: "Drag and Drop",
      texto_objeto:
        "Peça gráfica desenvolvida com H5P que utiliza a funcionalidade de arrastar e soltar. Esta abordagem permite que os alunos movam itens para posições específicas, ajudando a entender e organizar conceitos de maneira prática e interativa.",
      video_samba: [
        {
          titulo_objeto: "A responsabilidade moral",
          area: "Educação",
          ua: "15112",
          link_objeto:
            "https://fast.player.liquidplatform.com/pApiv2/embed/cee29914fad5b594d8f5918df1e801fd/7a0665af24583315ac0d3488a93d2a73",
        },
        {
          titulo_objeto: "Gestão de Projetos",
          area: "Exatas",
          ua: "2906",
          link_objeto:
            "https://fast.player.liquidplatform.com/pApiv2/embed/cee29914fad5b594d8f5918df1e801fd/7a0665af24583315ac0d3488a93d2a73",
        },
        {
          titulo_objeto: "Pré-molares superiores",
          area: "Saúde",
          ua: "50211",
          link_objeto:
            "https://fast.player.liquidplatform.com/pApiv2/embed/cee29914fad5b594d8f5918df1e801fd/7a0665af24583315ac0d3488a93d2a73",
        },
        {
          titulo_objeto: "Modos de transporte e suas características",
          area: "Sociais aplicadas",
          ua: "24764",
          link_objeto:
            "https://fast.player.liquidplatform.com/pApiv2/embed/cee29914fad5b594d8f5918df1e801fd/7a0665af24583315ac0d3488a93d2a73",
        },
      ],
    },
    {
      id: "sub03",
      objeto: "Livro H5P",
      texto_objeto:
        "Peça gráfica desenvolvida com H5P que utiliza a funcionalidade de livro interativo. Esta abordagem permite que os alunos explorem uma variedade de conteúdos, como textos, imagens e vídeos, de forma interativa. Com a navegação por capítulos e a integração de atividades, promove um aprendizado mais envolvente e exploratório.",
      video_samba: [
        {
          titulo_objeto: "Arte e Produção",
          area: "Educação",
          ua: ": Games",
          link_objeto:
            "https://fast.player.liquidplatform.com/pApiv2/embed/cee29914fad5b594d8f5918df1e801fd/62b64721144bc6d347d601d6366ce9dd",
        },
        {
          titulo_objeto: "Vida e evolução",
          area: "Saúde",
          ua: ": Games",
          link_objeto:
            "https://fast.player.liquidplatform.com/pApiv2/embed/cee29914fad5b594d8f5918df1e801fd/e671d231bdf3ae3318bab8a9390bad7f",
        },
        {
          titulo_objeto: "Planejamento financeiro",
          area: "Sociais aplicadas",
          ua: ": Games",
          link_objeto:
            "https://fast.player.liquidplatform.com/pApiv2/embed/cee29914fad5b594d8f5918df1e801fd/e7a1dd209264175d090b29e1eba07d0e",
        },
      ],
    },
  ],
};

const objetos3d = {
  img_hero: "",
  titulo_hero: "Objetos 3D",
  texto_hero:
    "Modelos 3D educacionais que oferecem uma imersão visual e uma experiência de aprendizado inovadora.",
  general_menu: [
    {
      link_objeto: "",
      objeto: "Interativos H5P",
    },
    {
      link_objeto: "",
      objeto: "Interativos HTML",
    },
    {
      link_objeto: "",
      objeto: "Objetos 3D",
    },
    {
      link_objeto: "",
      objeto: "<i>Podcasts</i>",
    },
    {
      link_objeto: "videos",
      objeto: "Vídeos",
    },
    {
      link_objeto: "",
      objeto: "Vídeos Imersivos",
    },
  ],
  item_menu: [
    {
      id: "sub01",
      objeto: "Objetos 3D",
    },
    {
      id: "sub02",
      objeto: "PO3D",
    },
  ],
  item: [
    {
      id: "sub01",
      objeto: "Objetos 3D",
      texto_objeto:
        "Modelos 3D que oferecem uma experiência imersiva. Esses objetos permitem a exploração de modelos tridimensionais educativos, facilitando a visualização e a compreensão de conceitos complexos. Essa abordagem proporciona uma imersão prática e envolvente, promovendo um aprendizado mais eficaz e detalhado.",
      video_samba: [
        {
          titulo_objeto: "Sinal de porque em pergunta",
          area: "Educação",
          ua: "22607",
          link_objeto:
            "https://fast.player.liquidplatform.com/pApiv2/embed/cee29914fad5b594d8f5918df1e801fd/702b62a579ffe0ab1132b2e387769278",
        },
        {
          titulo_objeto: "Elevador",
          area: "Exatas",
          ua: "17701",
          link_objeto:
            "https://fast.player.liquidplatform.com/pApiv2/embed/cee29914fad5b594d8f5918df1e801fd/702b62a579ffe0ab1132b2e387769278",
        },
        {
          titulo_objeto: "Sistema Auditivo",
          area: "Saúde",
          ua: "15268",
          link_objeto:
            "https://fast.player.liquidplatform.com/pApiv2/embed/cee29914fad5b594d8f5918df1e801fd/702b62a579ffe0ab1132b2e387769278",
        },
        {
          titulo_objeto: "Carrossel vertical",
          area: "Sociais Aplicadas",
          ua: "15268",
          link_objeto:
            "https://fast.player.liquidplatform.com/pApiv2/embed/cee29914fad5b594d8f5918df1e801fd/702b62a579ffe0ab1132b2e387769278",
        },
      ],
    },
    {
      id: "sub02",
      objeto: "PO3D",
      texto_objeto:
        "Combinação de objetos 3D, estáticos ou animados, com camadas de informação organizadas em capítulos, diretamente alinhadas ao objetivo educacional. Esses objetos tridimensionais permitem a visualização e a compreensão de conceitos complexos de forma estruturada, complementando o aprendizado e aprofundando o entendimento dos temas abordados.",
      video_samba: [
        {
          titulo_objeto: "Ciclos biogeoquímico",
          area: "Educação",
          ua: "15112",
          link_objeto:
            "https://fast.player.liquidplatform.com/pApiv2/embed/cee29914fad5b594d8f5918df1e801fd/7a0665af24583315ac0d3488a93d2a73",
        },
        {
          titulo_objeto: "Sistemas estruturais",
          area: "Exatas",
          ua: "32343",
          link_objeto:
            "https://fast.player.liquidplatform.com/pApiv2/embed/cee29914fad5b594d8f5918df1e801fd/7a0665af24583315ac0d3488a93d2a73",
        },
        {
          titulo_objeto: "Alterações do sistema respiratório",
          area: "Saúde",
          ua: "21170",
          link_objeto:
            "https://fast.player.liquidplatform.com/pApiv2/embed/cee29914fad5b594d8f5918df1e801fd/7a0665af24583315ac0d3488a93d2a73",
        },
        {
          titulo_objeto: "Modais de transportes",
          area: "Sociais aplicadas",
          ua: "28596",
          link_objeto:
            "https://fast.player.liquidplatform.com/pApiv2/embed/cee29914fad5b594d8f5918df1e801fd/7a0665af24583315ac0d3488a93d2a73",
        },
      ],
    },
  ],
};

const podcast = {
  img_hero: "",
  titulo_hero: "Podcast",
  texto_hero:
    "Podcasts com especialistas discutindo temas práticos do dia a dia em diversas áreas do conhecimento.",
  general_menu: [
    {
      link_objeto: "",
      objeto: "Interativos H5P",
    },
    {
      link_objeto: "",
      objeto: "Interativos HTML",
    },
    {
      link_objeto: "",
      objeto: "Objetos 3D",
    },
    {
      link_objeto: "",
      objeto: "<i>Podcasts</i>",
    },
    {
      link_objeto: "videos",
      objeto: "Vídeos",
    },
    {
      link_objeto: "",
      objeto: "Vídeos Imersivos",
    },
  ],
  item_menu: [
    {
      id: "sub01",
      objeto: "Podcast",
    },
  ],
  item: [
    {
      id: "sub01",
      objeto: "Podcast",
      texto_objeto:
        "Podcast com discussões de especialistas sobre temas práticos do dia a dia em diversas áreas do conhecimento. Os episódios conectam a teoria com a prática, facilitando a compreensão de conceitos complexos e promovendo um aprendizado dinâmico e envolvente.",
      video_samba: [
        {
          titulo_objeto:
            "A inserção do negro nas universidades e no mercado de trabalho",
          area: "Educação",
          ua: "22773",
          link_objeto:
            "https://fast.player.liquidplatform.com/pApiv2/embed/cee29914fad5b594d8f5918df1e801fd/702b62a579ffe0ab1132b2e387769278",
        },
        {
          titulo_objeto: "Estatística no cotidiano",
          area: "Exatas",
          ua: "2240",
          link_objeto:
            "https://fast.player.liquidplatform.com/pApiv2/embed/cee29914fad5b594d8f5918df1e801fd/db36a98bd42602f622e6f3dafc4e9320",
        },
        {
          titulo_objeto: "Saúde do psicólogo no ambiente de trabalho",
          area: "Saúde",
          ua: "1256",
          link_objeto:
            "https://fast.player.liquidplatform.com/pApiv2/embed/cee29914fad5b594d8f5918df1e801fd/39d1b762d9ea2b93440a39a891b09b4b",
        },
        {
          titulo_objeto: "Direitos humanos: História e sociedade",
          area: "Sociais aplicadas",
          ua: "18788",
          link_objeto:
            "https://fast.player.liquidplatform.com/pApiv2/embed/cee29914fad5b594d8f5918df1e801fd/5cab80ea55550628ab4c9d5ee911fc83",
        },
      ],
    },
    {
      id: "sub02",
      objeto: "Vídeoaula Simulação",
      texto_objeto:
        "Recria cenários de forma realista, permitindo que o estudante visualize situações do conteúdo de suas aulas.",
      video_samba: [
        {
          titulo_objeto: "Entrevista inicial de Psicodiagnóstico",
          area: "Saúde",
          ua: "53227",
          link_objeto:
            "https://fast.player.liquidplatform.com/pApiv2/embed/cee29914fad5b594d8f5918df1e801fd/7a0665af24583315ac0d3488a93d2a73",
        },
      ],
    },
    {
      id: "sub03",
      objeto: "Vídeo Entrevista",
      texto_objeto:
        "Gravação na qual um profissional compartilha suas perspectivas, experiências ou conhecimentos.",
      video_samba: [
        {
          titulo_objeto:
            "Práticas adaptadas para a inclusão na Educação Física",
          area: "Educação",
          ua: "18207",
          link_objeto:
            "https://fast.player.liquidplatform.com/pApiv2/embed/cee29914fad5b594d8f5918df1e801fd/62b64721144bc6d347d601d6366ce9dd",
        },
        {
          titulo_objeto: "Fatores humanos e Ergonomia",
          area: "Exatas",
          ua: "27049",
          link_objeto:
            "https://fast.player.liquidplatform.com/pApiv2/embed/cee29914fad5b594d8f5918df1e801fd/e671d231bdf3ae3318bab8a9390bad7f",
        },
        {
          titulo_objeto: "Direitos autorais",
          area: "Sociais aplicadas",
          ua: "14491",
          link_objeto:
            "https://fast.player.liquidplatform.com/pApiv2/embed/cee29914fad5b594d8f5918df1e801fd/e7a1dd209264175d090b29e1eba07d0e",
        },
      ],
    },
  ],
};

const videos = {
  img_hero: "banner-videos-2.png",
  titulo_hero: "Vídeos",
  texto_hero:
    "Alguns exemplos dos principais formatos audiovisuais disponíveis em nosso catálogo.",
  general_menu: [
    {
      link_objeto: "",
      objeto: "Interativos H5P",
    },
    {
      link_objeto: "",
      objeto: "Interativos HTML",
    },
    {
      link_objeto: "",
      objeto: "Objetos 3D",
    },
    {
      link_objeto: "",
      objeto: "<i>Podcasts</i>",
    },
    {
      link_objeto: "videos",
      objeto: "Vídeos",
    },
    {
      link_objeto: "",
      objeto: "Vídeos Imersivos",
    },
  ],
  item_menu: [
    {
      id: "sub01",
      objeto: "Videoaula Expositiva",
    },
    {
      id: "sub02",
      objeto: "Vídeoaula Simulação",
    },
    {
      id: "sub03",
      objeto: "Vídeo Entrevista",
    },
  ],
  item: [
    {
      id: "sub01",
      objeto: "Videoaula Expositiva",
      texto_objeto:
        "Aulas em formato de vídeo que utilizam recursos visuais e auditivos, proporcionando uma experiência de aprendizado mais rica e envolvente.",
      video_samba: [
        {
          titulo_objeto: "A leitura para crianças de 0 a 3 anos",
          area: "Educação",
          ua: "38961",
          link_objeto:
            "https://fast.player.liquidplatform.com/pApiv2/embed/cee29914fad5b594d8f5918df1e801fd/702b62a579ffe0ab1132b2e387769278",
        },
        {
          titulo_objeto: "Diferentes técnicas de elicitação de requisitos",
          area: "Exatas",
          ua: "27558",
          link_objeto:
            "https://fast.player.liquidplatform.com/pApiv2/embed/cee29914fad5b594d8f5918df1e801fd/db36a98bd42602f622e6f3dafc4e9320",
        },
        {
          titulo_objeto: "Psicologia do esporte",
          area: "Saúde",
          ua: "52484",
          link_objeto:
            "https://fast.player.liquidplatform.com/pApiv2/embed/cee29914fad5b594d8f5918df1e801fd/39d1b762d9ea2b93440a39a891b09b4b",
        },
        {
          titulo_objeto: "Efeito chicote",
          area: "Sociais aplicadas",
          ua: "23190",
          link_objeto:
            "https://fast.player.liquidplatform.com/pApiv2/embed/cee29914fad5b594d8f5918df1e801fd/5cab80ea55550628ab4c9d5ee911fc83",
        },
      ],
    },
    {
      id: "sub02",
      objeto: "Vídeoaula Simulação",
      texto_objeto:
        "Recriação realista de cenários que permite aos estudantes visualizar situações relacionadas ao conteúdo de suas aulas, tornando o aprendizado mais dinâmico e próximo da realidade. Essa abordagem facilita a compreensão de conceitos ao trazer o conteúdo para um contexto prático e visual.",
      video_samba: [
        {
          titulo_objeto: "Entrevista inicial de Psicodiagnóstico",
          area: "Saúde",
          ua: "53227",
          link_objeto:
            "https://fast.player.liquidplatform.com/pApiv2/embed/cee29914fad5b594d8f5918df1e801fd/7a0665af24583315ac0d3488a93d2a73",
        },
      ],
    },
    {
      id: "sub03",
      objeto: "Vídeo Entrevista",
      texto_objeto:
        "Gravação na qual um especialista compartilha suas perspectivas, experiências e conhecimentos sobre um tema específico. Essas gravações proporcionam insights valiosos e aprofundam a compreensão do assunto, enriquecendo o aprendizado com a experiência prática e o expertise do profissional.",
      video_samba: [
        {
          titulo_objeto:
            "Práticas adaptadas para a inclusão na Educação Física",
          area: "Educação",
          ua: "18207",
          link_objeto:
            "https://fast.player.liquidplatform.com/pApiv2/embed/cee29914fad5b594d8f5918df1e801fd/62b64721144bc6d347d601d6366ce9dd",
        },
        {
          titulo_objeto: "Fatores humanos e Ergonomia",
          area: "Exatas",
          ua: "27049",
          link_objeto:
            "https://fast.player.liquidplatform.com/pApiv2/embed/cee29914fad5b594d8f5918df1e801fd/e671d231bdf3ae3318bab8a9390bad7f",
        },
        {
          titulo_objeto: "Direitos autorais",
          area: "Sociais aplicadas",
          ua: "14491",
          link_objeto:
            "https://fast.player.liquidplatform.com/pApiv2/embed/cee29914fad5b594d8f5918df1e801fd/e7a1dd209264175d090b29e1eba07d0e",
        },
      ],
    },
  ],
};

const imersivos = {
  img_hero: "",
  titulo_hero: "Vídeos Imersivos",
  texto_hero:
    "Vídeos que envolvem o estudante de maneira profunda, utilizando a tecnologia para criar uma sensação imersiva no conteúdo.",
  general_menu: [
    {
      link_objeto: "",
      objeto: "Interativos H5P",
    },
    {
      link_objeto: "",
      objeto: "Interativos HTML",
    },
    {
      link_objeto: "",
      objeto: "Objetos 3D",
    },
    {
      link_objeto: "",
      objeto: "<i>Podcasts</i>",
    },
    {
      link_objeto: "videos",
      objeto: "Vídeos",
    },
    {
      link_objeto: "",
      objeto: "Vídeos Imersivos",
    },
  ],
  item_menu: [
    {
      id: "sub01",
      objeto: "Vídeos Interativos",
    },
    {
      id: "sub02",
      objeto: "Vídeos 360º",
    },
  ],
  item: [
    {
      id: "sub01",
      objeto: "Vídeos Interativos",
      texto_objeto:
        "Permite que o estudante participe ativamente do conteúdo por meio da ferramenta H5P, tomando decisões que influenciam o desenrolar do vídeo. Essa abordagem promove uma experiência de aprendizado mais dinâmica e envolvente, incentivando a participação ativa e o aprofundamento dos tópicos abordados.",
      video_samba: [
        {
          titulo_objeto: "Assembleias escolares",
          area: "Educação",
          ua: "17122",
          link_objeto:
            "https://fast.player.liquidplatform.com/pApiv2/embed/cee29914fad5b594d8f5918df1e801fd/702b62a579ffe0ab1132b2e387769278",
        },
        {
          titulo_objeto: "Regra de três simples e composta",
          area: "Exatas",
          ua: "9748",
          link_objeto:
            "https://fast.player.liquidplatform.com/pApiv2/embed/cee29914fad5b594d8f5918df1e801fd/db36a98bd42602f622e6f3dafc4e9320",
        },
        {
          titulo_objeto: "Câncer de cólon e Colostomia",
          area: "Saúde",
          ua: "18883",
          link_objeto:
            "https://fast.player.liquidplatform.com/pApiv2/embed/cee29914fad5b594d8f5918df1e801fd/39d1b762d9ea2b93440a39a891b09b4b",
        },
        {
          titulo_objeto: "Escalada na montanha e o Ciclo de vida do projeto",
          area: "Sociais aplicadas",
          ua: "58333",
          link_objeto:
            "https://fast.player.liquidplatform.com/pApiv2/embed/cee29914fad5b594d8f5918df1e801fd/5cab80ea55550628ab4c9d5ee911fc83",
        },
      ],
    },
    {
      id: "sub02",
      objeto: "Vídeos 360º",
      texto_objeto:
        "Os vídeos 360° permitem que o estudante explore o ambiente ao redor ao mover a perspectiva do vídeo. Essa tecnologia oferece uma experiência imersiva, permitindo uma visualização completa e interativa do cenário, o que enriquece a compreensão e o engajamento com o conteúdo abordado.",
      video_samba: [
        {
          titulo_objeto: "Museu do Holocausto",
          area: "Educação",
          ua: "44508",
          link_objeto:
            "https://fast.player.liquidplatform.com/pApiv2/embed/cee29914fad5b594d8f5918df1e801fd/7a0665af24583315ac0d3488a93d2a73",
        },
        {
          titulo_objeto: "Distribuições contínuas de probabilidade",
          area: "Exatas",
          ua: "2245",
          link_objeto:
            "https://fast.player.liquidplatform.com/pApiv2/embed/cee29914fad5b594d8f5918df1e801fd/7a0665af24583315ac0d3488a93d2a73",
        },
        {
          titulo_objeto: "Tomografia Computadorizada",
          area: "Saúde",
          ua: "25059",
          link_objeto:
            "https://fast.player.liquidplatform.com/pApiv2/embed/cee29914fad5b594d8f5918df1e801fd/7a0665af24583315ac0d3488a93d2a73",
        },
        {
          titulo_objeto: "Regra de pareto",
          area: "Sociais aplicadas",
          ua: "18397",
          link_objeto:
            "https://fast.player.liquidplatform.com/pApiv2/embed/cee29914fad5b594d8f5918df1e801fd/7a0665af24583315ac0d3488a93d2a73",
        },
      ],
    },
  ],
};
