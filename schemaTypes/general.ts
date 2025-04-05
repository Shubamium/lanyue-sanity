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

    defineField({
      name: 'mail',
      title: 'Contact Email',
      type: 'string',
    }),
    defineField({
      name: 'x',
      title: 'X Url',
      type: 'url',
    }),
    defineField({
      name: 'discord',
      title: 'Discord Url',
      type: 'url',
    }),
    defineField({
      name: 'cf',
      title: 'Commission Form URL',
      type: 'url',
    }),
    defineField({
      name: 'af',
      title: 'Artist Form URL',
      type: 'url',
    }),
  ],
})
