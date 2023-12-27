import type { CollectionEntry, DataCollectionKey } from "astro:content";

export type ContentOptions = CollectionEntry<"work">["data"]["contents"]

export type ContentUnionType = CollectionEntry<"work">["data"]["contents"][number];

export type MetaOptions = CollectionEntry<"work">["data"]["meta"];

export interface PathOptions {
  lang: Locales;
  paths: string[];
  collection: DataCollectionKey;
};