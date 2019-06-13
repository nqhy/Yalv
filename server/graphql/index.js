import { GraphQLSchema, GraphQLObjectType } from 'graphql';

import { querieUser, queriePost, querieComment, querieTag, queriePostCategory } from './queries';
import { mutationUser, mutationPost, mutationComment, mutationTag, mutationPostCategory } from './mutations';

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    ...querieUser,
    ...queriePost,
    ...queriePostCategory,
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
    ...mutationPostCategory,
  },
});

export default new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
