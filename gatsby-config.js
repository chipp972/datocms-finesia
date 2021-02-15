/* eslint-disable fp/no-mutation, no-undef, @typescript-eslint/camelcase */
require('dotenv').config();

const name = 'Finesia conseil';
const description = 'Cabinet de courtage, conseil financiers';

module.exports = {
  siteMetadata: {
    title: name,
    description,
    siteUrl: 'https://finesia.netlify.app/'
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name,
        short_name: name,
        description,
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#92CAB5',
        display: 'standalone',
        icon: 'static/img/favicon-512x512.png',
        icon_options: {
          purpose: 'any maskable'
        }
      }
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-typescript',
    'gatsby-plugin-anchor-links',
    // {
    //   resolve: 'gatsby-plugin-portal',
    //   options: { id: 'dialog' }
    // },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'fr'
      }
    },
    'gatsby-plugin-sitemap',
    'gatsby-plugin-robots-txt',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/
        }
      }
    },
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-datocms',
      options: {
        apiToken: process.env.DATO_API_TOKEN
      }
    },
    'gatsby-plugin-netlify'
  ]
};
