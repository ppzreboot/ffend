import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import expressive_code from 'astro-expressive-code'

export default
defineConfig({
  site: 'https://ppzreboot.github.io',
  base: 'ffend',
  integrations: [
    expressive_code(),
    mdx(),
  ]
})
