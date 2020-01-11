const path = require('path');
const _ = require('lodash');
const { createFilePath } = require(`gatsby-source-filesystem`);

const POSTS_PER_PAGE = 5;

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions;
    if (node.internal.type === `MarkdownRemark`) {
        let slug = '';
        if (_.has(node, 'frontmatter') && _.has(node.frontmatter, 'title')) {
            slug = _.kebabCase(node.frontmatter.title.toLowerCase());
        } else {
            slug = createFilePath({ node, getNode, basePath: `posts` });
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

    const postTemplate = path.resolve('src/templates/post.jsx');
    const postsListingTemplate = path.resolve(
        'src/templates/postsListing.jsx',
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

        const posts = result.data.allMarkdownRemark.edges;

        // Pagination
        const pageCount = Math.ceil(posts.length / POSTS_PER_PAGE);

        [...Array(pageCount)].forEach((_val, pageNum) => {
            createPage({
                path:
                    pageNum === 0
                        ? `/blog/`
                        : `/blog/page-${pageNum + 1}/`,
                component: postsListingTemplate,
                context: {
                    limit: POSTS_PER_PAGE,
                    skip: pageNum * POSTS_PER_PAGE,
                    pageCount,
                    currentPageNum: pageNum + 1,
                },
            });
        });

        // Individual Article
        posts.forEach((post, index) => {
            const previous =
                index === posts.length - 1 ? null : posts[index + 1].node;
            const next = index === 0 ? null : posts[index - 1].node;

            createPage({
                path: `blog/${post.node.fields.slug}`,
                component: postTemplate,
                context: {
                    slug: post.node.fields.slug,
                    previous,
                    next,
                },
            });
        });
    });
};
