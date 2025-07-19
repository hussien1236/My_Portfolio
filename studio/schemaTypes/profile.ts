import type { Rule } from "sanity"

export default {
    name: 'profile',
    title: 'Profile',
    type: 'document',
    fields: [
      {
        name: 'profileImage',
        title: 'Profile Image',
        type: 'image',
        validation: (Rule : Rule) => Rule.required(),
      },
      {
        name: 'cv',
        title: 'CV File',
        type: 'file',
        options: {
          accept: '.pdf',
        },
        validation: (Rule: Rule) => Rule.required(),
      },
    ],
  }
  