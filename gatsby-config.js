require('ts-node').register({ files: true })

module.exports = {
  siteMetadata: {
    title: 'spriteye.me',
    description: 'Personal website of spriteye',
    author: 'spriteye',
    siteUrl: 'https://spriteye.me'
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-alias-imports',
      options: {
        alias: {
          '~components': 'src/components',
          '~hooks': 'src/hooks',
          '~models': 'src/models',
          '~styles': 'src/styles'
        },
        extensions: []
      }
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'contents',
        path: `${__dirname}/src/pages/`
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-code-titles',
          'gatsby-remark-copy-linked-files',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 800
            }
          },
          {
            resolve: 'gatsby-remark-footnotes',
            options: {
              footnoteBackRefPreviousElementDisplay: 'inline',
              footnoteBackRefDisplay: 'inline'
            }
          },
          {
            resolve: 'gatsby-remark-prismjs',
            options: {}
          }
        ]
      }
    },
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-styled-components-dark-mode',
      options: {
        dark: require(`${__dirname}/src/styles/theme`).dark,
        light: require(`${__dirname}/src/styles/theme`).light
      }
    },
    'gatsby-plugin-typescript'
  ]
}
