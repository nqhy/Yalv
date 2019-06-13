// @flow
import React from 'react';
import { graphql } from 'react-apollo';
import { PostCategoryQueries } from '../../graphql/queries';

export const withGraphQlHome = (Componnent: Node) => (props) => {
  const NewComponent = graphql(PostCategoryQueries.postCategories)(Componnent);

  return (
    <NewComponent {...props} />
  );
};
