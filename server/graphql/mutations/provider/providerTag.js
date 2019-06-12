import { GraphQLNonNull, GraphQLString, GraphQLID } from 'graphql';

import { TagType } from '../../types';
import { Tag } from '../../../db/models';

export const updateTag = (type) => ({
  type: TagType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) },
    [type]: { type: new GraphQLNonNull(GraphQLString) },
  },
  resolve: (parent, args) => {
    const data = { [type]: args[type] };
    return Tag.updateTagInfo(args.id, type, data);
  },
});
