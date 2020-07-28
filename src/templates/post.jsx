import React, { Fragment } from 'react';
import tw from 'twin.macro';
import styled from '@emotion/styled';
import format from 'date-fns/format';
import parseISO from 'date-fns/parseISO';
import { graphql, Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faTags } from '@fortawesome/free-solid-svg-icons';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

const Title = tw.h1`break-words mb-2!`;
const Meta = tw.p`text-sm mb-0!`;
const Date = tw.abbr`ml-2`;
const Tag = styled(Link)`
    ${tw`px-2 py-1 bg-gray-400 rounded-lg mr-2 hover:(bg-gray-600 text-gray-100) no-underline!`}
`;
const Content = tw.div`text-justify`;
const Article = tw.article``;
const Nav = tw.ul`flex flex-wrap justify-between list-none p-0`;

export const pageQuery = graphql`
    query PostBySlug($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
                date
                tags
            }
        }
    }
`;

const Post = ({ data, pageContext }) => {
    const article = data.markdownRemark;
    const { previous, next } = pageContext;

    const {
        html,
        frontmatter: { title, date, tags },
    } = article;

    const formattedDate = format(parseISO(date), 'MMM d, yyyy');

    return (
        <Layout>
            <SEO title={title} />

            <Article>
                <Title>{title}</Title>
                <Meta>
                    <FontAwesomeIcon title="Posted at" icon={faCalendarAlt} />{' '}
                    <Date title={date}>{formattedDate}</Date>
                    {tags?.length > 0 && (
                        <Fragment>
                            {' '}
                            -{' '}
                            <FontAwesomeIcon
                                title="Tagged as"
                                icon={faTags}
                            />{' '}
                            {tags.map((tag) => (
                                <Tag key={tag} to={`/blog/tag/${tag}`}>{tag}</Tag>
                            ))}
                        </Fragment>
                    )}
                </Meta>

                <Content dangerouslySetInnerHTML={{ __html: html }} />
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
