const path = require('path');
const _ = require('lodash');
const { createFilePath } = require(`gatsby-source-filesystem`);

const ARTICLES_PER_PAGE = 5;

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions;
    if (node.internal.type === `MarkdownRemark`) {
        let slug = '';
        if (_.has(node, 'frontmatter') && _.has(node.frontmatter, 'title')) {
            slug = _.kebabCase(node.frontmatter.title.toLowerCase());
        } else {
            slug = createFilePath({ node, getNode, basePath: `articles` });
        }

        createNodeField({
            node,
            name: `slug`,
            value: slug,
        });
    }
};

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions;

    const articleTemplate = path.resolve('src/templates/article.jsx');
    const articlesListingTemplate = path.resolve(
        'src/templates/articlesListing.jsx',
    );

    return graphql(`
        {
            allMarkdownRemark(
                sort: { order: DESC, fields: frontmatter___date }
            ) {
                edges {
                    node {
                        frontmatter {
                            date(formatString: "MMM D, YYYY")
                            title
                        }
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `).then(result => {
        if (result.errors) {
            return Promise.reject(result.errors);
        }

        const articles = result.data.allMarkdownRemark.edges;

        // Pagination
        const pageCount = Math.ceil(articles.length / ARTICLES_PER_PAGE);

        [...Array(pageCount)].forEach((_val, pageNum) => {
            createPage({
                path:
                    pageNum === 0
                        ? `/articles/`
                        : `/articles/page-${pageNum + 1}/`,
                component: articlesListingTemplate,
                context: {
                    limit: ARTICLES_PER_PAGE,
                    skip: pageNum * ARTICLES_PER_PAGE,
                    pageCount,
                    currentPageNum: pageNum + 1,
                },
            });
        });

        // Individual Article
        articles.forEach((article, index) => {
            const previous =
                index === articles.length - 1 ? null : articles[index + 1].node;
            const next = index === 0 ? null : articles[index - 1].node;

            createPage({
                path: `articles/${article.node.fields.slug}`,
                component: articleTemplate,
                context: {
                    slug: article.node.fields.slug,
                    previous,
                    next,
                },
            });
        });
    });
};
