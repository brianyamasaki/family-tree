// @ts-check
import { defineConfig } from 'astro/config';
import pagefind from 'astro-pagefind';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://family-tree.yamasakidesign.com',
  integrations: [react(), pagefind()]
});