import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'general',
  title: 'General',
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
      name: 'footer',
      type: 'object',
      fields: [
        defineField({
          name: 'h',
          title: 'Heading',
          type: 'string',
        }),
        defineField({
          name: 'p',
          title: 'Paragraph',
          type: 'text',
        }),
      ],
    }),
  ],
})
