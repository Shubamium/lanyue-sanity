import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'imaged',
  title: 'Image',
  type: 'object',
  fields: [
    // Define your fields here
    defineField({
      name: 'artist',
      title: 'Artist Name',
      type: 'string',
    }),
    defineField({
      name: 'image',
      type: 'image',
    }),
  ],
})
