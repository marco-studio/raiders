module.exports = {
  siteMetadata: {
    title: `RAIDERS OF THE PODCAST`,
    description: `A weekly podcast about movies. Sometimes new movies, often old movies, frequently bad movies. We like long strolls on the beach, relaxing afternoons at the cinema, monkey mudwrestling, and listeners like you.`,
    author: ``,
    twitter: `https://twitter.com/`,
    instagram: `https://www.instagram.com/raiders_of_the_podcast/`,
    facebook: ``,
    youtube: ``,
    apple: `https://podcasts.apple.com/podcast/id1250657197?ct=podlink&mt=2`,
    stitcher: ``,
    google: `https://podcasts.google.com/?feed=aHR0cDovL2ZlZWRzLmZlZWRidXJuZXIuY29tL1JhaWRlcnNPZlRoZVBvZGNhc3Q=`,
    pocket: `https://pca.st/itunes/1250657197`,
    spotify: `https://castbox.fm/vic/1250657197`,
    overcast: `https://overcast.fm/itunes1250657197`,
    castbox: `https://castbox.fm/vic/1250657197`,
    castro: `https://castro.fm/itunes/1250657197`,
    podbean: ``,
    beaker: `https://www.iheart.com/podcast/from-podnews-31039750/`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        // icon: `https://pbcdn1.podbean.com/imglogo/image-logo/2144795/26850174_531238480575311_1377019303222901017_o_1_.png`, // This path is relative to the root of the site.
        icon: `src/images/logo.png` // This path is relative to the root of the site.
        // icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-rss-feed`,
      options: {
        // url: `https://www.gatsbyjs.org/blog/rss.xml`,
        // url: `https://boysinthecave.com/feed/podcast/`,
        // url: `http://boysinthecave.libsyn.com/rss`,
        url: `http://feeds.feedburner.com/RaidersOfThePodcast`,
        name: `GatsbyBlog`,
        // Optional
        // Read parser document: https://github.com/bobby-brennan/rss-parser#readme
        parserOption: {
          customFields: {
            channel: ["title", "image"]
            // item: ["itunes:summary"],
            // item: ["itunes:image", "img"],
          }
        }
      }
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require(`tailwindcss`)]
      }
    }
  ]
};
