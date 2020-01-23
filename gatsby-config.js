require('dotenv').config({
  path: `.env`,
})

module.exports = {
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-emotion',
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: 'kanewcv',
        accessToken: process.env.API_KEY,
      },
    },
  ],
}
