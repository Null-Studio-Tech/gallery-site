import { z, defineCollection } from 'astro:content';
import fs from 'node:fs';
import path from 'node:path';
import * as url from 'url';

import { zodToJsonSchema } from 'zod-to-json-schema';


// 作品描述信息
const Meta = z.object({
  title: z.string(),
  description: z.string(),
  cover: z.string()
})

// 作品概述-视频形式
const SummaryVideoBlock = z.object({
  type: z.literal("SummaryVideoBlock"),
  src: z.string(),
  poster: z.string().optional(),
  tools: z.string().array(),
  title: z.string(),
  description: z.string(),
  aspectRatio: z.string(),
  className: z.string().optional()
})

// 文字块
const TextBlock = z.object({
  type: z.literal("TextBlock"),
  content: z.string(),
  className: z.string().optional()
})

// 视频块
const VideoBlock = z.object({
  type: z.literal("VideoBlock"),
  src: z.string(),
  poster: z.string().optional(),
  aspectRatio: z.string(),
  description: z.string(),
  className: z.string().optional(),
  position: z.enum(["left", "right", "top", "bottom"]),
  cols: z.string().optional()
})

// 图片块
const PictureBlock = z.object({
  type: z.literal("PictureBlock"),
  title: z.string().optional(),
  description: z.string().optional(),
  srcset: z.string().array(),
  picturePosition: z.enum(["left", "right", "top", "bottom"]),
  className: z.string().optional(),
  cols: z.string().optional()
})

// 轮播块
const SwipeBlock = z.object({
  type: z.literal("SwipeBlock"),
  title: z.string().optional(),
  description: z.string().optional(),
  srcset: z.string().array(),
  picturePosition: z.enum(["left", "right", "top", "bottom"]),
  className: z.string().optional(),
  cols: z.string().optional()
})

// 占位块
const SpaceBlock = z.object({
  type: z.literal("SpaceBlock"),
  size: z.string().default('64px'),
  className: z.string().optional()
})

export const detailSchema = z.object({
  meta: Meta,
  contents: z.array(z.union([SummaryVideoBlock, TextBlock, VideoBlock, PictureBlock, SwipeBlock, SpaceBlock]))
})

const work = defineCollection({
  type: 'data',
  schema: detailSchema
})

const personal = defineCollection({
  type: 'data',
  schema: detailSchema
})

export const collections = { work, personal }

if (process.env.MODE === "sync") {
  const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
  const jsonSchema = zodToJsonSchema(detailSchema);
  const detailSchemaFile = path.join(__dirname, '..', '..', 'schema', 'DetailJsonSchema.json');
  fs.writeFileSync(detailSchemaFile, JSON.stringify(jsonSchema, null, 2), 'utf8');
}

