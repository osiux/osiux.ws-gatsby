import React, { Fragment } from 'react';
import styled from '@emotion/styled';
import { useStaticQuery, graphql, Link } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

const ArticleTitle = styled.h2`
    margin: 5px 0;
`;

const Meta = styled.p`
    font-size: 15px;
    margin: 10px 0;
`;

const IndexPage = () => {
    const latestArticles = useStaticQuery(graphql`
        {
            allMarkdownRemark(
                sort: { order: DESC, fields: frontmatter___date }
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
            <SEO title="Articles" />
            {latestArticles.allMarkdownRemark.edges.map(({ node }) => {
                return (
                    <Fragment key={node.id}>
                        <ArticleTitle>
                            <Link to={`/articles/${node.fields.slug}`}>{node.frontmatter.title}</Link>
                        </ArticleTitle>
                        <Meta>Published on {node.frontmatter.date}</Meta>
                        <p>{node.excerpt}</p>
                    </Fragment>
                );
            })}
        </Layout>
    );
};

export default IndexPage;
