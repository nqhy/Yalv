import { GraphQLNonNull, GraphQLString, GraphQLID } from 'graphql';

import { PostCategoryType } from '../types';
import { PostCategory } from '../../db/models';
import { updatePostCategory } from './provider';

// Create
const createPostCategory = {
  type: PostCategoryType,
  args: {
    name: { type: new GraphQLNonNull(GraphQLString) },
    style: { type: new GraphQLNonNull(GraphQLString) },
    image: { type: new GraphQLNonNull(GraphQLString) },
  },
  resolve: async (parent, args) => PostCategory.createPostCategory(args),
};

// Update
const updatePostCategoryName = updatePostCategory('name');
const updatePostCategoryStyle = updatePostCategory('style');
const updatePostCategoryImage = updatePostCategory('image');

// Delete
const deletePostCategory = {
  type: PostCategoryType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) },
  },
  resolve: (parent, args) => PostCategory.deletePostCategory(args.id),
};

export const mutationPostCategory = {
  createPostCategory,
  updatePostCategoryName,
  updatePostCategoryStyle,
  updatePostCategoryImage,
  deletePostCategory,
};
