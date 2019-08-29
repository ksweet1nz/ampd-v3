exports.createPages = async ({actions, graphql}) => {
  const { createPage } = actions
  const { data: {allMdx: {edges: projects}}} = await 
  graphql(`
    {
      allMdx {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)
  projects.forEach(({node}) => {
    const {slug} = node.frontmatter
    createPage({path:slug, 
      component:require.resolve('./src/templates/project-template.js'), 
      context:{slug:slug}
    })
  })
}