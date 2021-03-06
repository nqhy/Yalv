import { GraphQLNonNull, GraphQLString, GraphQLID } from 'graphql';

import { UserType } from '../../types';
import { User } from '../../../db/models';

export const updateUser = (type) => ({
  type: UserType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) },
    [type]: { type: new GraphQLNonNull(GraphQLString) },
  },
  resolve: (parent, args) => {
    const data = { [type]: args[type] };
    return User.updateUserInfo(args.id, type, data);
  },
});
