import { GraphQLObjectType, GraphQLID, GraphQLString } from 'graphql';

import { UserType } from './UserType';
import { Commnent } from '../../db/models/Comment';

export const CommentType = new GraphQLObjectType({
  name: 'Comment',
  fields: () => ({
    id: { type: GraphQLID },
    author: {
      type: UserType,
      resolve(parent) {
        return Commnent.findAuthor(parent.id);
      },
    },
    content: { type: GraphQLString },
    error: { type: GraphQLString },
  }),
});
