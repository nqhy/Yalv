import { GraphQLNonNull, GraphQLString, GraphQLID } from 'graphql';

import { UserType } from '../schema/UserSchema';
import { User } from '../../db/models/User';
import { logger } from '../../db/config/logger';

export const addUser = {
  type: UserType,
  args: {
    username: { type: new GraphQLNonNull(GraphQLString) },
    email: { type: new GraphQLNonNull(GraphQLString) },
    password: { type: new GraphQLNonNull(GraphQLString) },
  },
  resolve(parent, args) {
    const user = new User({
      username: args.username,
      email: args.email,
    });
    user.setPassword(args.password);
    return user.save();
  },
};

export const updateUser = {
  type: UserType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) },
    data: { type: new GraphQLNonNull(GraphQLString) },
  },
  resolve(parent, args) {
    const updateData = JSON.parse(args.data);
    return User.findByIdAndUpdate(args.id, { ...updateData }, { new: true });
  },
};

export const deleteUser = {
  type: UserType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) },
  },
  resolve(parent, args) {
    return User.findByIdAndRemove(args.id);
  },
};

export const deleteManyUser = {
  type: UserType,
  resolve() {
    return User.deleteMany({}, () => {
      logger.info('Delete Succesfully');
    });
  },
};
