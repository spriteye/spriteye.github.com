module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "~components": `src/components`,
          "~styles": `src/styles`
        },
        extensions: []
      }
    },
    `gatsby-plugin-styled-components`
  ]
}
