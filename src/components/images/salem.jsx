import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Salem = () => (
    <StaticQuery
        query={graphql`
            query {
                placeholderImage: file(relativePath: { eq: "salem.png" }) {
                    childImageSharp {
                        fixed(width: 300) {
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
export default Salem;
