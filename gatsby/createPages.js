const { resolve } = require('path')

module.exports = async ({ graphql, actions }) => {
  const { data: { allMarkdownRemark } } = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  allMarkdownRemark.edges.forEach(({ node }) => {
    actions.createPage({
      path: node.fields.slug,
      component: resolve('./src/components/Post/Template.tsx'),
      context: {
        slug: node.fields.slug
      }
    })
  })
}
