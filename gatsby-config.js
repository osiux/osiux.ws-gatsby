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
                    {
                        resolve: `gatsby-remark-autolink-headers`,
                        options: {
                            offsetY: 100,
                        },
                    },
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
                            theme: 'Monokai',
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
        {
            resolve: `gatsby-plugin-canonical-urls`,
            options: {
                siteUrl: `https://www.osiux.ws`,
                stripQueryString: true,
            },
        },
        `gatsby-plugin-offline`,
        {
            resolve: 'gatsby-plugin-local-search',
            options: {
                name: 'posts',
                engine: 'flexsearch',
                engineOptions: 'speed',
                query: `query getAllPostsData {
                    allMarkdownRemark(sort: {order: DESC, fields: frontmatter___date}) {
                        nodes {
                            id
                            frontmatter {
                                title
                                date
                                tags
                            }
                            fields {
                                slug
                            }
                            rawMarkdownBody
                        }
                    }
                }`,
                ref: 'id',
                index: ['title', 'body', 'tags'],
                store: ['id', 'slug', 'title', 'tags', 'date'],
                normalizer: ({ data }) =>
                    data.allMarkdownRemark.nodes.map((node) => ({
                        id: node.id,
                        slug: node.fields.slug,
                        title: node.frontmatter.title,
                        body: node.rawMarkdownBody,
                        tags: node.frontmatter.tags,
                        date: node.frontmatter.date,
                    })),
            },
        },
    ],
};
