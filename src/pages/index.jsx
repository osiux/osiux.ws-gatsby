import React, { useMemo } from 'react';
import tw from 'twin.macro';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import SimplePost from '../components/posts/SimplePost';

import { postsFromGraphql } from '../helpers';

const Div = tw.div`min-w-full`;

const IndexPage = () => {
    const latestPosts = useStaticQuery(graphql`
        {
            allMarkdownRemark(
                sort: { order: DESC, fields: frontmatter___date }
                limit: 3
                filter: { frontmatter: { draft: { ne: true } } }
            ) {
                nodes {
                    ...PostFields
                }
            }
        }
    `);

    const posts = useMemo(
        () => postsFromGraphql(latestPosts.allMarkdownRemark.nodes),
        [latestPosts],
    );

    return (
        <Layout>
            <SEO title="Home" />
            <Div className="prose">
                <h1>Latests Blog Posts</h1>
                {posts.map((post) => (
                    <SimplePost key={post.id} {...post} />
                ))}
            </Div>
        </Layout>
    );
};

export default IndexPage;
