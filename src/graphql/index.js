import { GraphQLSchema, GraphQLObjectType } from 'graphql';

import { user, users } from './query/User';
import { addUser, updateUser, deleteUser, deleteManyUser } from './mutation/User';

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
  },
});

export default new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
