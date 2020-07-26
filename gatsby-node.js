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

const makeBlogPages = async ({ actions, graphql }) => {
    const postTemplate = path.resolve('src/templates/post.jsx');
    const postsListingTemplate = path.resolve('src/templates/postsListing.jsx');

    const { errors, data } = await graphql(`
        query getAllPostsData {
            allMarkdownRemark(
                sort: { order: DESC, fields: frontmatter___date },
                ${
                    process.env.NODE_ENV === 'production'
                        ? 'filter: {frontmatter: {draft: {ne: true}}}'
                        : ''
                }
            ) {
                nodes {
                    frontmatter {
                        title
                        date(formatString: "MMM D, YYYY")
                        category
                        tags
                    }
                    fields {
                        slug
                    }
                }
            }
        }
    `);

    if (errors) {
        throw new Error(errors);
    }

    const { createPage } = actions;

    const posts = data.allMarkdownRemark.nodes;

    // Pagination
    const pageCount = Math.ceil(posts.length / POSTS_PER_PAGE);

    [...Array(pageCount)].forEach((_val, pageNum) => {
        createPage({
            path: pageNum === 0 ? `/blog/` : `/blog/page-${pageNum + 1}/`,
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
            path: `blog/${post.fields.slug}`,
            component: postTemplate,
            context: {
                slug: post.fields.slug,
                previous,
                next,
            },
        });
    });
};

exports.createPages = async ({ actions, graphql }) => {
    await Promise.all([makeBlogPages({ actions, graphql })]);
};
