import type { Rule } from "sanity"
export default {
    name: 'experience',
    title: 'Experience',
    type: 'document',
    fields: [
      { name: 'title', title: 'Job Title', type: 'string', validation: (Rule : Rule) => Rule.required() },
      { name: 'company', title: 'Company', type: 'string', validation: (Rule : Rule) => Rule.required() },
      { name: 'location', title: 'Location', type: 'string' },
      { name: 'duration', title: 'Duration (e.g., 2022 - Present)', type: 'string' },
      {
        name: 'type',
        title: 'Employment Type',
        type: 'string',
        options: {
          list: [
            { title: 'Full-time', value: 'Full-time' },
            { title: 'Project-Based', value: 'Project-Based' },
            { title: 'Part-time', value: 'Part-time' },
            { title: 'Freelance', value: 'Freelance' },
            { title: 'Internship', value: 'Internship' },
          ],
        },
      },
      { name: 'description', title: 'Description', type: 'text' },
      {
        name: 'achievements',
        title: 'Achievements',
        type: 'array',
        of: [{ type: 'string' }],
      },
      {
        name: 'technologies',
        title: 'Technologies',
        type: 'array',
        of: [{ type: 'string' }],
      },
    ],
  }
  