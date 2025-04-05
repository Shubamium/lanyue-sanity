import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'contact',
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
      name: 'p',
      title: 'Paragraph',
      type: 'array',
      of: [{type: 'block'}],
    }),

    // defineField({
    //   name: 'em',
    //   title: 'Contact Email',
    //   type: 'string',
    // }),

    defineField({
      name: 'il',
      title: 'Info List',
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
              name: 'info',
              type: 'string',
            }),
            defineField({
              name: 'isLink',
              type: 'boolean',
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'm',
      title: 'Note Message',
      type: 'string',
    }),

    // defineField({
    //   name: 'hb',
    //   title: 'Heading Button',
    //   type: 'button',
    // }),

    defineField({
      name: 'st',
      title: 'Submit Text',
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
    }),

    defineField({
      name: 'sb',
      title: 'Submit Button',
      type: 'string',
    }),
  ],
})
