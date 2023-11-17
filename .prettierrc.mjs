/** @type {import("prettier").Config} */
export default {
  printWidth: 100,
  jsxSingleQuote: true,
  plugins: [
    "prettier-plugin-tailwindcss",
    "prettier-plugin-astro",
    "prettier-plugin-svelte",
  ],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
    { 
      files: "*.svelte", 
      options: {
        parser: "svelte" 
      }
    },
  ],
};
