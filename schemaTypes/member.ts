import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'members',
  title: 'Artists - Members',
  type: 'document',

  fields: [
    // Define your fields here
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'order',
      description: 'Show artist in order (Ascending) on their corresponding tabs',
      type: 'number',
    }),

    // defineField({
    //   name: 'role',
    //   title: 'Role',
    //   type: 'string',
    //   options: {
    //     list: [
    //       {value: 'illustrator', title: 'Illustrator'},
    //       {value: 'rigger', title: 'Rigger'},
    //       {value: 'graphic_design', title: 'Graphic Design'},
    //       {value: 'music', title: 'Music'},
    //     ],
    //   },
    // }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'reference',
      to: [
        {
          type: 'artist_type',
        },
      ],
      options: {
        disableNew: true,
      },
    }),
    defineField({
      name: 'bio',
      type: 'text',
    }),

    defineField({
      name: 'pfp',
      title: 'Artist Image',
      type: 'image',
    }),
    defineField({
      name: 'portfolio',
      type: 'array',
      of: [
        defineField({
          name: 'art',
          type: 'image',
        }),
        defineField({
          name: 'video',
          description: 'Recommended .webm',
          type: 'file',
        }),
      ],
    }),

    defineField({
      name: 'x',
      title: 'X Twitter Link',
      placeholder: 'http://',
      type: 'url',
    }),
    defineField({
      name: 'other',
      title: 'Other Links (Website)',
      placeholder: 'http://',
      type: 'url',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'role.title',
    },
  },
})
