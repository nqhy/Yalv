import { GraphQLNonNull, GraphQLString, GraphQLID } from 'graphql';

import { UserType } from '../schema/UserSchema';
import { User } from '../../db/models/User';
import { logger } from '../../db/config/logger';
import { i18n } from '../../config/i18n';
import { updateUser } from './provider';

// Create
export const createUser = {
  type: UserType,
  args: {
    username: { type: new GraphQLNonNull(GraphQLString) },
    email: { type: new GraphQLNonNull(GraphQLString) },
    password: { type: new GraphQLNonNull(GraphQLString) },
    confirmPassword: { type: new GraphQLNonNull(GraphQLString) },
  },
  resolve: async (parent, args) => User.createUser(args),
};

// Update
export const updateUserName = updateUser('username');

export const updateUserEmail = updateUser('email');

export const updateUserBio = updateUser('bio');

export const updateUserImage = updateUser('image');

export const updateUserGender = updateUser('gender');

export const updateUserPhone = updateUser('phone');

export const updateUserBirthDay = updateUser('birthday');

// Delete
export const deleteUser = {
  type: UserType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) },
  },
  resolve: (parent, args) => User.findByIdAndRemove(args.id),
};

export const deleteManyUser = {
  type: UserType,
  resolve: () => User.deleteMany({}, () => {
    logger.info(i18n('message.success.delete'));
  }),
};

// Validate
export const validateUser = {
  type: UserType,
  args: {
    email: { type: new GraphQLNonNull(GraphQLString) },
    password: { type: new GraphQLNonNull(GraphQLString) },
  },
  resolve: (parent, args) => User.authenticate(args.email, args.password),
};
