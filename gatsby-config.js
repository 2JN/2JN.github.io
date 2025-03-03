module.exports = {
  siteMetadata: {
    title: "2J Portfolio",
  },
  plugins: [
    "gatsby-plugin-mdx",
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require("@tailwindcss/postcss")({})],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
