// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://devparada.dev',
  integrations: [sitemap()],
  vite: {
    // @ts-ignore - Conflicto de tipos entre Vite 6 y 7
    plugins: [tailwindcss()]
  }
});
