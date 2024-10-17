import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import github from "@astrojs/github";
import robotsTxt from "astro-robots-txt";
import UnoCSS from "@unocss/astro";
import icon from "astro-icon";
import solidJs from "@astrojs/solid-js";
import { remarkReadingTime } from "./src/lib/remark-reading-time.mjs";
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  site: "https://gianmarco.xyz/", // Update this with your GitHub Pages URL after the first deployment
  integrations: [
    sitemap(),
    robotsTxt({
      sitemap: [
        "https://gianmarco.xyz/sitemap-index.xml",
        "https://gianmarco.xyz/sitemap-0.xml",
      ],
    }),
    solidJs(),
    UnoCSS({ injectReset: true }),
    icon(),
    svelte(),
  ],
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
  output: "static", // Change to static output for GitHub Pages
  adapter: github({
    pages: true, // Enables GitHub Pages specific optimizations
  }),
  vite: {
    assetsInclude: "**/*.riv",
  },
});
