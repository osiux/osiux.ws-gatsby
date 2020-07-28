import { graphql } from 'gatsby';

export const postFields = graphql`
    fragment PostFields on MarkdownRemark {
        id
        frontmatter {
            title
            date
            tags
        }
        fields {
            slug
        }
        rawMarkdownBody
        timeToRead
    }
`;
