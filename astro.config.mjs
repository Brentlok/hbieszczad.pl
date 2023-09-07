import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import tailwind from "@astrojs/tailwind"
import { astroStaticDict } from 'astro-static-dict/integration'
import { enUs, plPl } from './src/locale/dictionaries'

export default defineConfig({
  site: 'https://hbieszczad.pl',
  integrations: [
    sitemap(),
    tailwind(),
    astroStaticDict({
        dictionaries: {
            enUs,
            plPl
        },
        dictionary: enUs
    })
  ],
  server: { 
    port: 3000
  }
})