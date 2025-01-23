[![Unit tests](https://github.com/lukmarcus/portfolio/actions/workflows/unittests.yml/badge.svg)](https://github.com/lukmarcus/portfolio/actions/workflows/unittests.yml)
[![Netlify Status](https://api.netlify.com/api/v1/badges/a7d3b899-983c-462b-a149-4f47c12e1d42/deploy-status)](https://app.netlify.com/sites/marekszumny/deploys)

# portfolio

This is my portfolio based on [noisy/portfolio](https://github.com/noisy/portfolio/). Developed with Vue 3 in Vite.

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/)
- [Vue - Official (previously Volar, replaces Vetur)](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

## Type Support for `.vue` Imports in TS

- [Using Vue with TypeScript](https://vuejs.org/guide/typescript/overview.html)
- [Takeover Mode is no longer needed in version 2.0 and has been deprecated.](https://github.com/vuejs/language-tools/releases/tag/v2.0.0)

### Method for the older version

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## Q&A

### Version of node/npm is not compatible? Use Node Version Manager

- Linux/Mac: https://github.com/nvm-sh/nvm
- Windows: https://github.com/coreybutler/nvm-windows

```sh
nvm install v18.15.0
nvm use v18.15.0
```
