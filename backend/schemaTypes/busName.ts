import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'busName',
  title: 'Bus Name',
  type: 'document',
  fields: [
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
    }),
    defineField({
      name: 'name',
      title: 'Bus Name',
      type: 'string',
    }),
    defineField({
      name: 'headQuarter',
      title: 'Head Quarter',
      type: 'string',
    }),
    defineField({
      name: 'busClass',
      title: 'Bus Classes',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'busClass'}],
        },
      ],
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{type: 'block'}],
    }),
  ],
})
