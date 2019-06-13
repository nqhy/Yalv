// @flow
import React from 'react';
import { graphql, compose } from 'react-apollo';
import { UserMutation } from '../../graphql/mutations';

export const withGraphQlAuthenticate = (Componnent: Node) => (props) => {
  const NewComponent = compose(
    graphql(UserMutation.createUser, { name: 'createUser' }),
    graphql(UserMutation.validateUser, { name: 'validateUser' })
  )(Componnent);

  return (
    <NewComponent {...props} />
  );
};
