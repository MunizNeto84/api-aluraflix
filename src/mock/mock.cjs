const mockCategorias = [
  { titulo: "livre", cor: "#2DE1FC" },
  { titulo: "tecnologia", cor: "#2AFC98" },
  { titulo: "humor", cor: "#09E85E" },
  { titulo: "linux", cor: "#16C172" },
  { titulo: "games", cor: "#214F4B" },
  { titulo: "estudo", cor: "#873D48" },
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
    nickName: "CodigoFonteTV",
    urlLogo: "https://i.postimg.cc/VkLvQVw6/codigo-fonte.png",
    urlCapa: "https://i.postimg.cc/BnY6qBZC/capa-lista.jpg",
    urlPerfil: "https://i.postimg.cc/ZqX5NYdB/capa-perfil.jpg",
    urlCarrossel: "https://i.postimg.cc/d0h0DZLc/codigo-capa-00.jpg",
    views: 1,
  },
  {
    nickName: "FabioAkita",
    urlLogo: "https://i.postimg.cc/s1CWW1SN/fabio-logo.png",
    urlCapa: "https://i.postimg.cc/xTmydVHZ/capa-lista.jpg",
    urlPerfil: "https://i.postimg.cc/gcnKdgYg/capa-perfil.jpg",
    urlCarrossel: "https://i.postimg.cc/9QjPRgYQ/fabio-capa-00.jpg",
    views: 1,
  },
  {
    nickName: "ManoDeyvin",
    urlLogo: "https://i.postimg.cc/xTLMT7B3/deyvin-logo.png",
    urlCapa: "https://i.postimg.cc/nhZ7s2Jb/capa-lista.jpg",
    urlPerfil: "https://i.postimg.cc/Hk2MbMYJ/capa-perfil1.jpg",
    urlCarrossel: "https://i.postimg.cc/qBP2r0D7/deyvin-capa-00.jpg",
    views: 1,
  },
  {
    nickName: "BaltaIO",
    urlLogo: "https://i.postimg.cc/YqNLwFmX/balta-logo.png",
    urlCapa: "https://i.postimg.cc/TP1KmHNS/capa-lista.jpg",
    urlPerfil: "https://i.postimg.cc/TPspcqZP/capa-perfil.jpg",
    urlCarrossel: "https://i.postimg.cc/FHDfYQp3/balta-capa-00.jpg",
    views: 1,
  },
];

const mockFreeVideos = [
  {
    categoriaId: 1,
    canalId: 1,
    titulo: "Maior Tapa que Steve Jobs Já Deu Num Programador",
    descricao:
      "Steve Jobs versus um programador da Apple resultou numa das respostas mais marcantes da história da tecnologia e que possui conhecimentos profundos sobre a relação entre produto, marketing e engenharia de software que todo programador (ou que trabalha em alguma área da programação) deveria saber.",
    url: "https://youtu.be/Z1GNW_woXI0",
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
    canalId: 9,
    titulo: "Como se tornar CTO e ser odiado por metade da empresa",
    descricao:
      "Neste vídeo eu mostro como evitar ser demitido em 2025, em meio à pressão por produtividade aliada à crescente automação e desafios econômicos, como uma alta na taxa Selic.",
    url: "https://youtu.be/OGggKHoXk_8",
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
    canalId: 8,
    titulo: "Por que calculadoras não são computadores?",
    descricao:
      "Quem foi John Von Neumann? Como ele e Alan Turing inventaram o computador moderno? E como uma máquina de escrever levou Alan Turing ao computador?",
    url: "https://youtu.be/G4MvFT8TGII",
  },
  {
    categoriaId: 1,
    canalId: 8,
    titulo: "Manifesto Anti-Parasita: Seja um Criador",
    descricao:
      "Disclaimer: este episódio é bem atípico, não espere que eu faça esse formato sempre, é só hoje, uma indulgência a mim mesmo :-D",
    url: "https://youtu.be/nX0wPjNzn3o",
  },
  {
    categoriaId: 1,
    canalId: 4,
    titulo: "EU PAREI DE PROCRASTINAR E FUI PROMOVIDA",
    descricao:
      "Você já sentiu que está sempre adiando os estudos de programação? Ou que começa, mas nunca consegue manter a consistência? Eu também passei por isso. Mas quando finalmente entendi como estudar da maneira certa e parei de procrastinar, minha evolução foi absurda – e isso levou à minha promoção!",
    url: "https://youtu.be/_nWNhLvtgMo",
  },
];

