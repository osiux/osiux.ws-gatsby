module.exports = {
    siteMetadata: {
        title: `Eduardo Reveles`,
        description: `Full Stack Developer`,
        author: `@osiux`,
        siteUrl: `https://www.osiux.ws/`,
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
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `posts`,
                path: `${__dirname}/content/posts`,
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
                        resolve: `gatsby-remark-vscode`,
                        options: {
                            injectStyles: false,
                            theme: {
                                default: 'Monokai Dimmed',
                                parentSelector: {
                                    '.use-light-theme': 'Solarized Light',
                                    '.use-dark-theme': 'Monokai Dimmed',
                                },
                            },
                        },
                    },
                    `gatsby-remark-embedder`,
                    `gatsby-remark-smartypants`,
                    `gatsby-remark-copy-linked-files`,
                    `gatsby-remark-responsive-iframe`,
                ],
            },
        },
        {
            resolve: `gatsby-plugin-feed`,
            options: {
                feeds: [
                    {
                        serialize: ({ query: { site, allMarkdownRemark } }) => {
                            return allMarkdownRemark.edges.map((edge) => {
                                return Object.assign(
                                    {},
                                    edge.node.frontmatter,
                                    {
                                        description: edge.node.excerpt,
                                        date: edge.node.frontmatter.date,
                                        url:
                                            site.siteMetadata.siteUrl +
                                            '/blog/' +
                                            edge.node.fields.slug,
                                        guid:
                                            site.siteMetadata.siteUrl +
                                            '/blog/' +
                                            edge.node.fields.slug,
                                        custom_elements: [
                                            {
                                                'content:encoded':
                                                    edge.node.html,
                                            },
                                        ],
                                    },
                                );
                            });
                        },
                        query: `
                            {
                                allMarkdownRemark (
                                    sort: { order: DESC, fields: frontmatter___date }
                                    filter: { frontmatter: { draft: { ne: true } } }
                                ) {
                                    edges {
                                        node {
                                            excerpt
                                            html
                                            fields {
                                                slug
                                            }
                                            frontmatter {
                                                date(formatString: "MMM D, YYYY")
                                                title
                                            }
                                        }
                                    }
                                }
                            }
                        `,
                        output: 'rss.xml',
                        title: 'Eduardo Reveles',
                    },
                ],
            },
        },
        `gatsby-plugin-sitemap`,
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
