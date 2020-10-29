const path = require("path")

const Routing = ({graphql, actions}) => {
  const {createPage} = actions

  createPage({
    path: "/blog/",
    matchPath: "/blog/:slug",
    component: path.resolve("./src/pages/blog/_slug.tsx"),
  })
}

module.exports.onCreatePage = Routing
