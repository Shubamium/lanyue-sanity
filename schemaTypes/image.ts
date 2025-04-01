import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'imaged',
  title: 'Image',
  type: 'object',
  fields: [
    // Define your fields here
    defineField({
      name: 'artist',
      title: 'Artist Name',
      type: 'string',
    }),
    defineField({
      name: 'image',
      type: 'image',
    }),
    defineField({
      name: 'y',
      title: 'Y Position Adjusment ',
      description:
        '0(top)-100(bottom) position fit for images shown in portfolio, Default is 40   ',
      type: 'number',
      initialValue: 40,
    }),
  ],
})
