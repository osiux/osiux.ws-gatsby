import { graphql } from 'gatsby';

export const postFields = graphql`
    fragment PostFields on MarkdownRemark {
        id
        frontmatter {
            title
            date
            category
            tags
        }
        fields {
            slug
        }
        rawMarkdownBody
        timeToRead
    }
`;
