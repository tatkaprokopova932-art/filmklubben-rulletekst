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
  name: 'content',
  type: 'richText',
  required: true,
},

],
}
