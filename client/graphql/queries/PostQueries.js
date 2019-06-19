import gql from 'graphql-tag';

const posts = gql(`
  {
    posts{
      id
      title
      author
      images
      content
      categories{
        id
        name
      }
    }
  }
`);

export const PostQueries = {
  posts,
};
