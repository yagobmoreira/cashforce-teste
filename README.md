<h1 align="center">
  Cashforce
</h1>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/yagobmoreira/cashforce-teste">
  <img alt="GitHub Top Language" src="https://img.shields.io/github/languages/top/yagobmoreira/cashforce-teste" />
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/yagobmoreira/cashforce-teste">
</p>

# Cashforce-teste

Boas-vindas ao repositório Cashforce-teste.

Este projeto apresenta a conclusão do teste técnico. Uma aplicação full-stack em que, foi desenvolvido uma API em Node utilizando-se o framework express e a biblioteca sequelize como ORM, com conexão a um banco de dados MySQL. O frontend da aplicação foi desenvolvido com Nuxt.

### 📝 Requisitos

Antes de baixar o projeto é necessário ter as seguintes ferramentas já instaladas:

* [Git](https://git-scm.com)
* [Node.js](https://nodejs.org/en/)
* [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/pt/) ou [yarn](https://yarnpkg.com/)
* [docker](https://www.docker.com/)


#### Configuração com Docker (Recomendado)
1. Clone o repositório (Utilizar Link SSH).

2. Acesse a pasta do projeto:
```bash
  cd cashforce-teste
```
3. Executar os containers Docker
```sh
  npm run compose:up
```

4. Verificar a aplicação em http://localhost:3000/


### Configuração

Passo a passo para clonar e executar a aplicação na sua máquina:

1. Clone o repositório (Utilizar Link SSH).

2. Acesse a pasta do projeto:
```bash
  cd cashforce-teste
```
3. Instale as dependências do projeto:
```bash
  npm run install:apps
```
4. Execute o Back-end da aplicação em modo desenvolvimento:
```bash
  npm run dev:backend
```
5. Execute o Front-end da aplicação em modo desenvolvimento:
```bash
  npm run dev:frontend
```
>Nota: Por padrão o Front-end estará rodando na porta 5173, o Back-end na porta 3000

>Nota: Será necessário adicionar variáveis ambientes

[env_example_backend](./backend/.env.example)
[env_example_frontend](./frontend/.env.example)

## 🛠 Tecnologias

As seguintes libs foram usadas na construção do projeto:

### Backend
- **[TypeScript](https://www.typescriptlang.org/)**
- **[Express](https://expressjs.com/pt-br/)**
- **[Sequelize](https://sequelize.org/)**
- **[Joi](https://joi.dev/)**

### Frontend
- **[Vue](https://vuejs.org/)**
- **[Nuxt](https://nuxt.com/)**
- **[NuxtUI](https://ui.nuxt.com/)**
- **[TailwindCSS](https://tailwindcss.com/)**
