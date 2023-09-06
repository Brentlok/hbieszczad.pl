import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import tailwind from "@astrojs/tailwind"

export default defineConfig({
  site: 'https://hbieszczad.pl',
  integrations: [sitemap(), tailwind()],
  server: { 
    port: 3000
  }
})