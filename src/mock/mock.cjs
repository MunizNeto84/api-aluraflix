const mockCategorias = [
  { titulo: "livre", cor: "#e5e5e5" },
  { titulo: "tecnologia", cor: "#00ff00" },
  { titulo: "humor", cor: "#00fa33" },
];

const mockCanais = [
  {
    nickName: "Filipe Deschamps",
    urlLogo: "https://i.postimg.cc/HL2P1JJ8/filipe-logo.png",
    urlCapa: "https://i.postimg.cc/63pbW9Rj/capa-lista.jpg",
    urlPerfil: "https://i.postimg.cc/wMtWN0wD/filipe-capa-simples.jpg",
    urlCarrossel: "https://i.postimg.cc/PxV3NBQt/filipe-capa-00.jpg",
    views: 10,
  },
  {
    nickName: "Fiasco",
    urlLogo: "https://i.postimg.cc/DfDph3z6/logo-fiasco.png",
    urlCapa: "https://i.postimg.cc/KYZJfZ9G/capa-lista.jpg",
    urlPerfil: "https://i.postimg.cc/kgPjVNKt/fiasco.jpg",
    urlCarrossel: "https://i.postimg.cc/130vDgr7/capa.jpg",
    views: 5,
  },
  {
    nickName: "Giulia Bordignon",
    urlLogo: "https://i.postimg.cc/vB57wk2q/giulia-logo.png",
    urlCapa: "https://i.postimg.cc/MHx765hW/capa-lista.jpg",
    urlPerfil: "https://i.postimg.cc/8kBdK86s/capa-perfil.jpg",
    urlCarrossel: "https://i.postimg.cc/WznMhrv0/giulia-capa-00.jpg",
    views: 3,
  },
  {
    nickName: "Fernanda Kipper",
    urlLogo: "https://i.postimg.cc/Gm9kmHSs/fernanda-logo.png",
    urlCapa: "https://i.postimg.cc/Hs6wmQ3g/capa-lista.jpg",
    urlPerfil: "https://i.postimg.cc/wBmLDnzq/capa-perfil.jpg",
    urlCarrossel: "https://i.postimg.cc/rwb50MvZ/dio-capa-00.jpg",
    views: 2,
  },
  {
    nickName: "Diolinux",
    urlLogo: "https://i.postimg.cc/sx6vkJzH/dio-logo.png",
    urlCapa: "https://i.postimg.cc/59nYQfz5/capa-lista.jpg",
    urlPerfil: "https://i.postimg.cc/VLhJ44Dd/capa-perfil.jpg",
    urlCarrossel: "https://i.postimg.cc/28yq4gds/dio-capa-00.jpg",
    views: 4,
  },
  {
    nickName: "Cross",
    urlLogo: "https://i.postimg.cc/3wXW8h7v/cross-logo.png",
    urlCapa: "https://i.postimg.cc/50p0zmX9/capa-lista.jpg",
    urlPerfil: "https://i.postimg.cc/0jQN0JSY/cross-perfil.jpg",
    urlCarrossel: "https://i.postimg.cc/SsmRjPNt/capa.jpg",
    views: 5,
  },
  {
    nickName: "Alanzoka",
    urlLogo: "https://i.postimg.cc/7Lk0MmZS/alan-logo.png",
    urlCapa: "https://i.postimg.cc/0Q5ShjmQ/capa-lista.jpg",
    urlPerfil: "https://i.postimg.cc/j58fTTQh/capa-simples.jpg",
    urlCarrossel: "https://i.postimg.cc/vmt9Pf4k/alazoka-capa-00.jpg",
    views: 1,
  },
];

