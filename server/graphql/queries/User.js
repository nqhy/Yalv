import { GraphQLID, GraphQLList } from 'graphql';

import { User } from '../../db/models/User';
import { UserType } from '../schema/UserSchema';

export const user = {
  type: UserType,
  args: { id: { type: GraphQLID } },
  resolve(parent, args) {
    return User.findById(args.id);
  },
};

export const users = {
  type: new GraphQLList(UserType),
  resolve() {
    return User.find();
  },
};
