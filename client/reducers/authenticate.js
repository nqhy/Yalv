import { handleActions } from 'redux-actions';
import jwtDecode from 'jwt-decode';

import { authenticate } from '../actions/authenticateActions';

const initialState = {
  username: null,
  email: null,
  bio: null,
  image: null,
  gender: null,
  phone: null,
};

export default handleActions({
  [authenticate]: (state, { payload: { token } }) => {
    const {
      username = null,
      email = null,
      bio = null,
      image = null,
      gender = null,
      phone = null,
    } = jwtDecode(token);
    return {
      ...state,
      username,
      email,
      bio,
      image,
      gender,
      phone,
    };
  },
}, initialState);
