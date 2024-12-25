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
  ],
})
