import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import solidJs from "@astrojs/solid-js";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: "https://www.bxiaoyou.com",
  integrations: [svelte(), tailwind(), mdx(), solidJs()],
  output: "server",
  adapter: vercel(),
});
