const input = {
  video_hero: "video-hero.mp4",
  tag_hero: "PORTFÓLIO",
  titulo_hero: "Objetos de<br>Aprendizagem",
  titulo_sec_objeto: "EXPERIÊNCIAS IMERSIVAS",
  texto_sec_objeto:
    "Coleção de objetos e recursos imersivos que enriquecem o processo de ensino e aprendizado. Essas experiências são projetadas para envolver o aluno de forma profunda e significativa, utilizando diferentes tipos de tecnologias e formatos para criar um ambiente educativo mais interativo e envolvente.",

  objeto: [
    {
      img_objeto: "banner-h5p.png",
      titulo_objeto: "Interativos H5P",
      texto_objeto:
        "Conteúdos H5P que proporcionam um aprendizado atrativo e imersivo através de atividades interativas.",
      link_objeto: "interativosh5p",
    },
    {
      img_objeto: "banner-html.png",
      titulo_objeto: "Interativos HTML",
      texto_objeto:
        "Conteúdos interativos em HTML, que oferecem uma experiência visual e prática para um aprendizado envolvente.",
      link_objeto: "interativoshtml",
    },
    {
      img_objeto: "banner-3D.png",
      titulo_objeto: "Objetos 3D",
      texto_objeto:
        "Modelos 3D educacionais que oferecem uma imersão visual e uma experiência de aprendizado inovadora.",
      link_objeto: "objetos3d",
    },
    {
      img_objeto: "banner-podcast.png",
      titulo_objeto: "<i>Podcast</i>",
      texto_objeto:
        "Podcasts com especialistas discutindo temas práticos do dia a dia em diversas áreas do conhecimento.",
      link_objeto: "podcast",
    },
    {
      img_objeto: "banner-videos.png",
      titulo_objeto: "Vídeos",
      texto_objeto:
        "Conteúdos audiovisuais em diversos formatos para aprofundar e enriquecer o estudo de temas específicos.",
      link_objeto: "videos",
    },
    {
      img_objeto: "banner_videos-imersivos.png",
      titulo_objeto: "Vídeos Imersivos",
      texto_objeto:
        "Vídeos que envolvem o estudante de maneira profunda, utilizando a tecnologia para criar uma sensação imersiva no conteúdo.",
      link_objeto: "imersivos",
    },
  ],
};

const interativosh5p = {
  img_hero: "banner-h5p-2.png",
  titulo_hero: "Interativos H5P",
  texto_hero:
    "Conteúdos H5P que proporcionam um aprendizado atrativo e imersivo através de atividades interativas.",
  general_menu: [
    {
      link_objeto: "interativosh5p",
      objeto: "Interativos H5P",
    },
    {
      link_objeto: "interativoshtml",
      objeto: "Interativos HTML",
    },
    {
      link_objeto: "objetos3d",
      objeto: "Objetos 3D",
    },
    {
      link_objeto: "podcast",
      objeto: "<i>Podcast</i>",
    },
    {
      link_objeto: "videos",
      objeto: "Vídeos",
    },
    {
      link_objeto: "imersivos",
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
        "Peça gráfica desenvolvida com H5P, que permite interação direta com o conteúdo através de atividades integradas. O aluno pode explorar e interagir com diversos elementos, proporcionando uma compreensão mais profunda do material.",
      h5p: [
        {
          titulo_objeto: "Gestão de Conflitos",
          area: "Sociais aplicadas",
          ua: ": Games",
          link_h5p: "https://imersys.h5p.com/content/1292110830747511787/embed",
        },
      ],
    },
    {
      id: "sub02",
      objeto: "Drag and Drop",
      texto_objeto:
        "Atividades desenvolvidas com o uso de H5P que utilizam a funcionalidade de arrastar e soltar. Essa abordagem permite ao aluno mover itens para posições específicas, facilitando a compreensão e a organização dos conceitos de maneira prática e interativa.",
      h5p: [
        {
          titulo_objeto: "A responsabilidade moral",
          area: "Educação",
          ua: "15112",
          link_h5p: "https://imersys.h5p.com/content/1291565704146164527/embed",
        },
        {
          titulo_objeto: "Gestão de Projetos",
          area: "Exatas",
          ua: "2906",
          link_h5p: "https://imersys.h5p.com/content/1291741907095473537/embed",
        },
        {
          titulo_objeto: "Pré-molares superiores",
          area: "Saúde",
          ua: "50211",
          link_h5p: "https://imersys.h5p.com/content/1291806098239349887/embed",
        },
        {
          titulo_objeto: "Modos de transporte e suas características",
          area: "Sociais aplicadas",
          ua: "24764",
          link_h5p: "https://imersys.h5p.com/content/1291538711261996687/embed",
        },
      ],
    },
    {
      id: "sub03",
      objeto: "Livro H5P",
      texto_objeto:
        "Os livros interativos são peças gráficas desenvolvidas com o uso do H5P. Esse formato permite ao aluno explorar uma variedade de conteúdos, como textos, imagens e vídeos, de forma interativa. A navegação por capítulos e a integração de atividades promovem um aprendizado mais imersivo e exploratório.",
      h5p: [
        {
          titulo_objeto: "Arte e Produção",
          area: "Educação",
          ua: ": Games",
          link_h5p: "https://imersys.h5p.com/content/1292052737415522287/embed",
        },
        {
          titulo_objeto: "Vida e evolução",
          area: "Saúde",
          ua: ": Games",
          link_h5p: "https://imersys.h5p.com/content/1292038276566145127/embed",
        },
        {
          titulo_objeto: "Planejamento financeiro",
          area: "Sociais aplicadas",
          ua: ": Games",
          link_h5p: "https://imersys.h5p.com/content/1292090944664181917/embed",
        },
      ],
    },
  ],
};

