import React from 'react'
import styled from 'styled-components'

import Post from '~models/remark/Post'
import PostListItem from '~components/Post/List/Item'

const StyledContainer = styled.div`
  padding: 1rem 0;
`

interface PostListProps {
  posts: { node: Post }[]
}

const PostList: React.FC<PostListProps> = ({ posts }: PostListProps) => (
  <StyledContainer>
    {posts.map(({ node }) => (
      <PostListItem key={node.id} post={node} />
    ))}
  </StyledContainer>
)

export default PostList
