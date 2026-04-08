// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://devparada.dev',
  prefetch: true,
  integrations: [sitemap()],
  vite: {
    // @ts-ignore - Conflicto de tipos en Vite 7
    plugins: [tailwindcss()],
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
