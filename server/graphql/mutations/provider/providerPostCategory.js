import { GraphQLNonNull, GraphQLString, GraphQLID } from 'graphql';

import { PostCategoryType } from '../../types';
import { PostCategory } from '../../../db/models';

export const updatePostCategory = (type) => ({
  type: PostCategoryType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) },
    [type]: { type: new GraphQLNonNull(GraphQLString) },
  },
  resolve: (parent, args) => {
    const data = { [type]: args[type] };
    return PostCategory.updatePostCategoryInfo(args.id, type, data);
  },
});
