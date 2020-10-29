export const fromXML = (item) => {
  return {
    name: item.name.shift(),
    company: item.company.shift(),
    description: item.description?.shift(),
    client: item.client?.shift(),
    complexity: item["$"].complexity,
    classes: item["$"].class?.split(" "),
    stack: item.stack?.shift().technology,
    activities: item.activities?.shift().activity,
    link: item.link?.shift()
  }
}