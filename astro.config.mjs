import tailwind from '@astrojs/tailwind'
import { defineConfig } from 'astro/config'

export default defineConfig({
    output: 'static',
    compressHTML: true,
    build: {
        assetsPrefix: '.',
    },
    integrations: [tailwind()],
})
