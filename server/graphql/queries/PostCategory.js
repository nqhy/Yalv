import { GraphQLID, GraphQLList } from 'graphql';

import { PostCategoryType } from '../types';
import { PostCategory } from '../../db/models';

const postCategory = {
  type: PostCategoryType,
  args: { id: { type: GraphQLID } },
  resolve(parent, args) {
    return PostCategory.findById(args.id);
  },
};

const postCategories = {
  type: new GraphQLList(PostCategoryType),
  resolve() {
    return PostCategory.find();
  },
};

export const queriePostCategory = {
  postCategory,
  postCategories,
};
