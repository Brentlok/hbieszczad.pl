import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import node from "@astrojs/node";

export default defineConfig({
  output: 'server',
  site: 'https://example.com',
  integrations: [sitemap(), tailwind()],
  adapter: node({
    mode: 'standalone',
  }),
});