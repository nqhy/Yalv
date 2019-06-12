import { GraphQLNonNull, GraphQLString, GraphQLID } from 'graphql';

import { UserType } from '../../schema/UserSchema';
import { User } from '../../../db/models';
import { logger } from '../../../db/config/logger';
import { i18n } from '../../../config/i18n';
import { updateUser } from '../provider';

// Create
const createUser = {
  type: UserType,
  args: {
    username: { type: new GraphQLNonNull(GraphQLString) },
    email: { type: new GraphQLNonNull(GraphQLString) },
    password: { type: new GraphQLNonNull(GraphQLString) },
  },
  resolve: async (parent, args) => User.createUser(args),
};

// Update
const updateUserName = updateUser('username');

const updateUserEmail = updateUser('email');

const updateUserBio = updateUser('bio');

const updateUserImage = updateUser('image');

const updateUserGender = updateUser('gender');

const updateUserPhone = updateUser('phone');

const updateUserBirthDay = updateUser('birthday');

// Delete
const deleteUser = {
  type: UserType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) },
  },
  resolve: (parent, args) => User.findByIdAndRemove(args.id),
};

const deleteManyUser = {
  type: UserType,
  resolve: () => User.deleteMany({}, () => {
    logger.info(i18n('message.success.delete'));
  }),
};

// Validate
const validateUser = {
  type: UserType,
  args: {
    email: { type: new GraphQLNonNull(GraphQLString) },
    password: { type: new GraphQLNonNull(GraphQLString) },
  },
  resolve: (parent, args) => User.authenticate(args.email, args.password),
};

export const mutationUser = {
  createUser,
  updateUserName,
  updateUserEmail,
  updateUserBio,
  updateUserBirthDay,
  updateUserGender,
  updateUserImage,
  updateUserPhone,
  deleteUser,
  deleteManyUser,
  validateUser,
};