const interativohtml = {
  img_hero: "banner-html-2.png",
  titulo_hero: "Interativos HTML",
  texto_hero:
    "Conteúdos interativos em HTML, que oferecem uma experiência visual e prática para um aprendizado envolvente.",
  general_menu: [
    {
      link_objeto: "interativosh5p",
      objeto: "Interativos H5P",
    },
    {
      link_objeto: "interativoshtml",
      objeto: "Interativos HTML",
    },
    {
      link_objeto: "objetos3d",
      objeto: "Objetos 3D",
    },
    {
      link_objeto: "podcast",
      objeto: "<i>Podcast</i>",
    },
    {
      link_objeto: "videos",
      objeto: "Vídeos",
    },
    {
      link_objeto: "imersivos",
      objeto: "Vídeos Imersivos",
    },
  ],
  item_menu: [
    {
      id: "sub01",
      objeto: "Interativo Canvas",
    },
    {
      id: "sub02",
      objeto: "Linha do Tempo",
    },
    {
      id: "sub03",
      objeto: "Antes e Depois",
    },
    {
      id: "sub04",
      objeto: "Slider",
    },
  ],
  item: [
    {
      id: "sub01",
      objeto: "Interativo Canvas",
      texto_objeto:
        "Canvas interativo em HTML, este recurso permite a criação de ambientes visuais dinâmicos onde o aluno pode interagir com elementos gráficos e dados. Essa ferramenta facilita a exploração de conceitos complexos de maneira visual e prática.",
      interativo_html: [
        {
          titulo_objeto: "Histórico da legislação educacional brasileira",
          area: "Educação",
          ua: "18220",
          interativo: "int-canvas-18220",
        },
        {
          titulo_objeto: "Leis de Newton e suas aplicações",
          area: "Exatas",
          ua: "50598",
          interativo: "int-canvas-50598",
        },
        {
          titulo_objeto: "Sistema Endócrino",
          area: "Saúde",
          ua: "1051",
          interativo: "int-canvas-1051",
        },
      ],
    },
    {
      id: "sub02",
      objeto: "Linha do Tempo",
      texto_objeto:
        "A linha do tempo interativa em HTML possibilita a visualização de eventos e processos ao longo de um período específico. Com esse recurso, o aluno pode explorar cronologias de maneira visual e interativa, clicando em pontos específicos para obter informações detalhadas.",
      interativo_html: [
        {
          titulo_objeto: "Censo Demográfico",
          area: "Educação",
          ua: ": Atualidades",
          interativo: "int-linha-tempo-atualidades",
        },
      ],
    },
    {
      id: "sub03",
      objeto: "Antes e Depois",
      texto_objeto:
        "Peça gráfica desenvolvida em HTML que utiliza uma ferramenta de comparação visual. Esta ferramenta permite a exibição de imagens divididas em duas partes, que podem ser arrastadas para revelar ou ocultar diferentes aspectos.",
      interativo_html: [
        {
          titulo_objeto: "Mindset",
          area: "Sociais Aplicadas",
          ua: "27704",
          interativo: "int-antes-depois-27704",
        },
      ],
    },
    {
      id: "sub04",
      objeto: "Slider",
      texto_objeto:
        "Apresentação desenvolvida em HTML que permite ao aluno navegar por uma sequência de slides de forma interativa, avançando ou retornando entre diferentes telas de conteúdo. Cada slide pode incluir texto, imagens, gráficos ou outros elementos visuais, proporcionando uma forma estruturada e sequencial de explorar informações.",
      interativo_html: [
        {
          titulo_objeto: "Formação da língua latina",
          area: "Educação",
          ua: "59834",
          interativo: "int-slider-59834",
        },
        {
          titulo_objeto:
            "Cálculos para a unidade de Flash de uma máquina fotográfica",
          area: "Exatas",
          ua: "17792",
          interativo: "int-slider-17792",
        },
        {
          titulo_objeto: "Saúde bucal",
          area: "Saúde",
          ua: "58314",
          interativo: "int-slider-58314",
        },
        {
          titulo_objeto: "Vinculação de sites",
          area: "TI",
          ua: "49070",
          interativo: "int-slider-49070",
        },
      ],
    },
  ],
};

