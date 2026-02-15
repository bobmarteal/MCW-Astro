import { defineCollection, z } from "astro:content";
import {glob} from "astro/loaders";


export const collections = {
  bikes: defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "src/content/bikes",

  }),
  schema: ({image}) =>
    z.object({
    name: z.string(),
    type: z.array(z.enum(["Build", "Paint"])),
    cover: image(),
    description: z.string().max(5000).optional(),
    lede: z.string().max(200).optional(),
    gallery: z.array(z.string()).optional(), // Just filenames now!
  }),

})};