import { GraphQLNonNull, GraphQLString, GraphQLID } from 'graphql';

import { TagType } from '../types';
import { updateTag } from './provider';
import { Tag } from '../../db/models';

// Create
const createTag = {
  type: TagType,
  args: {
    name: { type: new GraphQLNonNull(GraphQLString) },
    background: { type: new GraphQLNonNull(GraphQLString) },
    textColor: { type: new GraphQLNonNull(GraphQLString) },
  },
  resolve: async (parent, args) => Tag.createTag(args),
};

// Update
const updateTagName = updateTag('name');
const updateTagBackground = updateTag('background');
const updateTagTextColor = updateTag('textColor');

// Delete
const deleteTag = {
  type: TagType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) },
  },
  resolve: (parent, args) => Tag.deleteTag(args.id),
};

export const mutationTag = {
  createTag,
  updateTagName,
  updateTagBackground,
  updateTagTextColor,
  deleteTag,
};
