import { GraphQLID, GraphQLList } from 'graphql';

import { CommentType } from '../types';
import { Commnent } from '../../db/models';

const comment = {
  type: CommentType,
  args: { id: { type: GraphQLID } },
  resolve(parent, args) {
    return Comment.findById(args.id);
  },
};

const comments = {
  type: new GraphQLList(CommentType),
  resolve() {
    return Commnent.find();
  },
};

export const querieComment = {
  comment,
  comments,
};