const mockFreeVideos = [
  {
    categoriaId: 1,
    canalId: 1,
    titulo: "Como se Tornar o CTO da Sua Empresa (verdades crueis)",
    descricao:
      "Neste vídeo eu mostro um documento interno do Pagar.me, criado em 2015, que ajudou a decidir meu futuro na empresa. Revejo essa apresentação como parte de um novo quadro no canal, Request/Response. Falo também sobre ser CTO e a importância de abraçar todos os aspectos de gestão, desde vendas até suporte, gerenciando o estresse e garantindo o sucesso de todos da equipe.",
    url: "https://youtu.be/M3na7_wwvPQ",
  },
  {
    categoriaId: 1,
    canalId: 2,
    titulo: "INTELIGENCIA ARTIFICIAL NOS JOGOS ATÉ NO GTA6",
    descricao:
      "O vídeo do canal Fiasco explora a evolução da inteligência artificial nos jogos, destacando como essa tecnologia está tornando NPCs mais realistas e dinâmicos. Além disso, aborda rumores e expectativas sobre o uso de IA no GTA 6, prometendo uma experiência mais imersiva e interativa no jogo da Rockstar.",
    url: "https://youtu.be/40S8Hwd9s0A",
  },
  {
    categoriaId: 1,
    canalId: 4,
    titulo: "DOCKER COMPOSE É FACIL | Aprenda Docker Compose em 15 minutos",
    descricao:
      "Docker Compose é uma ferramenta muito poderosa do Docker que vai te ajudar a orquestrar e gerenciar múltiplos containers de forma simples e declarativa. Ele permite definir e configurar todos os serviços necessários para uma aplicação em um único arquivo docker-compose.yml, facilitando a criação, execução e escalabilidade de ambientes completos com apenas alguns comandos. Nesse video veremos para que serve e como utilizar o Docker Compose de forma rápida e descomplicada.",
    url: "https://youtu.be/D_ha0g9yS2E",
  },
  {
    categoriaId: 1,
    canalId: 3,
    titulo: "Backend não e tão difícil quanto parece",
    descricao:
      "Quando olhamos para o backend ele parece intimidador, mas nesta palestra, vou mostrar a você como se aprofundar nesse assunto.Vamos discutir os conceitos fundamentais do backend, como ele está presente no seu dia a dia, tecnologias comuns usadas na construção de sistemas e as habilidades necessárias para você construir sua jornada como desenvolvedor backend.",
    url: "https://youtu.be/zogwQvcoY9s",
  },
  {
    categoriaId: 1,
    canalId: 5,
    titulo:
      "Cadê o Disco C: do Linux? Entenda a estrutura de pastas do Sistema",
    descricao:
      "Linux e Windows são dois sistemas operacionais que tem algumas similaridades, mas que também tem várias diferenças. Uma das diferenças mais importantes está na própria estrutura do sistema, e como cada um organiza das pastas na unidade de disco principal. Hoje vamos contrastar o Disco C do Windows com a Raiz do Linux (Root) e entender para que servem cada uma das pastas de um sistema Linux, incluíndo os links simbólicos, pastas restritas e ocultas.",
    url: "https://youtu.be/CZKdJzUQ1zQ",
  },
  {
    categoriaId: 1,
    canalId: 1,
    titulo: "Este Vídeo Pode Salvar o Seu Emprego",
    descricao:
      "Neste vídeo eu mostro como evitar ser demitido em 2025, em meio à pressão por produtividade aliada à crescente automação e desafios econômicos, como uma alta na taxa Selic.",
    url: "https://youtu.be/JtxE-VGm9jU",
  },
  {
    categoriaId: 1,
    canalId: 2,
    titulo: "QUEM FAZ FACULDADE DE ADS É ANALFABETO FUNCIONAL?",
    descricao:
      "Se você está entrando no mundo da tecnologia ou quer melhorar suas habilidades em computação, este vídeo é para você! Dê o play e prepare-se para transformar seu aprendizado.",
    url: "https://youtu.be/Pw0xOof7eGs",
  },
  {
    categoriaId: 1,
    canalId: 6,
    titulo: "JOGOS NÃO SÃO MAIS MARCANTES OU VOCÊ NEM GOSTAVA TANTO ASSIM?",
    descricao:
      "O vídeo do canal Cross discute por que muitos jogadores sentem que os jogos atuais não são tão marcantes quanto os do passado. Ele analisa fatores como nostalgia, mudanças na indústria, saturação de lançamentos e até a forma como a idade influencia a percepção dos games. Será que os jogos realmente perderam a magia ou a experiência do jogador mudou ao longo do tempo?",
    url: "https://youtu.be/4uKNrysJbXg",
  },
  {
    categoriaId: 1,
    canalId: 1,
    titulo: "Está Pronto para Ser Respondido em Vídeo?",
    descricao:
      "Neste vídeo eu falo sobre um novo quadro chamado Request/Response, onde você me envia uma Request em vídeo e eu retorno com um Response também em vídeo 😍 Eu sinceramente acredito que essa nossa interação por vídeo vai contribuir e energizar toda a nossa comunidade!",
    url: "https://youtu.be/hMOtVWMr4_k",
  },
];

module.exports = { mockCategorias, mockCanais, mockFreeVideos };
