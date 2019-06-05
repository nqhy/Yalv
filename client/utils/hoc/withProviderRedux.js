// @flow
import React from 'react';
import { Provider } from 'react-redux';

import { store } from '../../store';

export const withProviderRedux = (Component: Node) => (props) => (
  <Provider store={store}>
    <Component {...props} />
  </Provider>
);
