interface Project {
  name: string,
  company?: string,
  client?: string,
  complexity?: string,
  classes?: string[],
  stack?: string[],
  activities?: string[]
  link?: string
}

export default Project;