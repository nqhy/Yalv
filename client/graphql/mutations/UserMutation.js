import gql from 'graphql-tag';

import { updateUserProvider } from './provider';

const createUser = gql(`
  mutation($username: String!, $email: String!, $password: String!){
    createUser(username: $username, email: $email, password: $password){
      error
    }
  }
`);

const validateUser = gql(`
  mutation($email: String!, $password: String!){
    validateUser(email: $email, password: $password){
      token
      error
    }
  }
`);

const updateUserName = updateUserProvider('username');
const updateUserEmail = updateUserProvider('email');
const updateUserBio = updateUserProvider('bio');
const updateUserImage = updateUserProvider('image');
const updateUserGender = updateUserProvider('gender');
const updateUserPhone = updateUserProvider('phone');
const updateUserBirthDay = updateUserProvider('birthday');


export const UserMutation = {
  createUser,
  validateUser,
  updateUserName,
  updateUserEmail,
  updateUserBio,
  updateUserImage,
  updateUserGender,
  updateUserPhone,
  updateUserBirthDay,
};
