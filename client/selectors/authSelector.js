import { createSelector } from 'reselect';

const authSelector = (state) => ({ auth: state.auth });

export const userSelector = createSelector(authSelector, (selector) => ({
  user: selector.auth.user,
}));
