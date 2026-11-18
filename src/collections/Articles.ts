import type { CollectionConfig } from 'payload'

export const Articles: CollectionConfig = {
  slug: 'articles',

access: {
  read: () => true,
},

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
