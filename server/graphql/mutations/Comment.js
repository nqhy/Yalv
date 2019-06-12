import { GraphQLNonNull, GraphQLString, GraphQLID } from 'graphql';

import { CommentType } from '../types';
import { updateComment } from './provider';
import { Commnent } from '../../db/models';

// Create
const createComment = {
  type: CommentType,
  args: {
    content: { type: new GraphQLNonNull(GraphQLString) },
    author: { type: new GraphQLNonNull(GraphQLID) },
  },
  resolve: async (parent, args) => Commnent.createComment(args),
};

// Update
const updateCommentContent = updateComment('title');

// Delete
const deleteComment = {
  type: CommentType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) },
  },
  resolve: (parent, args) => Comment.deleteComment(args.id),
};

export const mutationComment = {
  createComment,
  updateCommentContent,
  deleteComment,
};
