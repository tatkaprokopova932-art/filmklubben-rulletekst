import type { CollectionConfig } from 'payload'

export const Reviews: CollectionConfig = {
  slug: 'reviews',

  access: {
    read: () => true,
  },

  fields: [
    {
      name: 'filmTitle',
      type: 'text',
      required: true,
    },

    {
      name: 'director',
      type: 'text',
      required: true,
    },

    {
      name: 'duration',
      type: 'number',
      required: true,
      min: 1,
    },

    {
      name: 'ageRating',
      type: 'number',
      required: true,
      min: 0,
    },

    {
      name: 'mainActors',
      type: 'textarea',
      required: true,
    },

    {
      name: 'rating',
      type: 'number',
      required: true,
      min: 1,
      max: 6,
    },

    {
      name: 'author',
      type: 'relationship',
      relationTo: 'users',
      required: true,
    },

    {
      name: 'content',
      type: 'richText',
      required: true,
    },

    {
      name: 'publishedAt',
      type: 'date',
      required: false,
    },
  ],
}
