import { createClient } from 'contentful'

export const contentfulClient = createClient({
  space: process.env.contentful_space,
  accessToken: process.env.contentful_acces_token
})
