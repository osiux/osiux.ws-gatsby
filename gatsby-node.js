const path = require('path');
const _ = require('lodash');
const { createFilePath } = require(`gatsby-source-filesystem`);

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
