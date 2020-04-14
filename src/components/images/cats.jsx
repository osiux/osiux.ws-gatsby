import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Cats = () => (
    <StaticQuery
        query={graphql`
            query {
                placeholderImage: file(relativePath: { eq: "cats.jpg" }) {
                    childImageSharp {
                        fixed(width: 300, height: 300) {
                            ...GatsbyImageSharpFixed
                        }
                    }
                }
            }
        `}
        render={(data) => (
            <Img
                style={{ margin: '0 auto', clipPath: 'circle(50% at 50% 50%)' }}
                fixed={data.placeholderImage.childImageSharp.fixed}
            />
        )}
    />
);
export default Cats;
