import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'portfolio',
  type: 'document',

  fields: [
    // Define your fields here
    defineField({
      title: 'Category Name',
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Category Slug',
      type: 'slug',
    }),
    defineField({
      name: 'images',
      title: 'Image List',
      description: 'Select file for video  (recommended format .webm)',
      type: 'array',
      of: [{type: 'image'}, {type: 'file'}],
    }),
  ],
})
