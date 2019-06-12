import { GraphQLSchema, GraphQLObjectType } from 'graphql';

import { querieUser, queriePost, querieComment, querieTag } from './queries';
import { mutationUser, mutationPost, mutationComment, mutationTag } from './mutations';

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    ...querieUser,
    ...queriePost,
    ...querieComment,
    ...querieTag,
  },
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    ...mutationUser,
    ...mutationPost,
    ...mutationComment,
    ...mutationTag,
  },
});

export default new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
