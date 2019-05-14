import React from 'react';
import { Provider } from 'react-redux';

import Components from '../components';
import { store } from '../store';

export default class YalvApp extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Components />
      </Provider>
    )
  }
}
