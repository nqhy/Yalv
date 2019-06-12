import { GraphQLID, GraphQLList } from 'graphql';

import { Post } from '../../db/models';
import { PostType } from '../types';

const post = {
  type: PostType,
  args: { id: { type: GraphQLID } },
  resolve(parent, args) {
    return Post.findById(args.id);
  },
};

const posts = {
  type: new GraphQLList(PostType),
  resolve() {
    return Post.find();
  },
};

export const queriePost = {
  post,
  posts,
};
