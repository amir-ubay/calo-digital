import {defineField, defineType} from 'sanity'

export default defineField({
  name: 'city',
  title: 'City',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'City Name',
      type: 'string',
    }),
    defineField({
      name: 'busStop',
      title: 'Bus Stop',
      type: 'array',
      of: [{type: 'busStop'}],
    }),
  ],
})
