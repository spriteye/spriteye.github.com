import Frontmatter from '~models/remark/Frontmatter'

interface Post {
  id: number
  frontmatter: Frontmatter
  fields: {
    slug: string
  }
}

export default Post
