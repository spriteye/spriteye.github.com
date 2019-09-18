import { useStaticQuery, graphql } from 'gatsby'

import SiteMetadata from '~models/SiteMetadata'

const useSiteMetadata = (): SiteMetadata => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
      }
    `
  )
  return site.siteMetadata
}

export default useSiteMetadata
