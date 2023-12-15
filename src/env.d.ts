/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly API_TOKEN: string
  readonly MODE: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}


declare global {

}

interface Window {

}

type Locales = 'en' | 'zh-CN'