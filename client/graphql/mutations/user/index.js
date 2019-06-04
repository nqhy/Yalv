import { gql } from 'apollo-boost';

import { updateUserProvider } from '../provider';

const createUser = gql`
  mutation($username: String!, $email: String!, $password: String!, $confirmPassword: !String){
    createUser(username: $username, email: $email, password: $password, confirmPassword: $confirmPassword ){
      username
      email
      token
      error
    }
  }
`;

const updateUserName = updateUserProvider('username');
const updateUserEmail = updateUserProvider('email');
const updateUserBio = updateUserProvider('bio');
const updateUserImage = updateUserProvider('image');
const updateUserGender = updateUserProvider('gender');
const updateUserPhone = updateUserProvider('phone');
const updateUserBirthDay = updateUserProvider('birthday');


export const UserMutation = {
  createUser,
  updateUserName,
  updateUserEmail,
  updateUserBio,
  updateUserImage,
  updateUserGender,
  updateUserPhone,
  updateUserBirthDay,
};
