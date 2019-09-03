import Post from '~models/remark/Post'

interface AllMarkdownRemark {
  edges: { node: Post }[]
}

export default AllMarkdownRemark
