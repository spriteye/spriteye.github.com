const { resolve } = require('path')

module.exports = async ({ graphql, actions }) => {
  const { data: { allMarkdownRemark } } = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              release
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  allMarkdownRemark.edges.forEach(({ node }) => {
    if (!node.frontmatter.release) {
      return
    }
    actions.createPage({
      path: node.fields.slug,
      component: resolve('./src/components/Post/Template.tsx'),
      context: {
        slug: node.fields.slug
      }
    })
  })
}
