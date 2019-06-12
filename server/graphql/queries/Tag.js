import { GraphQLID, GraphQLList } from 'graphql';

import { Tag } from '../../db/models';
import { TagType } from '../types';

const tag = {
  type: TagType,
  args: { id: { type: GraphQLID } },
  resolve(parent, args) {
    return Tag.findById(args.id);
  },
};

const tags = {
  type: new GraphQLList(TagType),
  resolve() {
    return Tag.find();
  },
};

export const querieTag = {
  tag,
  tags,
};
