// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  site: 'https:dimasPancas.github.io', // Ganti dengan username GitHub kamu
  base: '/landing-page-umrah',
  integrations: [react()]
});