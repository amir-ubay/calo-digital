import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'busRoute',
  title: 'Bus Route',
  description: 'Bus schedules',
  type: 'document',
  fields: [
    defineField({
      name: 'rute',
      title: 'Rute Bus',
      type: 'string',
    }),
    defineField({
      name: 'name',
      title: 'Bus Name',
      type: 'reference',
      to: [{type: 'busName'}],
    }),
    defineField({
      name: 'busClass',
      title: 'Bus Class',
      type: 'reference',
      to: [{type: 'busClass'}],
    }),
    defineField({
      name: 'origin',
      title: 'Origin',
      type: 'reference',
      to: [{type: 'city'}],
    }),
    defineField({
      name: 'destination',
      title: 'Destination',
      type: 'reference',
      to: [{type: 'city'}],
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
    }),
    defineField({
      name: 'schedule',
      title: 'Schedule',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'busStop',
              title: 'Bus Stop',
              type: 'reference',
              to: [{type: 'busStop'}],
            }),
            defineField({
              name: 'time',
              title: 'Time',
              type: 'string',
            }),
          ],
        },
      ],
    }),
  ],
})
