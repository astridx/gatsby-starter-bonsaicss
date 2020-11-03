module.exports = {
  siteMetadata: {
    title: `Gatsby Starter bonsai.css`,
    description: `Gatsby starter styled with Bonsaicss`,
    author: `@astridguenther`,
    siteUrl: `https://astridx.github.io/gatsbystarter/gatsby-starter-mapbox-bonsaicss/`,
  },
  plugins: [
    `gatsby-plugin-eslint`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-bonsaicss`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `white`,
        theme_color: `teal`,
        display: `minimal-ui`,
        icon: `src/images/bonsaicss-icon.png`,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
