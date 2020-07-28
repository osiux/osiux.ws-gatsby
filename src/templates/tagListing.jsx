import React, { useMemo } from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Pagination from '../components/Pagination';
import SimplePost from '../components/posts/SimplePost';

import { postsFromGraphql } from '../helpers';

export const pageQuery = graphql`
    query TagListingQuery($skip: Int!, $limit: Int!, $tag: [String]!) {
        allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC }
            limit: $limit
            skip: $skip
            filter: { frontmatter: { tags: { in: $tag }, draft: { ne: true } } }
        ) {
            nodes {
                ...PostFields
            }
        }
    }
`;

const TagListing = ({ data, pageContext }) => {
    const { tagPageCount, currentPageNum, tag } = pageContext;

    const posts = useMemo(
        () => postsFromGraphql(data.allMarkdownRemark.nodes),
        [data],
    );

    return (
        <Layout>
            <SEO title={`Archive - Tag: ${tag} - Page ${currentPageNum}`} />
            <h1>Archive - Tag: <strong>{tag}</strong></h1>
            {posts.map((post) => {
                return <SimplePost key={post.id} {...post} />;
            })}
            <Pagination
                totalPages={tagPageCount}
                currentPage={currentPageNum}
                basePath={`/blog/tag/${tag}/`}
            />
        </Layout>
    );
};

export default TagListing;
