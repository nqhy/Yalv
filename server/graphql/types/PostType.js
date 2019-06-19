import { GraphQLID, GraphQLString, GraphQLList, GraphQLObjectType } from 'graphql';

import { UserType } from './UserType';
import { CommentType } from './CommentType';
import { Post } from '../../db/models/Post';
import { PostCategoryType } from './PostCategoryType';

export const PostType = new GraphQLObjectType({
  name: 'Post',
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    author: { type: GraphQLString },
    images: { type: GraphQLList(GraphQLString) },
    content: { type: GraphQLString },
    categories: {
      type: new GraphQLList(PostCategoryType),
      resolve(parent) {
        return Post.findCategories(parent.id);
      },
    },
    likers: {
      type: new GraphQLList(UserType),
      resolve(parent) {
        return Post.findLikers(parent.id);
      },
    },
    comments: {
      type: new GraphQLList(CommentType),
      resolve(parent) {
        return Post.findComments(parent.id);
      },
    },
    tags: {
      type: new GraphQLList(CommentType),
      resolve(parent) {
        return Post.findTags(parent.id);
      },
    },
    error: { type: GraphQLString },
  }),
});
