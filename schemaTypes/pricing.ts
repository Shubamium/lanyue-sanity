import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'pricing',
  title: 'Pricing',
  type: 'document',
  fields: [
    // Define your fields here
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'description',
      type: 'text',
    }),
    defineField({
      name: 'image',
      type: 'image',
    }),
    defineField({
      name: 'view',
      title: 'View Work',
      description: 'What category of portfolio will be shown when pressing view works',
      type: 'reference',
      to: [
        {
          type: 'portfolio',
        },
      ],
    }),
    defineField({
      name: 'categories',
      type: 'array',
      of: [
        defineField({
          name: 'category',
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              title: 'Category Name',
              type: 'string',
            }),

            defineField({
              name: 'items',
              title: 'Item List',
              type: 'array',
              of: [
                defineField({
                  name: 'item',
                  type: 'object',
                  fields: [
                    defineField({
                      name: 'name',
                      type: 'string',
                    }),
                    defineField({
                      name: 'price',
                      type: 'string',
                    }),
                  ],
                  preview: {
                    select: {
                      title: 'name',
                      subtitle: 'price',
                    },
                  },
                }),
              ],
            }),

            defineField({
              name: 'addons',
              title: 'Add-Ons',
              type: 'array',
              of: [
                defineField({
                  name: 'item',
                  type: 'object',
                  fields: [
                    defineField({
                      name: 'name',
                      type: 'string',
                    }),
                    defineField({
                      name: 'price',
                      type: 'string',
                    }),
                  ],
                  preview: {
                    select: {
                      title: 'name',
                      subtitle: 'price',
                    },
                  },
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  ],
})