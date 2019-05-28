import React from 'react';
import { Provider } from 'react-redux';

import { store } from '../store/index';

export const withProvider = (Component) => () => (
  <Provider store={store}>
    <Component />
  </Provider>
);
