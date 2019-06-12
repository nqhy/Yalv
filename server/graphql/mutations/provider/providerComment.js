import { GraphQLNonNull, GraphQLString, GraphQLID } from 'graphql';

import { CommentType } from '../../types';
import { Commnent } from '../../../db/models';

export const updateComment = (type) => ({
  type: CommentType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) },
    [type]: { type: new GraphQLNonNull(GraphQLString) },
  },
  resolve: (parent, args) => {
    const data = { [type]: args[type] };
    return Commnent.updateCommentInfo(args.id, type, data);
  },
});
