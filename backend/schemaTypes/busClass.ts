import {defineField, defineType} from 'sanity'

export default defineField({
  name: 'busClass',
  title: 'Bus Class',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Bus Class Name',
      type: 'string',
    }),
  ],
})
