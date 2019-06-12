import { GraphQLSchema, GraphQLObjectType } from 'graphql';

import { querieUser } from './queries/User';
import { mutationUser } from './mutations/User';

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    ...querieUser,
  },
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    ...mutationUser,
  },
});

export default new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
