import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'terms',
  title: 'Terms Of Service',
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
      name: 'banner',
      type: 'imaged',
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
      name: 'tl',
      title: 'Terms List',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              type: 'string',
            }),
            defineField({
              name: 'text',
              type: 'array',
              of: [{type: 'block'}],
            }),
          ],
        },
      ],
    }),
  ],
})
