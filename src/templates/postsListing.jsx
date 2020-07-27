import React, { useMemo } from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Pagination from '../components/Pagination';
import SimplePost from '../components/posts/SimplePost';

import { postsFromGraphql } from '../helpers';

export const pageQuery = graphql`
    query ListingQuery($skip: Int!, $limit: Int!) {
        allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC }
            limit: $limit
            skip: $skip
            filter: { frontmatter: { draft: { ne: true } } }
        ) {
            nodes {
                ...PostFields
            }
        }
    }
`;

const PostsListing = ({ data, pageContext }) => {
    const { pageCount, currentPageNum } = pageContext;

    const posts = useMemo(
        () => postsFromGraphql(data.allMarkdownRemark.nodes),
        [data],
    );

    return (
        <Layout>
            <SEO title={`Blog - Page ${currentPageNum}`} />
            <h1>Archive</h1>
            {posts.map((post) => {
                return <SimplePost key={post.id} {...post} />;
            })}
            <Pagination totalPages={pageCount} currentPage={currentPageNum} />
        </Layout>
    );
};

export default PostsListing;
