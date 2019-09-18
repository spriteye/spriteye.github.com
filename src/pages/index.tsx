import React from 'react'
import { graphql } from 'gatsby'

import AllMarkdownRemark from '~models/remark/AllMarkdownRemark'
import Layout from '~components/Layout'
import PostList from '~components/Post/List'
import PageMetadata from '~components/PageMetadata'

interface IndexProps {
  data: {
    allMarkdownRemark: AllMarkdownRemark
  }
}

const Index: React.FC<IndexProps> = ({ data }: IndexProps) => (
  <Layout>
    <PageMetadata />
    <PostList posts={data.allMarkdownRemark.edges} />
  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            description
            series
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

export default Index
