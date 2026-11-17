import type { CollectionConfig } from 'payload'

export const Articles: CollectionConfig = {
  slug: 'articles',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },

    {
      name: 'subtitle',
      type: 'text',
      required: false,
    },

{
  name: 'author',
  type: 'relationship',
  relationTo: 'users',
},

    {
      name: 'content',
      type: 'richText',
      required: true,
    },
  ],
}
