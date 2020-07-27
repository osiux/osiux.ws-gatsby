import React, { Fragment } from 'react';
import tw from 'twin.macro';
import styled from '@emotion/styled';
import format from 'date-fns/format';
import parseISO from 'date-fns/parseISO';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faTags } from '@fortawesome/free-solid-svg-icons';

const Article = tw.article`mb-3 hover:bg-gray-300 max-w-none py-3 px-1 rounded-lg`;
const Title = tw.h2`mb-2!`;
const Meta = tw.p``;
const Tag = styled.span`
    ${tw`px-2 py-1 bg-gray-200 rounded-lg mx-2`}
`;

const SimplePost = ({ title, slug, date, tags = [] }) => {
    const formattedDate = format(parseISO(date), 'MMM d, yyyy');

    return (
        <Article className="prose">
            <Title>
                <Link to={`/blog/${slug}`}>{title}</Link>
            </Title>
            <Meta>
                <FontAwesomeIcon title="Posted at" icon={faCalendarAlt} />{' '}
                <abbr title={date}>{formattedDate}</abbr>
                {tags.length > 0 && (
                    <Fragment>
                        {' '}
                        - <FontAwesomeIcon
                            title="Tagged as"
                            icon={faTags}
                        />{' '}
                        {tags.map((tag) => (
                            <Tag key={tag}>{tag}</Tag>
                        ))}
                    </Fragment>
                )}
            </Meta>
        </Article>
    );
};

export default SimplePost;
