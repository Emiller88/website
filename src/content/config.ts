import { defineCollection } from "astro:content";
import { docsSchema, i18nSchema } from "@astrojs/starlight/schema";

export const collections = {
	docs: defineCollection({ schema: docsSchema() }),
	blog: defineCollection({ schema: docsSchema() }),
	nfcamp: defineCollection({ schema: docsSchema() }),
	nfhack: defineCollection({ schema: docsSchema() }),
	podcast: defineCollection({ schema: docsSchema() }),
	i18n: defineCollection({ type: "data", schema: i18nSchema() }),
};
