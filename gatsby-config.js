module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "~components": `src/components`,
          "~hooks": `src/hooks`,
          "~styles": `src/styles`
        },
        extensions: []
      }
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-styled-components-dark-mode`,
      options: {
        dark: require(`${__dirname}/src/styles/theme/dark.js`),
        light: require(`${__dirname}/src/styles/theme/light.js`)
      }
    }
  ]
}
