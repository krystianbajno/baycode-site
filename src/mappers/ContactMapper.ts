import Contact from "../models/Contact";

export const fromContentfulModel = (item): Contact => ({
  phone: item.fields.phone,
  mail: item.fields.mail,
  github: item.fields.github,
  githubRepo: item.fields.githubRepo,
  telegram: item.fields.telegram,
  linkedin: item.fields.linkedin
})