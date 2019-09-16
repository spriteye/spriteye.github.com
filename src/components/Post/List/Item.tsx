import { Link as GatsbyLink } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

import Post from '~models/remark/Post'

const StyledItemContainer = styled.div`
  display: flex;

  color: inherit;

  border-top: 1px solid ${({ theme }) => theme.bg};
  border-bottom: 1px solid ${({ theme }) => theme.bg};

  transition: all .3s linear;

  &:hover {
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
  }
`

const StyledItem = styled.div`
  display: flex;
  align-items: baseline;
  width: 50rem;
  margin: auto;
  padding: 1em 2em;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const StyledDate = styled.div`
  width: 12em;
  padding-right: 1em;

  font-size: 0.8em;

  text-align: right
`

const StyledRows = styled.div`
  flex: 1;
`

const StyledDescription = styled.div`
  font-size: .7em;
`

const StyledTitle = styled(GatsbyLink)`
  font-size: 1.1em;
`

const StyledTag = styled.span`
  display: inline-block;
  margin-bottom: 3px;
  padding: 2px 6px;

  font-size: .6em;
  white-space: nowrap;

  vertical-align: middle;

  border: 1px solid #eee;
  border-radius: 3px;

  &::before {
    content: 'SERIES ';
  }
`

interface PostListItemProps {
  post: Post
}

const PostListItem: React.FC<PostListItemProps> = ({ post }: PostListItemProps) => (
  <StyledItemContainer>
    <StyledItem>
      <StyledDate>
        {post.frontmatter.date}
      </StyledDate>
      <StyledRows>
        <StyledTitle to={post.fields.slug}>
          {post.frontmatter.title}
          {' '}
        </StyledTitle>
        <StyledTag>
          {post.frontmatter.series}
        </StyledTag>
        <StyledDescription>
          {post.frontmatter.description}
        </StyledDescription>
      </StyledRows>
    </StyledItem>
  </StyledItemContainer>
)

export default PostListItem
