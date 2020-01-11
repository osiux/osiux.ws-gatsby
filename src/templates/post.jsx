import React from 'react';
import styled from '@emotion/styled';
import { graphql, Link } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

const Meta = styled.p`
    font-size: 15px;
    margin: 5px 0 20px;
`;

const Nav = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    list-style: none;
    padding: 0;
`;

const Content = styled.div`
    text-align: justify;
`;

export const pageQuery = graphql`
    query PostBySlug($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            id
            excerpt
            html
            frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
            }
        }
    }
`;

const Post = ({ data, pageContext }) => {
    const article = data.markdownRemark;
    const { previous, next } = pageContext;

    return (
        <Layout>
            <SEO title={article.frontmatter.title} />

            <article>
                <h1>{article.frontmatter.title}</h1>
                <Meta>Published on {article.frontmatter.date}</Meta>

                <Content dangerouslySetInnerHTML={{ __html: article.html }} />
            </article>

            <Nav>
                <li>
                    {previous && (
                        <Link
                            to={`/blog/${previous.fields.slug}`}
                            rel="prev"
                        >
                            ← {previous.frontmatter.title}
                        </Link>
                    )}
                </li>
                <li>
                    {next && (
                        <Link to={`/blog/${next.fields.slug}`} rel="next">
                            {next.frontmatter.title} →
                        </Link>
                    )}
                </li>
            </Nav>
        </Layout>
    );
};

export default Post;