const objetos3d = {
  img_hero: "banner-3D-2.png",
  titulo_hero: "Objetos 3D",
  texto_hero:
    "Modelos 3D educacionais que oferecem uma imersão visual e uma experiência de aprendizado inovadora.",
  general_menu: [
    {
      link_objeto: "interativosh5p",
      objeto: "Interativos H5P",
    },
    {
      link_objeto: "interativoshtml",
      objeto: "Interativos HTML",
    },
    {
      link_objeto: "objetos3d",
      objeto: "Objetos 3D",
    },
    {
      link_objeto: "podcast",
      objeto: "<i>Podcast</i>",
    },
    {
      link_objeto: "videos",
      objeto: "Vídeos",
    },
    {
      link_objeto: "imersivos",
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
      objeto3d: [
        {
          titulo_objeto: "Sinal de porque em pergunta",
          area: "Educação",
          ua: "22607",
          link_3d:
            "https://grupoa-edtech.grupoa.education/object/FbqFt0kQTieAq-oscV6P2w",
        },
        {
          titulo_objeto: "Elevador",
          area: "Exatas",
          ua: "17701",
          link_3d:
            "https://grupoa-edtech.grupoa.education/object/AkUwmqZ-QYGXx27PH2Xwig",
        },
        {
          titulo_objeto: "Sistema Auditivo",
          area: "Saúde",
          ua: "15268",
          link_3d:
            "https://grupoa-edtech.grupoa.education/object/JidHkNAeRKWvNJ6vA-cxNg",
        },
        {
          titulo_objeto: "Carrossel vertical",
          area: "Sociais Aplicadas",
          ua: "",
          link_3d:
            "https://grupoa-edtech.grupoa.education/object/Pp-xp91zTMSjHZtHcZ91aw",
        },
      ],
    },
    {
      id: "sub02",
      objeto: "PO3D",
      texto_objeto:
        "Combinação de objetos 3D, estáticos ou animados, com camadas de informação organizadas em capítulos, diretamente alinhadas ao objetivo educacional. Esses objetos tridimensionais permitem a visualização e a compreensão de conceitos complexos de forma estruturada, complementando o aprendizado e aprofundando o entendimento dos temas abordados.",
      objeto3d: [
        {
          titulo_objeto: "Ciclos biogeoquímicos",
          area: "Educação",
          ua: "",
          link_3d:
            "https://grupoa-edtech.grupoa.education/object/FbiGuwalQkSzM2AeUi8UZg",
        },
        {
          titulo_objeto: "Sistemas estruturais",
          area: "Exatas",
          ua: "32343",
          link_3d:
            "https://grupoa-edtech.grupoa.education/object/M2RUI8uRSK-WjGrdB12lAg",
        },
        {
          titulo_objeto: "Alterações do sistema respiratório",
          area: "Saúde",
          ua: "21170",
          link_3d:
            "https://grupoa-edtech.grupoa.education/object/IfxOAvAJQi2DuHmMjzV7NQ",
        },
        {
          titulo_objeto: "Modais de transportes",
          area: "Sociais aplicadas",
          ua: "28596",
          link_3d:
            "https://grupoa-edtech.grupoa.education/object/RQU1l5FzRVWbkh-o4fU1sw",
        },
      ],
    },
  ],
};

