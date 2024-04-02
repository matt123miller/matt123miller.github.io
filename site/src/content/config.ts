// 1. Import utilities from `astro:content`
import { defineCollection, reference, z } from "astro:content";
// 2. Define your collection(s)
const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    /// ???
    coverImage: z.object({
      src: z.string(),
      alt: z.string(),
      attribution: z.string(),
    }),
    title: z.string(),
    description: z.string(),
    date: z.date(),
    tags: z.array(z.string()),
    relatedPosts: z.array(reference("blog")).optional(),
    published: z.boolean(),
  }),
});
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  blog: blogCollection,
};
