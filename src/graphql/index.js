import { GraphQLSchema, GraphQLObjectType } from 'graphql';

import { user, users } from './queries/User';
import {
  createUser,
  validateUser,
  updateUserName,
  updateUserEmail,
  updateUserBio,
  updateUserImage,
  updateUserGender,
  updateUserPhone,
  updateUserBirthDay,
  deleteUser,
  deleteManyUser } from './mutations/User';

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user,
    users,
  },
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    createUser,
    updateUserName,
    updateUserEmail,
    updateUserBio,
    updateUserImage,
    updateUserGender,
    updateUserPhone,
    updateUserBirthDay,
    deleteUser,
    deleteManyUser,
    validateUser,
  },
});

export default new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
