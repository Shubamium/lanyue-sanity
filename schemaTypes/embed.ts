import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'embed',
  title: 'Video Embed',
  type: 'object',
  fields: [
    // Define your fields here
    // defineField({
    //   name: 'ytId',
    //   title: 'Youtube Video ID',
    //   description: 'Only input the id part of the video url, after the watch?v= part ',
    //   type: 'string',
    // }),
    defineField({
      name: 'title',
      title: 'Identification',
      description: 'For internal identification only',
      type: 'string',
    }),
    defineField({
      name: 'url',
      title: 'Video URL',
      description: "Change the 'play' part of the url to 'embed'",
      type: 'url',
    }),
  ],
})