const podcast = {
  img_hero: "banner-podcast-2.png",
  titulo_hero: "<i>Podcast</i>",
  texto_hero:
    "Podcasts com especialistas discutindo temas práticos do dia a dia em diversas áreas do conhecimento.",
  general_menu: [
    {
      link_objeto: "interativosh5p",
      objeto: "Interativos H5P",
    },
    {
      link_objeto: "interativoshtml",
      objeto: "Interativos HTML",
    },
    {
      link_objeto: "objetos3d",
      objeto: "Objetos 3D",
    },
    {
      link_objeto: "podcast",
      objeto: "<i>Podcast</i>",
    },
    {
      link_objeto: "videos",
      objeto: "Vídeos",
    },
    {
      link_objeto: "imersivos",
      objeto: "Vídeos Imersivos",
    },
  ],
  item_menu: [
    {
      id: "sub01",
      objeto: "<i>Podcast</i>",
    },
  ],
  item: [
    {
      id: "sub01",
      objeto: "<i>Podcast</i>",
      texto_objeto:
        "Discussões de especialistas sobre temas práticos do dia a dia em diversas áreas do conhecimento. Esses episódios conectam a teoria com a prática, facilitando a compreensão de conceitos complexos e promovendo um aprendizado mais dinâmico.",
      video_samba: [
        {
          titulo_objeto:
            "A inserção do negro nas universidades e no mercado de trabalho",
          area: "Educação",
          ua: "22773",
          link_objeto:
            "https://fast.player.liquidplatform.com/pApiv2/embed/cee29914fad5b594d8f5918df1e801fd/d900ff76454d7c8bb26e33f0aac79641",
        },
        {
          titulo_objeto: "Estatística no cotidiano",
          area: "Exatas",
          ua: "2240",
          link_objeto:
            "https://fast.player.liquidplatform.com/pApiv2/embed/cee29914fad5b594d8f5918df1e801fd/a28b041e59543198b1f1b25f3d657759",
        },
        {
          titulo_objeto: "Saúde do psicólogo no ambiente de trabalho",
          area: "Saúde",
          ua: "1256",
          link_objeto:
            "https://fast.player.liquidplatform.com/pApiv2/embed/cee29914fad5b594d8f5918df1e801fd/8b026a83a6cde082385732a6a700a99b",
        },
        {
          titulo_objeto: "Direitos humanos: História e sociedade",
          area: "Sociais aplicadas",
          ua: "18788",
          link_objeto:
            "https://fast.player.liquidplatform.com/pApiv2/embed/cee29914fad5b594d8f5918df1e801fd/d599db0ffb93edda2e8aa3ebdd3f49ff",
        },
      ],
    },
  ],
};

