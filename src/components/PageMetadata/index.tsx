import _ from 'lodash'
import React from 'react'
import { Helmet } from 'react-helmet'

import useSiteMetadata from '~hooks/useSiteMetadata'

interface PageMetadataProps {
  title?: string,
  description?: string,
  keywords?: string[],
  image?: string,
  restUrl?: string
}

const PageMetadata: React.FC<PageMetadataProps> = ({
  title,
  description,
  keywords,
  image,
  restUrl = ''
}: PageMetadataProps) => {
  const siteMetadata = useSiteMetadata()
  return (
    <Helmet>
      <html lang='ko' />
      <title>{title || siteMetadata.title}</title>
      <meta name='description' content={description || siteMetadata.description} />
      <meta name='author' content={siteMetadata.author} />
      <meta name='keywords' content={_.join(keywords)} />

      <meta property='og:type' content='website' />
      <meta property='og:title' content={title || siteMetadata.title} />
      <meta property="og:description" content={description || siteMetadata.description} />
      <meta property='og:image' content={`${siteMetadata.siteUrl}/${image || 'images/me.png'}}`} />
      <meta property='og:url' content={`${siteMetadata.siteUrl}${restUrl}`} />
    </Helmet>
  )
}

export default PageMetadata
