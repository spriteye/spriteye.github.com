require("ts-node").register({ files: true })

module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "~components": `src/components`,
          "~hooks": `src/hooks`,
          "~models": `src/models`,
          "~styles": `src/styles`
        },
        extensions: []
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `contents`,
        path: `${__dirname}/src/pages/`
      }
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-styled-components-dark-mode`,
      options: {
        dark: require(`${__dirname}/src/styles/theme`).dark,
        light: require(`${__dirname}/src/styles/theme`).light
      }
    },
    `gatsby-plugin-typescript`
  ]
}
