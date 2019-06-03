import { GraphQLSchema, GraphQLObjectType } from 'graphql';

import { user, users } from './queries/User';
import { addUser, validateUser, updateUser, deleteUser, deleteManyUser } from './mutations/User';

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user,
    users,
  },
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addUser,
    updateUser,
    deleteUser,
    deleteManyUser,
    validateUser,
  },
});

export default new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
