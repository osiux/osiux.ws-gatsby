import React from 'react';
import tw from 'twin.macro';
import { graphql, Link } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

const Title = tw.h1`break-words`;

const Meta = tw.p`text-sm`;

const Nav = tw.ul`flex flex-wrap justify-between list-none p-0`;

const Content = tw.div`text-justify max-w-full`;

const Article = tw.article`max-w-full`;

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

            <Article className="prose">
                <Title>{article.frontmatter.title}</Title>
                <Meta>Published on {article.frontmatter.date}</Meta>

                <Content dangerouslySetInnerHTML={{ __html: article.html }} />
            </Article>

            <Nav>
                <li>
                    {previous && (
                        <Link to={`/blog/${previous.fields.slug}`} rel="prev">
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
