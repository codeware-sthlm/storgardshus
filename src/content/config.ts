// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';

// 2. Define your collection(s)
const projectsCollection = defineCollection({
  schema: z.object({
    draft: z.boolean(),
    title: z.string(),
    snippet: z.string(),
    image: z.object({
      src: z.string(),
      alt: z.string()
    }),
    publishDate: z.string().transform((str) => new Date(str)),
    author: z.string().default('Astroship'),
    category: z.string(),
    tags: z.array(z.string())
  })
});

const acceptableWidths = [200, 400, 600, 800, 1000];

const teamCollection = defineCollection({
  schema: z.object({
    draft: z.boolean(),
    name: z.string(),
    email: z.string().email(),
    phone: z.string().optional(),
    tel: z.string().optional(),
    title: z.string(),
    // TODO improve typing, e.g. 'small' | 'medium' | 'large' sizes
    avatars: z.array(
      z.object({
        src: z.string(),
        width: z.number().refine((num) => acceptableWidths.includes(num)),
        alt: z.string()
      })
    ),
    publishDate: z.string().transform((str) => new Date(str))
  })
});

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  projects: projectsCollection,
  team: teamCollection
};
