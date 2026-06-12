# Project Description

Modifying the template and its README created using:
``` bash
foo@bar:~$ npm create vite@latest my-app -- --template react-ts
```
and creating a dockerized React App for Dev- and Prod-like environments.

## Changes

1. Updated vite.config.ts
```js
export default {
  server: {
    host: true
  }
}
```
2. Added Dockerfile.dev and then:
``` bash
foo@bar:~$ docker build -t foo/bar:latest -f Dockerfile.dev .
foo@bar:~$ docker run --rm -p 5173:5173 --name vite-app foo/bar:latest
```

3. For Hot Reload using Hot Module Replacments (HMR), using Anonymous Volume and Bind Mount:
``` bash
foo@bar:~$ docker run --rm -v /app/node_modules \
                           -v $(pwd):/app \  
                           -p 5173:5173 \ 
                           --name vite-app foo/bar:latest
```

4. Adding Vitest, making changes for it, adding dummy tests
``` bash
foo@bar:~$ npm install -D vitest jsdom @testing-library/react @testing-library/jest-dom
foo@bar:~$ npx vitest
```
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
