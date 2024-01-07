# React App / Static Library

This React App is completly static, cause' is a practice to learn how to work and divide a project in components, how to import each components in the respective file, and learn the basic syntaxis for read an `JSON` file with `JavaScript` programming language.
## Tools

[![NodeJS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/en)
[![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://es.react.dev/)
[![pnpm](https://img.shields.io/badge/pnpm-yellow?style=for-the-badge&logo=pnpm&logoColor=white)](https://pnpm.io/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)


## API Reference

#### Get the book

```http
  GET https://www.googleapis.com/books/v1/volumes?q=${param}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `param` | `string` | **Required**. The query |

> [!IMPORTANT]  
> If the query param has more than 2 words, you have to replace the whitespace with a plus sign (+)
## Install Tailwind CSS for React with Vite

For install the [Tailwind CSS](https://tailwindcss.com/docs/guides/vite) Framework in a React project with Vite, we have to install the dependences with the next code:

```powershell
> pnpm install -D tailwindcss postcss autoprefixer
> pnpx tailwindcss init -p
```

After a successfull installation, we'll have and archive called `tailwind.config.js`, inside of it, we going to add in the `content` block, the next code:

```js
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
```

For last, we going to add this lines in our main CSS file (usually this file is called `index.css`):

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

And that's it! Now, we only have to run the project with our package manager (in my case `pnpm`):

```powershell
> pnpm run dev
```