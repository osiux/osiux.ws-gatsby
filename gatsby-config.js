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
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: [`PT Sans`, `Oswald`],
                display: 'swap',
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
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/salem.png`, // This path is relative to the root of the site.
            },
        },
        `gatsby-plugin-catch-links`,
        `gatsby-plugin-offline`,
        {
            resolve: `gatsby-plugin-favicon`,
            options: {
                logo: './src/images/salem.png',
                lang: 'en-US',
                background: '#121619',
                theme_color: '#121619',
                icons: {
                    android: true,
                    appleIcon: true,
                    appleStartup: true,
                    coast: false,
                    favicons: true,
                    firefox: true,
                    opengraph: false,
                    twitter: false,
                    yandex: false,
                    windows: false,
                },
            },
        },

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
