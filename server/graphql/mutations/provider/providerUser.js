import { GraphQLNonNull, GraphQLString, GraphQLID } from 'graphql';

import { UserType } from '../../schema/UserSchema';
import { User } from '../../../db/models/User';

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
