import React from 'react';
import styled from '@emotion/styled';
import tw from '@tailwindcssinjs/macro';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Post from '../components/posts/Post';

const Title = styled.h1`
    ${tw`text-3xl font-bold`};
`;

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
                        excerpt(pruneLength: 100, truncate: false)
                    }
                }
            }
        }
    `);

    return (
        <Layout>
            <SEO title="Home" />
            <Title>Latests Blog Posts</Title>
            {latestPosts.allMarkdownRemark.edges.map(({ node }) => {
                return <Post key={node.id} node={node} />;
            })}
        </Layout>
    );
};

export default IndexPage;
