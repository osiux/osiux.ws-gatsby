import React, { Fragment } from 'react';
import Img from 'gatsby-image';
import styled from '@emotion/styled';
import { StaticQuery, graphql } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

const NonStretchedImage = props => {
    let normalizedProps = props;
    if (props.fluid && props.fluid.presentationWidth) {
        normalizedProps = {
            ...props,
            style: {
                ...(props.style || {}),
                maxWidth: props.fluid.presentationWidth,
                margin: '0 auto 10px', // Used to center the image
            },
        };
    }

    return <Img {...normalizedProps} />;
};

const PhotoCredit = styled.p`
    text-align: center;
    font-size: 15px;
`;

const Me = () => (
    <StaticQuery
        query={graphql`
            query {
                placeholderImage: file(
                    relativePath: { eq: "eduardo-reveles.jpg" }
                ) {
                    childImageSharp {
                        fluid(maxWidth: 500) {
                            ...GatsbyImageSharpFluid
                            presentationWidth
                        }
                    }
                }
            }
        `}
        render={data => (
            <Fragment>
                <NonStretchedImage
                    fluid={data.placeholderImage.childImageSharp.fluid}
                />
                <PhotoCredit>
                    Photo by{' '}
                    <OutboundLink href="https://unsplash.com/@melspadawan?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                        Melissa Castillo
                    </OutboundLink>{' '}
                    on{' '}
                    <OutboundLink href="https://unsplash.com/@melspadawan/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                        Unsplash
                    </OutboundLink>
                </PhotoCredit>
            </Fragment>
        )}
    />
);

export default Me;
