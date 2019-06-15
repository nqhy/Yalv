import { createActions } from 'redux-actions';

export const {
  authenticate,
} = createActions({
  AUTHENTICATE: (token) => ({ token }),
});
