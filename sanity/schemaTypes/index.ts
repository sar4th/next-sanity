import { type SchemaTypeDefinition } from "sanity";
import { blogCardType } from "./blog-card";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blogCardType],
};
