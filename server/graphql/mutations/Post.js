import { GraphQLNonNull, GraphQLString, GraphQLID, GraphQLList } from 'graphql';

import { PostType } from '../types';
import { logger } from '../../db/config/logger';
import { i18n } from '../../config/i18n';
import { updatePost } from './provider';
import { Post } from '../../db/models';

// Create
const createPost = {
  type: PostType,
  args: {
    title: { type: new GraphQLNonNull(GraphQLString) },
    author: { type: new GraphQLNonNull(GraphQLString) },
    content: { type: new GraphQLNonNull(GraphQLString) },
    images: { type: new GraphQLNonNull(GraphQLList(GraphQLString)) },
    categories: { type: new GraphQLNonNull(GraphQLList(GraphQLID)) },
  },
  resolve: async (parent, args) => Post.createPost(args),
};

// Update
const updatePostTitle = updatePost('title');
const updatePostAuthor = updatePost('author');
const updatePostImages = updatePost('images');
const updatePostContent = updatePost('content');

// Delete
const deletePost = {
  type: PostType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) },
  },
  resolve: (parent, args) => Post.deletePost(args.id),
};

const deleteManyUser = {
  type: PostType,
  resolve: () => Post.deleteMany({}, () => {
    logger.info(i18n('message.success.delete'));
  }),
};


export const mutationPost = {
  createPost,
  updatePostTitle,
  updatePostAuthor,
  updatePostContent,
  updatePostImages,
  deletePost,
  deleteManyUser,
};
