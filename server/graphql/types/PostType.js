import { GraphQLID, GraphQLString, GraphQLList, GraphQLObjectType } from 'graphql';

import { UserType } from './UserType';
import { CommentType } from './CommentType';
import { Post } from '../../db/models/Post';

export const PostType = new GraphQLObjectType({
  name: 'Post',
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    author: {
      type: UserType,
      resolve(parent) {
        return Post.findAuthor(parent.id);
      },
    },
    content: { type: GraphQLString },
    likers: {
      type: new GraphQLList(UserType),
      resolve(parent) {
        Post.findLikers(parent.id);
      },
    },
    comments: {
      type: new GraphQLList(CommentType),
      resolve(parent) {
        Post.findComments(parent.id);
      },
    },
    tags: {
      type: new GraphQLList(CommentType),
      resolve(parent) {
        Post.findTags(parent.id);
      },
    },
    error: { type: GraphQLString },
  }),
});
