const path = require("path")

const Routing = ({actions}) => {
  const {createPage} = actions

  createPage({
    path: "blog-index",
    matchPath: "/blog",
    component: path.resolve("./src/pages/blog/index.tsx"),
  })

  createPage({
    path: "blog-by-slug",
    matchPath: "/blog/:slug",
    component: path.resolve("./src/pages/blog/_slug.tsx"),
  })
}

module.exports.onCreatePage = Routing
