import { GraphQLNonNull, GraphQLString, GraphQLID } from 'graphql';

import { PostType } from '../../types';
import { Post } from '../../../db/models';

export const updatePost = (type) => ({
  type: PostType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) },
    [type]: { type: new GraphQLNonNull(GraphQLString) },
  },
  resolve: (parent, args) => {
    const data = { [type]: args[type] };
    return Post.updatePostInfo(args.id, type, data);
  },
});
