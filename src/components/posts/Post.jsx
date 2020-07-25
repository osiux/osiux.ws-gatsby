import React from 'react';
import tw from 'twin.macro';
import { Link } from 'gatsby';

const Article = tw.article`min-w-full mb-5`;

const ArticleTitle = tw.h2`text-2xl font-bold m-0 mt-1`;

const Meta = tw.p`text-sm m-0 mt-1`;

const Post = ({ node }) => (
    <Article className="prose" key={node.id}>
        <ArticleTitle>
            <Link to={`/blog/${node.fields.slug}`}>
                {node.frontmatter.title}
            </Link>
        </ArticleTitle>
        <Meta>Published on {node.frontmatter.date}</Meta>
        <p>{node.excerpt}</p>
    </Article>
);

export default Post;
