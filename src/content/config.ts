import { defineCollection, z } from "astro:content";

const pagesCollection = defineCollection({
  type: "content", // v2.5.0 and later
  schema: ({ image }) =>
    z.object({
      _schema: z.any().optional(),
      title: z.string(),
      description: z.string().nullish(),
      browserTitle: z.string().nullish(),
      note: z.string().nullish(),
      link: z.string().nullish(),
      categories: z.array(z.string()).nullish(),
      thumbnail: image().nullish(),
      publishDate: z.date().nullish(),
      expiryDate: z.date().nullish(),
      status: z
        .enum(["online", "hidden", "meta", "offline"])
        .nullish()
        .transform((_) => _ ?? "online"),
      order: z
        .number()
        .nullish()
        .transform((_) => _ ?? 256),
      content_blocks: z.array(z.any()),
      classes: z.array(z.string()).optional(),
      show_global_header: z.boolean().default(true),
      show_global_footer: z.boolean().default(true),
    }),
});

export const collections = {
  pages: pagesCollection,
};
