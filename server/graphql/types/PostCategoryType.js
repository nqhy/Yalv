import { GraphQLID, GraphQLString, GraphQLObjectType } from 'graphql';

export const PostCategoryType = new GraphQLObjectType({
  name: 'PostCategory',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    style: { type: GraphQLString },
    image: { type: GraphQLString },
    error: { type: GraphQLString },
  }),
});
