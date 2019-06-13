import gql from 'graphql-tag';

const postCategories = gql(`
  {
    postCategories{
      name
      style
      image
    }
  }
`);

export const PostCategoryQueries = {
  postCategories,
};
