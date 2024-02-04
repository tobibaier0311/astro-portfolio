// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
// Define a `type` and `schema` for each collection
const projectCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    technologies: z.array(z.string()),
  }),
});
// Export a single `collections` object to register your collection(s)
export const collections = {
  projects: projectCollection,
};
