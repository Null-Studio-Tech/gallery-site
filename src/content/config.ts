// 1. 从 `astro:content` 导入
import { z, defineCollection } from 'astro:content';
// 2. 定义集合
const workCollection = defineCollection({
  schema: {
    title: z.string(),
    author: z.string().optional(),
    references: z.array(z.string())
  }
});
// 3. 导出一个 `collections` 对象来注册集合
//    这个键应该与 `src/content` 中的集合目录名匹配
export const collections = {
  works: workCollection
};