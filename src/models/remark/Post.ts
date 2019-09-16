import Frontmatter from '~models/remark/Frontmatter'

interface Post {
  id: number
  frontmatter: Frontmatter
  html: string,
  fields: {
    slug: string
  }
}

export default Post
