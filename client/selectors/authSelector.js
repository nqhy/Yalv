import { createSelector } from 'reselect';

const authSelector = (state) => ({ user: state.auth });

export const userSelector = createSelector(authSelector, (auth) => ({
  auth,
}));
