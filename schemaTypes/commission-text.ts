import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'commission_text',
  title: 'Commissions',
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
      name: 'service',
      title: 'Service Section',
      type: 'object',
      fields: [
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
          name: 'steps',
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
                  name: 'p',
                  title: 'Paragraph',
                  type: 'array',
                  of: [
                    {
                      type: 'block',
                    },
                  ],
                }),
              ],
            },
          ],
        }),
        defineField({
          name: 'cat',
          title: 'Category',
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
                  name: 'slug',
                  description: 'When clicked it will go to the pricing with this same slug.',
                  type: 'slug',
                }),
                defineField({
                  name: 'p',
                  title: 'Paragraph',
                  type: 'array',
                  of: [{type: 'block'}],
                }),
                defineField({
                  name: 'icon',
                  description: 'SVG Recommended, You can find more on fontawesome.com',
                  type: 'file',
                }),

                defineField({
                  name: 'subcat',
                  title: 'Subcategory',
                  type: 'array',
                  of: [{type: 'string'}],
                }),
              ],
            },
          ],
        }),
      ],
    }),
    defineField({
      name: 'pinned_pricing',
      title: 'Pinned Pricing',
      description: 'Pricing to show at the top of commissions page',
      type: 'reference',
      to: [{type: 'pricing'}],
    }),
    defineField({
      name: 'pricing_list',
      title: 'Pricing Lists',
      description: 'The list of pricings below the pinned one',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'pricing'}],
        },
      ],
    }),

    defineField({
      name: 'nl',
      title: 'Notes Left',
      type: 'array',
      of: [{type: 'block'}],
    }),

    defineField({
      name: 'nr',
      title: 'Notes Right',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'timeline',
      title: 'Timeline Section',
      type: 'object',
      fields: [
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
          name: 'steps',
          title: 'Steps',
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
                  name: 'si',
                  title: 'Step Info List',
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
                          name: 'p',
                          title: 'Paragraph',
                          type: 'array',
                          of: [
                            {
                              type: 'block',
                            },
                          ],
                        }),
                      ],
                    },
                  ],
                }),
              ],
            },
          ],
        }),
      ],
    }),
  ],
})
