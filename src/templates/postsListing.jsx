import React, { Fragment } from 'react';
import styled from '@emotion/styled';
import { graphql, Link } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Pagination from '../components/Pagination';

const ArticleTitle = styled.h2`
    margin: 5px 0;
`;

const Meta = styled.p`
    font-size: 15px;
    margin: 10px 0;
`;

export const pageQuery = graphql`
    query ListingQuery($skip: Int!, $limit: Int!) {
        allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC }
            limit: $limit
            skip: $skip
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
                return (
                    <Fragment key={node.id}>
                        <ArticleTitle>
                            <Link to={`/blog/${node.fields.slug}`}>
                                {node.frontmatter.title}
                            </Link>
                        </ArticleTitle>
                        <Meta>Published on {node.frontmatter.date}</Meta>
                        <p>{node.excerpt}</p>
                    </Fragment>
                );
            })}
            <Pagination totalPages={pageCount} currentPage={currentPageNum} />
        </Layout>
    );
};

export default PostsListing;
