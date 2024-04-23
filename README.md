# React + TypeScript + Vite + Tailwind

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

# Installations:
- for creating vite in the current folder > `npm create vite@lates ./ `
- for creating in other folder > `npm create vite@latest <folder name>`
- select the framework/ library to use (reactTS in this case)
- do `npm install`
- do `npm run dev`

## Installing tailwind css
- do `npm install -D tailwindcss postcss autoprefixer`
- do `npx tailwindcss init -p`
-put the following code changes in `tailwind.config.js`:
  export default {
    /** @type {import('tailwindcss').Config} */
      content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
      plugins: [],
  }

- add the following in `App.css`:
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

- start adding tailwind classes in the components.