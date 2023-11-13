import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import svgr from 'vite-plugin-svgr'

import react from '@astrojs/react'

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    react(),
    svgr({
      include: '**/*.svg?react',
      svgrOptions: {
        plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx'],
        svgoConfig: {
          plugins: [
            'preset-default',
            'removeTitle',
            'removeDesc',
            'removeDoctype',
            'cleanupIds',
          ],
        },
      },
    }),
  ],
  vite: {
    plugins: [
      svgr({
        include: '**/*.svg?react',
        svgrOptions: {
          plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx'],
          svgoConfig: {
            plugins: [
              'preset-default',
              'removeTitle',
              'removeDesc',
              'removeDoctype',
              'cleanupIds',
            ],
          },
        },
      }),
    ],
  },
})
