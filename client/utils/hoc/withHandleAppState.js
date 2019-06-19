// @flow
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from 'react-apollo';
import { AppState, AsyncStorage } from 'react-native';

import { userSelector } from '../../selectors/authSelector';

type Props = {
  user: Object,
}

const HandleAppState = (Component: Node) => (props: Props) => {
  const { user } = props;
  const handleChange = () => {
    if (AppState.currentState.match(/inactive|background/)) {
      console.log(user);
    } else {
      AsyncStorage.setItem('user_auth');
    }
  };

  useEffect(() => {
    AppState.addEventListener('change', handleChange);
    return () => {
      AppState.addEventListener('change', handleChange);
    };
  }, []);

  return (
    <Component {...props} />
  );
};

export const withHandleAppState = (Component: Node) => (props) => {
  const NewComponent = compose(
    connect(userSelector),
    HandleAppState,
  )(Component);

  return (
    <NewComponent {...props} />
  );
};
