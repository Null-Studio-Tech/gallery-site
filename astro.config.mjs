import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  // site: 'https://null-studio-tech.github.io',
  prefetch: {
    defaultStrategy: 'viewport'
  },
  base: '',
  experimental: {
    i18n: {
      defaultLocale: 'en',
      locales: ['en', 'zh-CN'],
      routingStrategy: 'prefix-always'
    }
  },
  integrations: [tailwind(), vue()]
});