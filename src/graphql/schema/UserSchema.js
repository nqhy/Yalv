import { GraphQLObjectType, GraphQLString, GraphQLID } from 'graphql';

export const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: GraphQLID },
    username: { type: GraphQLString },
    email: { type: GraphQLString },
    bio: { type: GraphQLString },
    image: { type: GraphQLString },
    hash: { type: GraphQLString },
    salt: { type: GraphQLString },
    token: { type: GraphQLString },
    error: { type: GraphQLString },
  }),
});
