/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: process.env.SITE_TITLE,
    siteUrl: process.env.SITE_URL,
    description: process.env.SITE_DESCRIPTION,
    image: process.env.SITE_IMAGE
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          process.env.GTAG, // Google Analytics / GA
        ],
        gtagConfig: {
          // optimize_id: "OPT_CONTAINER_ID",
          anonymize_ip: true,
          cookie_expires: 0,
        },
        pluginConfig: {
          head: true,
          respectDNT: true,
          exclude: [],
        },
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
         include: /assets/
        }
      }
    },
  ],
}
