[![Unit tests](https://github.com/lukmarcus/portfolio/actions/workflows/unittests.yml/badge.svg)](https://github.com/lukmarcus/portfolio/actions/workflows/unittests.yml)
[![Cypress Tests](https://github.com/lukmarcus/portfolio/actions/workflows/cypress.yml/badge.svg)](https://github.com/lukmarcus/portfolio/actions/workflows/cypress.yml)
[![Netlify Status](https://api.netlify.com/api/v1/badges/a7d3b899-983c-462b-a149-4f47c12e1d42/deploy-status)](https://app.netlify.com/sites/marekszumny/deploys)

# portfolio

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) (and disable Vetur).
- ~~[TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.vscode-typescript-vue-plugin) is deprecated.~~

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking.

[Takeover Mode is no longer needed in version 2.0 and has been deprecated.](https://github.com/vuejs/language-tools/releases/tag/v2.0.0)

### Method for older version

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

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run build
npm run test:e2e # or `npm run test:e2e:ci` for headless testing
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
nvm run v18.15.0
```
