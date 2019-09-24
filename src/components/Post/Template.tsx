import { graphql } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

import Layout from '~components/Layout'
import PageMetadata from '~components/PageMetadata'
import Post from '~models/remark/Post'
import postStyle from '~styles/post-style'
import prismStyle from '~styles/prism-style'

const StyledArticle = styled.article`
  max-width: 50rem;
  margin: auto;
  padding: 1rem 1.5rem;
`

const StyledArticleHeader = styled.header`
  margin-bottom: 2em;
`

const StyledArticleTitle = styled.h1`
  margin-top: 0;
  margin-bottom: .3em;

  font-size: 2em;
`

const StyledArticleDate = styled.div`
  font-weight: 300;
  font-size: 0.8em;
`

const StyledContent = styled.section`
  ${postStyle}
  ${prismStyle}
`

interface PostTemplateProps {
  data: {
    markdownRemark: Post
  }
}

const PostTemplate: React.FC<PostTemplateProps> = ({ data }: PostTemplateProps) => (
  <Layout>
    <PageMetadata
      title={data.markdownRemark.frontmatter.title}
      description={data.markdownRemark.frontmatter.description}
      keywords={data.markdownRemark.frontmatter.tags}
      restUrl={data.markdownRemark.fields.slug}
    />
    <StyledArticle>
      <StyledArticleHeader>
        <StyledArticleTitle>
          {data.markdownRemark.frontmatter.title}
        </StyledArticleTitle>
        <StyledArticleDate>
          {data.markdownRemark.frontmatter.date}
        </StyledArticleDate>
      </StyledArticleHeader>
      <StyledContent
        dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
      />
    </StyledArticle>
  </Layout>
)

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        description
        date(formatString: "MMMM DD, YYYY")
        tags
      }
      fields {
        slug
      }
    }
  }
`

export default PostTemplate
