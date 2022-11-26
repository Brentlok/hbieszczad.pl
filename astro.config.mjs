import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import node from "@astrojs/node";

export default defineConfig({
  output: 'server',
  site: 'https://hbieszczad.pl',
  integrations: [sitemap(), tailwind()],
  adapter: node({
    mode: 'standalone',
  }),
  server: { port: 5500 },
});