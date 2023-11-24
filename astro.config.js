import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import react from '@astrojs/react'

import vercel from '@astrojs/vercel/serverless'

// https://astro.build/config
export default defineConfig({
  prefetch: true,
  redirects: {
    '/': '/login',
  },
  integrations: [tailwind(), react()],
  output: 'hybrid',
  adapter: vercel(),
})
