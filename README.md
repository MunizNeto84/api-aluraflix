## `🚧 Em andamento 🚧`

# api-aluraflix

Este repositório hospeda o backend da plataforma **Aluraflix**, projetada para organizar listas de vídeos. Os usuários podem criar e gerenciar suas listas de vídeos favoritas, categorizando os vídeos conforme desejado.
A API segue o padrão REST, conta com autenticação segura e inclui testes automatizados para garantir a estabilidade e confiabilidade do sistema.

## 💻 api-aluraflix-v1

**🚀 Iniciando projeto:**

```bash
 npm run dev
```

## 🧩 Dependências

**Instalando dependências:**

```bash
npm install
```

**Express**: Framework para criar servidores web e APIs.
**dotenv**: Gerencia variáveis de ambiente carregando-as de um arquivo `.env`.
**dotenv-expand**: Expande variáveis dentro do próprio `.env`, permitindo referências a outras variáveis.
**pg**: Cliente PostgreSQL para Node.js, permitindo conexões e consultas ao banco.
**Sequelize**: ORM para trabalhar com bancos de dados SQL, oferecendo abstrações como models, migrations e queries programáticas.
**sequelize-cli**: Ferramenta de linha de comando do Sequelize para gerar models, migrations e seeders.

**🧪 Dependências de Testes:**

- **Jest**: Framework de testes para JavaScript.
- **Supertest**: Biblioteca para testar APIs REST, permitindo fazer requisições HTTP.

## 🗄️ Banco de Dados

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/70px-Postgresql_elephant.svg.png" width="70" alt="postgresql"  />
   
**PostgreSQL**

Optei por usar _PostgreSQL_ como banco de dados neste projeto porque ele é gratuito, além disso, já tenho alguma familiaridade com ele no trabalho. Sua comunidade ativa facilita a resolução de dúvidas e aprendizado.

<img src="https://hyunseob.github.io/images/sequelizejs.png" width="70" alt="sequelizejs" />

**Sequelizejs**
Optei por usar o **Sequelize** neste projeto porque é um **ORM (Object Relational Mapping)** poderoso e fácil de usar, que permite interagir com bancos de dados de forma programática, evitando a necessidade de escrever SQL diretamente, o que ajuda a prevenir **SQL injections**. Além disso, ele é compatível com o **PostgreSQL**, facilitando a integração com a aplicação no backend. Já tenho alguma familiaridade com o Sequelize, nos cursos da Alura: **ORM com Node.js: desenvolvendo uma API com Sequelize e SQLite** e **ORM com Node.js: avançando nas funcionalidades do Sequelize**, feitos pela [Juliana Amoasei](https://github.com/JulianaAmoasei).

**📦 PostgreSQL Local:**
Neste projeto, estou utilizando o **PostgreSQL** rodando dentro de um **contêiner Docker** no **WSL** para garantir um ambiente isolado. O Docker facilita a configuração e o gerenciamento do banco de dados, sem interferir no meu sistema operacional principal.

**🚀 Inciando:**

_Arquivo: `.env`:_

```bash
POSTGRES_HOST=localhost

POSTGRES_PORT=5432,

POSTGRES_USER=local_user

POSTGRES_DB=local_db

POSTGRES_PASSWORD=local_password

DATABASE_URL=postgres://local_user:local_password@localhost:5432/local_db
```

**Docker:**

```bash
npm run docker:up
```

**Migrations:**

```bash
npm run migrate:up
```

**Seeds:**

```bash
npm run migrate:seeds
```

## 🧪 Testes

<img src="https://www.jetbrains.com/guide/assets/jest-5ee71e9b.svg" width="70" alt="Jest" />

Optei por usar o **Jest** e o **Supertest** neste projeto para garantir testes automatizados e de integração. O **Jest** é uma biblioteca de testes de fácil entendimento, ideal para testes unitários, o que me ajuda a garantir que a lógica do código está funcionando corretamente. Já o **Supertest** é perfeito para testar APIs, permitindo simular requisições HTTP de forma simples. Tenho alguma familiaridade com essas ferramentas, tendo aprendido sobre elas no curso: **Node.js: testes unitários e de integração** da Alura.

**🧪 Testando:**

```bash
npm run test
```

## 🚀 Deploy
