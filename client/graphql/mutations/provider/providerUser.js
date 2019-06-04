import gql from 'graphql-tag';

export const updateUserProvider = (type) => gql(`
  mutation($id: String!, $${type}: String!){
    updateUserName(id: $id, ${type}: $${type}){
      token
    }
}`);
