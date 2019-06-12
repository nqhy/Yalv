import { GraphQLObjectType, GraphQLID, GraphQLString } from 'graphql';

export const TagType = new GraphQLObjectType({
  name: 'Tag',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    background: { type: GraphQLString },
    textColor: { type: GraphQLString },
    error: { type: GraphQLString },
  }),
});