const mockVideos = [
  {
    categoriaId: 2,
    canalId: 1,
    titulo: "Como Controlar a Ansiedade.",
    descricao:
      "Ansiedade matou a experiência de grande parte da minha vida, mas agora não mais. Estou há meses e anos me analisando, estudando, praticando e agora estou 100% seguro em repassar tudo o que eu aprendi sobre como controlar a ansiedade, um dos meus maiores inimigos.",
    url: "https://youtu.be/dZJbORri0ro",
  },
  {
    categoriaId: 2,
    canalId: 4,
    titulo: "É POR ISSO QUE VOCÊ CONTINUA SENDO JÚNIOR",
    descricao:
      "Todos nós nos importamos com a nossa carreira profissional. E se sentir estagnado no crescimeto é super comum.",
    url: "https://youtu.be/TiJX0_35P2A",
  },
  {
    categoriaId: 2,
    canalId: 1,
    titulo: "3 Técnicas Que Eu Uso Para Aprender a Programar Qualquer Coisa.",
    descricao:
      "Aprender a programar pode ser frustrante, principalmente se você estiver diante de um tópico avançado, o que é ótimo, porque este vídeo é sobre quais técnicas eu uso e sobre como aprender a programar sozinho, depois de meses de observação.",
    url: "https://youtu.be/ZtMzB5CoekE",
  },
  {
    categoriaId: 2,
    canalId: 1,
    titulo:
      "Um júnior já deveria saber como reduzir a quantidade de IFs de um código",
    descricao:
      "Este vai ser mais um vídeo que conversamos sobre arquitetura de software e vai ser massa!!! If, else, if else e switch são condicionais clássicas encontradas em várias linguagens de programação e que definem a estrutura lógica do seu programa.",
    url: "https://youtu.be/Lf3ZV0UsnEo",
  },
  {
    categoriaId: 2,
    canalId: 1,
    titulo: "5 Cuidados Que NINGUÉM Ensina na Programação.",
    descricao:
      "Programar é uma habilidade MUITO valiosa, porém aprender a programar pode ser algo extremamente frustrante, mas para ajudar nisso eu reuni nesse video 5 cuidados que eu teria se eu decidisse entrar na área da programação hoje.",
    url: "https://youtu.be/q8mgiv84tQE",
  },
  {
    categoriaId: 3,
    canalId: 2,
    titulo: "SE É POBRE VIRE PEDREIRO NÃO PROGRAMADOR!",
    descricao:
      "Sou Horacio Fiasco engenheiro atualmente morando na inglaterra, falo sobre programaçao de uma maneira mais divertida e abordo Java de uma forma que voce nunca viu.",
    url: "https://youtu.be/l2pCeX_I19o",
  },
  {
    categoriaId: 3,
    canalId: 2,
    titulo: "QUEM FAZ FACULDADE DE ADS É ANALFABETO FUNCIONAL?",
    descricao:
      "Se você está entrando no mundo da tecnologia ou quer melhorar suas habilidades em computação, este vídeo é para você! Dê o play e prepare-se para transformar seu aprendizado.",
    url: "https://youtu.be/Pw0xOof7eGs",
  },
  {
    categoriaId: 3,
    canalId: 2,
    titulo: "Não da mais pra ser programador",
    descricao:
      "A Programação como Arte e Processo de Aprendizado! Neste vídeo, exploramos como a programação vai além de habilidades técnicas, sendo uma verdadeira arte que exige prática e aprendizado contínuo.",
    url: "https://youtu.be/Uimx5SXR-rQ",
  },
  {
    categoriaId: 3,
    canalId: 2,
    titulo: "O golpe mais genial do mundo usando inteligência artificial",
    descricao:
      "O golpe mais genial do mundo usando inteligência artificial, video do canal do fiasco.",
    url: "https://youtu.be/RIEjaVw2neg",
  },
  {
    categoriaId: 3,
    canalId: 9,
    titulo: "SCRUM MASTER + Dev Júnior = Uma noite inteira de problemas!",
    descricao:
      "Esse conteúdinho faz parte da live oficial do canal, onde trago notícias,, tretas sobre mercado e carreira de tecnologia de uma forma zoada.",
    url: "https://youtu.be/apZg62nPyMI",
  },
  {
    categoriaId: 3,
    canalId: 9,
    titulo: "DENÚNCIA: Os salários MAIS miseráveis em tech",
    descricao:
      "Esse conteúdinho faz parte da live oficial do canal, onde trago notícias, tretas sobre mercado e carreira de tecnologia de uma forma zoada.",
    url: "https://youtu.be/yhQWzN9gPLY",
  },
  {
    categoriaId: 3,
    canalId: 9,
    titulo:
      "A programadora que estudou 300 dias seguidos e agora está esgotada!",
    descricao:
      "Esse conteúdinho faz parte da live oficial do canal, onde trago notícias, tretas sobre mercado e carreira de tecnologia de uma forma zoada.",
    url: "https://youtu.be/RyOJS84cqBI",
  },
  {
    categoriaId: 3,
    canalId: 2,
    titulo: "Passei dos 30 e não sei mais fazer amigos",
    descricao:
      "Eu nao tenho muito pra falar a respeito do video meu intuito é so ter um lugar onde eu possa despejar minhas ideias sem pressão.",
    url: "https://youtu.be/iMl_5d_inyE",
  },
  {
    categoriaId: 5,
    canalId: 6,
    titulo: "GAMER CLT",
    descricao:
      "Hoje venho mostrar meus primeiros dias voltando a trabalhar. A semana foi absurdamente puxada, mas tô feliz kkkk",
    url: "https://youtu.be/BbTx8fs3fs0",
  },
  {
    categoriaId: 5,
    canalId: 6,
    titulo: "PLATINAR JOGOS VAI ACABAR COM A SUA EXPERIÊNCIA",
    descricao:
      "Platinar todos os jogos tem um preço… e não é só dinheiro! 💀💰 Neste vídeo, faço uma reflexão sobre o lado obscuro dos platinadores completistas: as coisas que fazemos que não são tão legais assim para conquistar aquele 100%",
    url: "https://youtu.be/jPQVlFgVCms",
  },
  {
    categoriaId: 5,
    canalId: 6,
    titulo: "SEKIRO É OU NÃO É UM SOULSLIKE?",
    descricao:
      "Neste vídeo, eu explico por que Sekiro é considerado um Souls-Like, com base nas minhas pesquisas e no meu ponto de vista.",
    url: "https://youtu.be/Q7NLgGQdqmk",
  },
  {
    categoriaId: 5,
    canalId: 6,
    titulo: "O CARA QUEBROU O HOLLOW KNIGHT EM 4 MINUTOS KKK",
    descricao:
      "Nesse vídeo você verá Hollow Knight sendo zerado em menos de 5 minutos, mas aqui você entenderá (quase) tudo. Vou te explicar os bugs, a rota, os requisitos e como o jogador Staxis conseguiu esse feito.",
    url: "https://youtu.be/2x7YdnhUQ94",
  },
  {
    categoriaId: 5,
    canalId: 6,
    titulo: "MANDARAM O PIOR VÍDEO DE DEATH STRANDING PRO CROZAO",
    descricao:
      "Death Stranding ainda é chato pra burro em 2025. (Fuji não sabe o que fala...)",
    url: "https://youtu.be/CnFDU6jhqZQ",
  },
  {
    categoriaId: 5,
    canalId: 6,
    titulo: "O MELHOR VÍDEO QUE JÁ VI SOBRE RED DEAD REDEMPTION 2",
    descricao: "Canal do cross",
    url: "https://youtu.be/th78d0v19Sg",
  },
  {
    categoriaId: 5,
    canalId: 6,
    titulo: "ESSES JOGOS AQUI VOCÊ NÃO VAI PLATINAR",
    descricao: "Canal do cross",
    url: "https://youtu.be/wi-auvwe_n8",
  },
  {
    categoriaId: 6,
    canalId: 4,
    titulo: "Curso de Angular | Saindo DO ZERO em 1 HORA",
    descricao:
      "Com o lançamento do Angular 18, surgiram mudanças importantes na sintaxe básica do framework. Dominar essa sintaxe e os conceitos de uma linguagem de programação e framework é essencial para avançar no aprendizado.",
    url: "https://youtu.be/VumdXFJ4n7o",
  },
  {
    categoriaId: 6,
    canalId: 4,
    titulo: "ASSISTA ESSE VÍDEO se QUER APRENDER ANGULAR em 2025",
    descricao:
      "O estudo organizado e planejado de um tema ajuda a alcançar mais rapidamente um alto nível de proficiência. Por isso, no vídeo de hoje eu trago no vídeo de hoje um guia essencial para quem quer aprender Angular em 2025.",
    url: "https://youtu.be/2U_IIp7KAKg",
  },
  {
    categoriaId: 6,
    canalId: 4,
    titulo: "ASSISTA ESSE VÍDEO se QUER APRENDER JAVA em 2025",
    descricao:
      "Java está na top 3 linguagens de programação mais usadas no mundo desde 1995. Neste vídeo, apresento o Guia Completo para quem quer aprender Java em 2025, com o roadmap essencial para quem deseja aprender Java do zero ou aperfeiçoar suas habilidades",
    url: "https://youtu.be/C8aKTAhpA7w",
  },
  {
    categoriaId: 6,
    canalId: 4,
    titulo: "Como usar o SQL Server no Java Spring c/ Parallels Desktop",
    descricao:
      "O SQL Server é um sistema de gerenciamento de banco de dados desenvolvido pela Microsoft, amplamente utilizado para armazenar e gerenciar dados em aplicações de pequeno a grande porte.",
    url: "https://youtu.be/IhyXeCmAmC4",
  },
  {
    categoriaId: 4,
    canalId: 5,
    titulo: "Esse Linux copiou o Windows 11 na cara dura e fez melhor?",
    descricao:
      "O Deepin 25 foi anunciado em sua edição preview, que pode ser encarada como um beta também. A distro Linux chinesa reforça o visual Windows Like, inspirado no Windows 11.",
    url: "https://youtu.be/FE5cTAzXlKI",
  },
  {
    categoriaId: 4,
    canalId: 5,
    titulo: "Eu instalei o Ubuntu do jeito errado esse tempo todo!",
    descricao:
      "Aprenda a usar o recurso de instalação automática do Ubuntu para facilitar o processo de setup da distro Linux em qualquer equipamento. Depois de consultar  a documentação da Canonical sobre como usar o arquivo de autoinstall.yml.",
    url: "https://youtu.be/pB3Td7paWUc",
  },
  {
    categoriaId: 4,
    canalId: 5,
    titulo: "O KDE vai fazer o quê?",
    descricao:
      "O projeto KDE anunciou a sua meta audaciosa de criar o KDE Linux, o sistema operacional, com base no Arch Linux, que será a distro oficial do projeto. ",
    url: "https://youtu.be/PuGUHUjJ-ww",
  },
  {
    categoriaId: 4,
    canalId: 5,
    titulo: "2025 é o ano do Linux no Desktop?",
    descricao:
      "2025 reserva muitas coisas interessantes para o mundo Linux, várias delas devem impulsionar o crescimento do sistema em desktops, então, será que finalmente veremos o meme do ano do Linux se concretizar?",
    url: "https://youtu.be/vTLLr7Fs1Ho",
  },
  {
    categoriaId: 4,
    canalId: 5,
    titulo: "5 Distros Linux que MERECEM a sua Atenção em 2025",
    descricao:
      "2025 terá vários lançamentos importantes para o mundo Linux e hoje vamos te contar sobre 5 distribuições Linux que merecem a sua atenção no próximo ano, com lançamentos importantes, novas versões oficiais, novas interfaces e um prelúdio do futuro.",
    url: "https://youtu.be/RIEjaVw2neg",
  },
  {
    categoriaId: 2,
    canalId: 8,
    titulo: "Conhecimentos Básicos para Iniciantes em Programação",
    descricao:
      "Neste terceiro episódio da série Começando aos 40 vou finalmente começar a tocar em assuntos mais práticos, pra começar o que eu considero que é o absolutamente básico que você precisa começar a dominar o quanto antes.",
    url: "https://youtu.be/sx4hAHhO9CY",
  },
  {
    categoriaId: 2,
    canalId: 8,
    titulo: "Guia DEFINITIVO de Aprendendo a Aprender",
    descricao:
      "Quem é o tipo de profissional que vai sobreviver à Crise Econômica Pós-COVID-19 na nossa área de desenvolvimento de software? Como se faz pra ser tornar esse profissional?",
    url: "https://youtu.be/oUPaJxk6TZ0",
  },
  {
    categoriaId: 6,
    canalId: 8,
    titulo: "O Guia DEFINITIVO de UBUNTU para Devs Iniciantes",
    descricao:
      "Vou pegar um Ubuntu recém-instalado, e do zero ir até um ambiente completo para desenvolvedores de software (em particular Web, claro), com Docker, Tmux, Vim, ASDF e durante o percurso explicar várias coisas sobre Linux em geral, várias dicas, e até mesmo como customizar os temas pra ficar dahura!",
    url: "https://youtu.be/epiyExCyb2s",
  },
  {
    categoriaId: 6,
    canalId: 10,
    titulo: "GUIDs no .NET 9: Novidades que Você Precisa Conhecer",
    descricao:
      "Novidade no .NET 9! Os GUIDs estão de cara nova e com recursos que você precisa conhecer! Se você quer entender como essas mudanças vão impactar seu desenvolvimento, não perca o vídeo de hoje no nosso canal.",
    url: "https://youtu.be/0aN4Y0ac7X0",
  },
  {
    categoriaId: 2,
    canalId: 10,
    titulo: "Arquitetura de Software - Arquitetura Importa ou é Exagero?",
    descricao:
      "Neste vídeo, vamos discutir se a arquitetura realmente faz toda a diferença no desenvolvimento de software ou se, em alguns casos, o foco deveria estar em outras áreas.",
    url: "https://youtu.be/7s0RdG6cVOU",
  },
  {
    categoriaId: 2,
    canalId: 7,
    titulo: "Como Resolver o Bug dos Boletos de 2025",
    descricao:
      "Apesar de existir uma plataforma de boletos de pagamento no Brasil desde 2018, muitas empresas ainda fazem essa geração dentro de casa. Os dias estão literalmente contados, pois a partir de 22 de fevereiro de 2025 o fator de vencimento deve ser calculado com outro critério.",
    url: "https://youtu.be/IqJJuwsC0ec",
  },
  {
    categoriaId: 6,
    canalId: 7,
    titulo: "Minicurso de SQL (Saia do Zero em 1 Hora)",
    descricao:
      "SQL é a linguagem essencial para manipular banco de dados é essencial para qualquer desenvolvedor! Aprender SQL corretamente é um excelente diferencial profissional.",
    url: "https://youtu.be/dpanYy8IrcU",
  },
  {
    categoriaId: 2,
    canalId: 3,
    titulo: "A verdade sobre o desenvolvimento de Software!",
    descricao:
      "Hoje, recebemos Giulia Bordignon , desenvolvedora de software na Aquasoft, para uma conversa incrível sobre sua trajetória e os desafios enfrentados ao longo de mais de 7 anos de experiência no desenvolvimento de soluções em .NET e C#.",
    url: "https://youtu.be/3A2r2g_S01U",
  },
];

module.exports = { mockCategorias, mockCanais, mockFreeVideos, mockVideos };
