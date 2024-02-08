import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: 'https://knnv-ar.github.io',
  base: '/astro-rocket',
  integrations: [tailwind(), preact()],
  //output: 'server'
  //output: 'hybrid'
});