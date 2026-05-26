import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    resume: z.string(),
    description: z.string(),
    details: z.string(),
    image: z.array(z.string()),
    tags: z.array(z.string()),
    link: z.string().url(),
    date: z.date(),
    featured: z.boolean().default(false),
    status: z.enum(['completed', 'in-progress']).default('completed'),
  }),
});

export const collections = { projects };
