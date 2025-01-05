import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'button',
  title: 'Button',
  type: 'object',
  options: {
    collapsed: true,
    collapsible: true,
  },
  fields: [
    // Define your fields here
    defineField({
      name: 'text',
      title: 'Button Title',
      type: 'string',
    }),
    defineField({
      name: 'path',
      title: 'On Click',
      description:
        'A path or url when the button is clicked (/home,/commissions,https://google.com)',
      type: 'string',
    }),
  ],
})
