import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  output: 'server',
  site: 'https://example.com',
  integrations: [sitemap(), tailwind()]
});