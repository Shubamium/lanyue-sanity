import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'artistText',
  title: 'Artists',
  type: 'document',
  fields: [
    // Define your fields here
    defineField({
      name: 'preset',
      title: 'Preset ID',
      description: `Set it to 'active' to use this preset`,
      type: 'string',
    }),

    defineField({
      name: 'sh',
      title: 'Subheading',
      type: 'string',
    }),
    defineField({
      name: 'h',
      title: 'Heading',
      type: 'string',
    }),
    defineField({
      name: 'i',
      title: 'Artist Image',
      type: 'image',
    }),
    defineField({
      name: 'p',
      title: 'Paragraph',
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
    }),
    defineField({
      name: 'order',
      title: 'Category Order',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'artist_type'}],
        },
      ],
    }),
  ],
})
