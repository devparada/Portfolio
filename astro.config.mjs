// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import UnoCSS from "@unocss/astro";

// https://astro.build/config
export default defineConfig({
  site: 'https://devparada.dev',
  prefetch: true,
  integrations: [
    sitemap(),
    UnoCSS(),
  ],
  vite: {
    build: {
      cssMinify: 'lightningcss'
    },
    resolve: {
      alias: {
        '@': '/src'
      }
    }
  }
});
