import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'artist_type',
  title: 'Artists - Category',
  type: 'document',

  fields: [
    // Define your fields here
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    }),
  ],
})
