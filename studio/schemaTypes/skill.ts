import type { Rule } from "sanity"
export default {
    name: 'skill',
    title: 'Skill',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Skill Name',
        type: 'string',
        validation: (Rule: Rule) => Rule.required(),
      },
      {
        name: 'category',
        title: 'Category',
        type: 'string',
        options: {
          list: [
            { title: 'Frontend', value: 'frontend' },
            { title: 'Backend', value: 'backend' },
            { title: 'Databases', value: 'databases' },
            { title: 'Dev Tools & Others', value: 'tools' },
          ],
          layout: 'radio', // or 'dropdown'
        },
        validation: (Rule: Rule) => Rule.required(),
      },
    ],
  }
  