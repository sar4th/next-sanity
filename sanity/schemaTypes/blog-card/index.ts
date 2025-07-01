import { defineField, defineType } from "sanity";

export const blogCardType = defineType({
  name: "card",
  title: "Card",
  type: "document",
  fields: [
    defineField({
      name: "cardTitle",
      type: "string",
    }),
    defineField({
      name: "image",
      type: "image",
    }),
    defineField({
      name: "heroImage",
      type: "image",
    }),

    defineField({
      name: "body",
      type: "string",
    }),
  ],
});