const videos = {
  img_hero: "banner-videos-2.png",
  titulo_hero: "Vídeos",
  texto_hero:
    "Conteúdos audiovisuais em diversos formatos para aprofundar e enriquecer o estudo de temas específicos.",
  general_menu: [
    {
      link_objeto: "interativosh5p",
      objeto: "Interativos H5P",
    },
    {
      link_objeto: "interativoshtml",
      objeto: "Interativos HTML",
    },
    {
      link_objeto: "objetos3d",
      objeto: "Objetos 3D",
    },
    {
      link_objeto: "podcast",
      objeto: "<i>Podcast</i>",
    },
    {
      link_objeto: "videos",
      objeto: "Vídeos",
    },
    {
      link_objeto: "imersivos",
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
      objeto: "Videoaula Simulação",
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
        "Aulas em formato de vídeo que utilizam recursos visuais e auditivos que proporcionam uma experiência de aprendizado mais rica e envolvente. Estas aulas permitem que o aluno visualize situações relacionadas ao conteúdo, tornando o aprendizado mais próximo da realidade.",
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
      objeto: "Videoaula Simulação",
      texto_objeto:
        "Recriação realista de cenários que permite ao estudante visualizar situações relacionadas ao conteúdo de suas aulas, tornando o aprendizado mais próximo da realidade. Essa abordagem facilita a compreensão de conceitos ao trazer o conteúdo para um contexto prático e visual.",
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
        "Gravação na qual um especialista compartilha suas perspectivas, experiências e conhecimentos sobre um tema específico em uma conversa com outro profissional da área.",
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
  img_hero: "banner_videos-imersivos-2.png",
  titulo_hero: "Vídeos Imersivos",
  texto_hero:
    "Vídeos que envolvem o estudante de maneira profunda, utilizando a tecnologia para criar uma sensação imersiva no conteúdo.",
  general_menu: [
    {
      link_objeto: "interativosh5p",
      objeto: "Interativos H5P",
    },
    {
      link_objeto: "interativoshtml",
      objeto: "Interativos HTML",
    },
    {
      link_objeto: "objetos3d",
      objeto: "Objetos 3D",
    },
    {
      link_objeto: "podcast",
      objeto: "<i>Podcast</i>",
    },
    {
      link_objeto: "videos",
      objeto: "Vídeos",
    },
    {
      link_objeto: "imersivos",
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
        "Permite que o estudante participe ativamente do conteúdo por meio da ferramenta H5P, tomando decisões que influenciam o desenrolar do vídeo. Esta ferramenta promove uma experiência de aprendizado mais dinâmica incentivando a participação ativa e o aprofundamento dos tópicos abordados.",
      h5p: [
        {
          titulo_objeto: "Assembleias escolares",
          area: "Educação",
          ua: "17122",
          link_h5p: "https://imersys.h5p.com/content/1292349300253181977/embed",
        },
        {
          titulo_objeto: "Regra de três simples e composta",
          area: "Exatas",
          ua: "9748",
          link_h5p: "https://imersys.h5p.com/content/1292143630797739877/embed",
        },
        {
          titulo_objeto: "Câncer de cólon e Colostomia",
          area: "Saúde",
          ua: "18883",
          link_h5p: "https://imersys.h5p.com/content/1292089954686145507/embed",
        },
        {
          titulo_objeto: "Escalada na montanha e o Ciclo de vida do projeto",
          area: "Sociais aplicadas",
          ua: "58333",
          link_h5p: "https://imersys.h5p.com/content/1292320854394387207/embed",
        },
      ],
    },
    {
      id: "sub02",
      objeto: "Vídeos 360º",
      texto_objeto:
        "Os vídeos 360° permitem que o estudante explore o ambiente ao redor ao mover a perspectiva do vídeo. Essa tecnologia oferece uma experiência imersiva, permitindo uma visualização completa e interativa do cenário, o que enriquece a compreensão e o engajamento com o conteúdo abordado.",
      imersivo: [
        {
          titulo_objeto: "Museu do Holocausto",
          area: "Educação",
          ua: "44508",
          link_imersivo: "https://player.imersys.com/video/832398323",
        },
        {
          titulo_objeto: "Distribuições contínuas de probabilidade",
          area: "Exatas",
          ua: "2245",
          link_imersivo: "https://player.imersys.com/video/855211645",
        },
        {
          titulo_objeto: "Tomografia Computadorizada",
          area: "Saúde",
          ua: "25059",
          link_imersivo: "https://player.imersys.com/video/883393683",
        },
        {
          titulo_objeto: "Regra de pareto",
          area: "Sociais aplicadas",
          ua: "18397",
          link_imersivo: "https://player.imersys.com/video/855211645",
        },
      ],
    },
  ],
};
