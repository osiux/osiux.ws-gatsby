import React, { Fragment } from 'react';
import styled from '@emotion/styled';
import tw from 'twin.macro';
import { Link } from 'gatsby';

const ArticleTitle = styled.h2`
    ${tw`text-2xl font-bold`};
    margin: 5px 0;
`;

const Meta = styled.p`
    ${tw`text-base`};
    margin: 5px 0;
`;

const Post = ({ node }) => (
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

export default Post;
