// @flow
import React from 'react';
import { graphql, compose } from 'react-apollo';
import { UserMutation } from '../../graphql/mutations/user';

export const withGraphQlConnection = (Componnent: Node) => (props) => {
  const NewComponent = compose(
    graphql(UserMutation.createUser, { name: 'createUser' }),
    graphql(UserMutation.validateUser, { name: 'validateUser' })
  )(Componnent);

  return (
    <NewComponent {...props} />
  );
};
