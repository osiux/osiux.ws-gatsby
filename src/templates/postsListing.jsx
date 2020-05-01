import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Pagination from '../components/Pagination';
import Post from '../components/posts/Post';

export const pageQuery = graphql`
    query ListingQuery($skip: Int!, $limit: Int!) {
        allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC }
            limit: $limit
            skip: $skip
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
                    excerpt(pruneLength: 150, truncate: false)
                }
            }
        }
    }
`;

const PostsListing = ({ data, pageContext }) => {
    const { pageCount, currentPageNum } = pageContext;

    return (
        <Layout>
            <SEO title={`Blog - Page ${currentPageNum}`} />
            {data.allMarkdownRemark.edges.map(({ node }) => {
                return <Post key={node.id} node={node} />;
            })}
            <Pagination totalPages={pageCount} currentPage={currentPageNum} />
        </Layout>
    );
};

export default PostsListing;
