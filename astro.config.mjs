import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import vue from "@astrojs/vue";
import favicons from "astro-favicons";
import { astroImageTools } from "astro-imagetools";

// https://astro.build/config
export default defineConfig({
  compressHTML: import.meta.env.PROD,
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
  integrations: [tailwind(), vue(), astroImageTools, favicons({
    masterPicture: "./src/assets/favicon.svg",
    emitAssets: true,
    appName: "GaoDing",
    appShortName: "GaoDing",
    appDescription: "GaoDing Design Work Gallery",
    developerName: "Null Studio",
    faviconsDarkMode: false
  })]
});