// src/sanity.ts
import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: 'wakckoef', 
  dataset: 'production',
  apiVersion:'2024-06-09',
  useCdn: true,                     
})