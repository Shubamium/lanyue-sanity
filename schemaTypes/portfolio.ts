import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'portfolio',
  title: 'Portfolio - Works',
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
      of: [
        {type: 'imaged'},
        defineField({
          name: 'video',
          title: 'Video',
          type: 'object',
          fields: [
            defineField({
              name: 'artist',
              type: 'string',
            }),
            defineField({
              name: 'file',
              description: 'Recommended .webm',
              type: 'file',
            }),
            defineField({
              name: 'url',
              title: 'Video URL',
              description: "Change the 'play' part of the url to 'embed'",
              type: 'url',
            }),
          ],
        }),
      ],
    }),
  ],
})
