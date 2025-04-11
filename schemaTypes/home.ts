import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'home',
  title: 'Home',
  type: 'document',

  fields: [
    // Define your fields here
    defineField({
      name: 'preset',
      title: 'Preset ID',
      description: `Set it to 'active' to use this preset`,
      type: 'string',
    }),

    // Hero Section
    defineField({
      name: 'hero_section',
      title: 'Hero Section',
      type: 'object',
      options: {
        collapsible: true,

        modal: {
          width: 500,
        },
      },
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
          of: [{type: 'block'}],
        }),
        defineField({
          name: 'ba',
          title: 'Button 1',
          type: 'button',
        }),
        defineField({
          name: 'bb',
          title: 'Button 2',
          type: 'button',
        }),
        defineField({
          name: 'left_art',
          title: 'Left Art',
          type: 'imaged',
        }),
        defineField({
          name: 'right_art',
          title: 'Right Art',
          type: 'imaged',
        }),
      ],
    }),

    // Welcome Section
    defineField({
      name: 'welcome',
      title: 'Welcome Section',
      type: 'object',
      options: {
        collapsed: true,
        collapsible: true,
      },
      fields: [
        defineField({
          name: 'hn',
          title: 'Heading Normal',
          type: 'string',
        }),
        defineField({
          name: 'hb',
          title: 'Heading Bold',
          type: 'string',
        }),
        defineField({
          name: 'sh',
          title: 'Paragraph Heading',
          type: 'string',
        }),

        defineField({
          name: 'pa',
          title: 'Paragraph A',
          type: 'array',
          of: [{type: 'block'}],
        }),
        defineField({
          name: 'pb',
          title: 'Paragraph B',
          type: 'array',
          of: [{type: 'block'}],
        }),

        defineField({
          name: 'aa',
          title: 'Art Left',
          type: 'imaged',
        }),
        defineField({
          name: 'ab',
          title: 'Art Right',
          type: 'imaged',
        }),

        defineField({
          name: 'asa',
          title: 'Side Art Left',
          type: 'imaged',
        }),
        defineField({
          name: 'asb',
          title: 'Side Art Right',
          type: 'imaged',
        }),
      ],
    }),
    // Vision Section
    defineField({
      name: 'vision',
      title: 'Vision Section',
      type: 'object',
      options: {
        collapsed: true,
        collapsible: true,
      },
      fields: [
        defineField({
          name: 'heading',
          type: 'string',
        }),
        defineField({
          name: 'paragraph',
          type: 'array',
          of: [{type: 'block'}],
        }),
        defineField({
          name: 'background',
          // title: '',
          type: 'image',
        }),
        defineField({
          name: 'button',
          type: 'button',
        }),
      ],
    }),
    // Featured Artist
    defineField({
      name: 'featured_artist',
      title: 'Featured Artist Section',
      type: 'object',
      options: {
        collapsed: true,
        collapsible: true,
      },
      fields: [
        defineField({
          name: 'art',
          // title: '',
          type: 'imaged',
        }),
        defineField({
          name: 'sh',
          title: 'Subheading',
          type: 'string',
        }),
        defineField({
          name: 'heading',
          title: 'Artist Name',
          type: 'string',
        }),
        defineField({
          name: 'paragraph',
          // title: '',
          type: 'array',
          of: [{type: 'block'}],
        }),
      ],
    }),
    // Featured Projects
    defineField({
      name: 'featured_projects',
      title: 'Featured Project Section',
      type: 'object',
      options: {
        collapsed: true,
        collapsible: true,
      },
      fields: [
        defineField({
          name: 'sh',
          title: 'Subheading',
          type: 'string',
        }),
        defineField({
          name: 'banner',
          type: 'imaged',
        }),
        defineField({
          name: 'h',
          title: 'Heading',
          type: 'string',
        }),
        defineField({
          name: 'paragraph',
          type: 'array',
          of: [{type: 'block'}],
        }),
        defineField({
          name: 'projects',
          type: 'array',
          of: [
            {
              name: 'images',
              title: 'Image',
              type: 'object',
              fields: [
                defineField({
                  name: 'artist',
                  title: 'Artist name',
                  type: 'string',
                }),
                defineField({
                  name: 'size',
                  title: 'Sizing',
                  type: 'string',
                  options: {
                    list: [
                      {value: 'portrait', title: 'Portrait'},
                      {value: 'landscape', title: 'Landscape'},
                    ],
                  },
                }),
                defineField({
                  name: 'artwork',
                  type: 'image',
                }),
              ],
            },
            {
              name: 'video',
              type: 'object',
              fields: [
                defineField({
                  name: 'artist',
                  title: 'Artist name',
                  type: 'string',
                }),
                defineField({
                  name: 'artwork',
                  title: 'Video',
                  type: 'file',
                }),
              ],
            },
            {
              name: 'embed',
              title: 'Video Embed',
              type: 'embed',
            },
          ],
        }),
      ],
    }),
    // Testimonial Section Visibility
    defineField({
      name: 'testimonials',
      type: 'object',
      fields: [
        defineField({
          name: 'hidden',
          type: 'boolean',
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
          name: 'tlist',
          title: 'Testimony List',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'testimony',
                  type: 'array',
                  of: [
                    {
                      type: 'block',
                    },
                  ],
                }),
                defineField({
                  name: 'name',
                  type: 'string',
                }),
                defineField({
                  name: 'title',
                  type: 'string',
                }),
                defineField({
                  name: 'pfp',
                  title: 'Profile Picture',
                  type: 'image',
                }),
              ],
            },
          ],
        }),
      ],
    }),
    // Invitation Section
    defineField({
      name: 'invitation',
      title: 'Invitation Section',
      type: 'object',
      options: {
        collapsed: true,
        collapsible: true,
      },
      fields: [
        defineField({
          name: 'hb',
          title: 'Heading Bold',
          type: 'string',
        }),
        defineField({
          name: 'hn',
          title: 'Heading Regular',
          type: 'string',
        }),
        defineField({
          name: 'ba',
          title: 'Button A',
          type: 'button',
        }),
        defineField({
          name: 'bb',
          title: 'Button B',
          type: 'button',
        }),

        defineField({
          name: 'bg',
          title: 'Background',
          type: 'image',
        }),
        defineField({
          name: 'ia',
          title: 'Image A',
          type: 'imaged',
        }),
        defineField({
          name: 'ib',
          title: 'Image B',
          type: 'imaged',
        }),
        defineField({
          name: 'ic',
          title: 'Image C',
          type: 'imaged',
        }),
        defineField({
          name: 'id',
          title: 'Image D',
          type: 'imaged',
        }),
      ],
    }),
  ],
})
