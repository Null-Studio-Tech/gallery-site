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

// 文字块
const TextBlock = z.object({
  type: z.literal("TextBlock"),
  content: z.string(),
  className: z.string().optional()
})

// 视频块
const VideoBlock = z.object({
  type: z.literal("VideoBlock"),
  title: z.string().optional(),
  description: z.string().optional(),
  src: z.string(),
  poster: z.string().optional(),
  className: z.string().optional()
})

// 图片块
const PictureBlock = z.object({
  type: z.literal("PictureBlock"),
  title: z.string().optional(),
  description: z.string().optional(),
  srcset: z.string().array(),
  picturePosition: z.enum(["left", "right", "top", "bottom"]),
  className: z.string().optional()
})

// 轮播块
const SwipeBlock = z.object({
  type: z.literal("SwipeBlock"),
  title: z.string().optional(),
  description: z.string().optional(),
  srcset: z.string().array(),
  picturePosition: z.enum(["left", "right", "top", "bottom"]),
  className: z.string().optional()
})

export const detailSchema = z.object({
  meta: Meta,
  contents: z.array(z.union([TextBlock, VideoBlock, PictureBlock, SwipeBlock]))
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


const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const jsonSchema = zodToJsonSchema(detailSchema);
const detailSchemaFile = path.join(__dirname, '..', '..', 'schema', 'DetailJsonSchema.json');
fs.writeFileSync(detailSchemaFile, JSON.stringify(jsonSchema, null, 2), 'utf8');