'use strict'

const { createFilePath } = require('gatsby-source-filesystem')

module.exports = ({ node, getNode, actions }) => {
  if (node.internal.type === 'MarkdownRemark') {
    actions.createNodeField({
      node,
      name: 'slug',
      value: createFilePath({ node, getNode })
    })
  }
}
