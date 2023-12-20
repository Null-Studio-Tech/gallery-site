/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
/// <reference types="bowser"/>

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
  env: Bowser.Parser.ParsedResult
}

type Locales = 'en' | 'zh-CN'