import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    resume: z.string(),
    description: z.string(),
    details: z.string(),
    image: z.array(z.string()),
    tags: z.array(z.string()),
    link: z.string().url(),
    date: z.date()
  }),
});

export const collections = {
  'projects': projectsCollection,
};