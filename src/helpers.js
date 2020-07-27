export const postsFromGraphql = (posts) =>
    posts.map((post) => ({
        id: post.id,
        slug: post.fields.slug,
        title: post.frontmatter.title,
        date: post.frontmatter.date,
        tags: post.frontmatter.tags || [],
        category: post.frontmatter.category,
    }));
