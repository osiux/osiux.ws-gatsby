module.exports = {
    siteMetadata: {
        title: `Eduardo Reveles`,
        description: `Full Stack Developer`,
        author: `@osiux`,
    },
    plugins: [
        `gatsby-plugin-emotion`,
        {
            resolve: `gatsby-plugin-lodash`,
            options: {
                disabledFeatures: [],
            },
        },
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/utils/typography`,
                omitGoogleFont: true,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `articles`,
                path: `${__dirname}/content/articles`,
            },
        },
        `gatsby-transformer-sharp`,
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                commonmark: true,
                footnotes: true,
                pedantic: true,
                gfm: true,
                plugins: [
                    `gatsby-remark-autolink-headers`,
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 1140,
                        },
                    },
                    {
                        resolve: `gatsby-remark-prismjs`,
                        options: {
                            showLineNumbers: true,
                        },
                    },
                    `gatsby-remark-embedder`,
                    `gatsby-remark-smartypants`,
                    `gatsby-remark-copy-linked-files`,
                    `gatsby-remark-responsive-iframe`,
                ],
            },
        },
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Eduardo Reveles`,
                short_name: `Eduardo Reveles`,
                start_url: `/`,
                background_color: `#fdfffc`,
                theme_color: `#0a090c`,
                display: `minimal-ui`,
                icon: `src/images/salem.png`, // This path is relative to the root of the site.
            },
        },
        `gatsby-plugin-catch-links`,
        `gatsby-plugin-offline`,
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: 'UA-130842966-1',
                head: false,
                anonymize: true,
                respectDNT: true,
            },
        },
    ],
};
