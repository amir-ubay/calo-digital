import {defineField, defineType} from 'sanity'

export default defineField({
  name: 'busStop',
  title: 'Bus Stop',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'type',
      title: 'Type',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        list: ['Terminal Type A', 'Terminal Type B', 'Terminal Bayangan'],
      },
      validation: (rule) => rule.max(1),
    }),
    defineField({
      name: 'city',
      title: 'City',
      type: 'reference',
      to: [{type: 'city'}],
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'string',
    }),
    defineField({
      name: 'mapPin',
      title: 'Map Pin',
      type: 'url',
    }),
  ],
})
