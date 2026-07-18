# ConectaPET

Site do ConectaPET — evento organizado em parceria pelos grupos **Conectadas** e **PET-Informática**.

Feito com [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) via [Vite](https://vite.dev/), estilizado com [Tailwind CSS](https://tailwindcss.com/).

## Pré-requisitos

- **Node.js** `>= 20.19` ou `>= 22.12` (recomendado usar a versão LTS mais recente — [nodejs.org](https://nodejs.org/))
- **npm** (já vem junto com o Node.js)

Para conferir as versões instaladas:

```bash
node -v
npm -v
```

## Instalação

Na pasta do projeto, instale as dependências:

```bash
npm install
```

Esse comando lê o `package.json`, baixa todas as bibliotecas que o projeto usa (React, Vite, Tailwind, ESLint, etc.) e coloca tudo na pasta `node_modules/`. Só precisa rodar de novo quando as dependências do `package.json` mudarem (ex: depois de um `git pull` que alterou o `package.json`/`package-lock.json`).

## Rodando em desenvolvimento

```bash
npm run dev
```

Sobe um servidor local (por padrão em `http://localhost:5173`) com hot-reload: qualquer alteração salva em `src/` aparece na página automaticamente, sem precisar recarregar a mão. Pare o servidor com `Ctrl+C`.

## Build de produção

```bash
npm run build
```

Roda a checagem de tipos do TypeScript (`tsc -b`) e gera os arquivos finais otimizados (HTML/CSS/JS) na pasta `dist/`, prontos para deploy em qualquer hospedagem de arquivos estáticos.

Para conferir localmente como fica esse build antes de publicar:

```bash
npm run preview
```

## Lint

```bash
npm run lint
```

Roda o ESLint para checar problemas de código (tipagem, regras do React/hooks, etc.) em todo o projeto.

## Estrutura do projeto

```
public/             arquivos estáticos servidos como estão (logos, fontes, textura de fundo)
src/
  components/        componentes React da página (Header, Hero, Footer, seções, Home)
    ui/               componentes de UI reutilizáveis (ex: Button)
  styles/            tokens de cor/fonte (tokens.css) e @font-face (fonts.css)
  App.tsx            componente raiz
  main.tsx           ponto de entrada da aplicação
```
