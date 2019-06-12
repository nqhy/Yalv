import { GraphQLID, GraphQLList } from 'graphql';

import { User } from '../../db/models';
import { UserType } from '../types';

const user = {
  type: UserType,
  args: { id: { type: GraphQLID } },
  resolve(parent, args) {
    return User.findById(args.id);
  },
};

const users = {
  type: new GraphQLList(UserType),
  resolve() {
    return User.find();
  },
};

export const querieUser = {
  user,
  users,
};
