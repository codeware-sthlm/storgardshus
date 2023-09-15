import { defineConfig, sharpImageService } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.storgardshus.se',
  // See https://docs.astro.build/en/guides/assets/#using-sharp
  image: {
    service: sharpImageService()
  },
  integrations: [mdx(), tailwind(), sitemap()]
});
