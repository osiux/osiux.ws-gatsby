import React from 'react';
import tw from 'twin.macro';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Post from '../components/posts/Post';

const Div = tw.div`min-w-full`;

const IndexPage = () => {
    const latestPosts = useStaticQuery(graphql`
        {
            allMarkdownRemark(
                sort: { order: DESC, fields: frontmatter___date }
                limit: 3
                filter: { frontmatter: { draft: { ne: true } } }
            ) {
                edges {
                    node {
                        id
                        frontmatter {
                            date(formatString: "MMM D, YYYY")
                            title
                        }
                        fields {
                            slug
                        }
                        excerpt(pruneLength: 300, truncate: false)
                    }
                }
            }
        }
    `);

    return (
        <Layout>
            <SEO title="Home" />
            <Div className="prose">
                <h1>Latests Blog Posts</h1>
                {latestPosts.allMarkdownRemark.edges.map(({ node }) => {
                    return <Post key={node.id} node={node} />;
                })}
            </Div>
        </Layout>
    );
};

export default IndexPage;
