import { gql } from 'apollo-boost';

export const updateUserProvider = (type) => gql`
  mutation($id: String!, $${type}: String!){
    updateUserName(id: $id, ${type}: $${type}){
      token
    }
}`;
