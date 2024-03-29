import React, { Fragment } from 'react';
import Img from 'gatsby-image';
import tw from 'twin.macro';
import { StaticQuery, graphql } from 'gatsby';

const NonStretchedImage = (props) => {
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

const PhotoCredit = tw.p`text-center text-sm mb-3`;

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
        render={(data) => (
            <Fragment>
                <NonStretchedImage
                    fluid={data.placeholderImage.childImageSharp.fluid}
                />
                <PhotoCredit>
                    Photo by{' '}
                    <a href="https://unsplash.com/@melspadawan?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                        Melissa Castillo
                    </a>{' '}
                    on{' '}
                    <a href="https://unsplash.com/@melspadawan/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                        Unsplash
                    </a>
                </PhotoCredit>
            </Fragment>
        )}
    />
);

export default Me;
