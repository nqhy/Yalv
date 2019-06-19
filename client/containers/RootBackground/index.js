// @flow
import React, { useEffect } from 'react';
import { AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { compose } from 'react-apollo';

import { userSelector } from '../../selectors/authSelector';
import { RootBackground } from '../../components/RootBackground';
import { authenticate } from '../../actions/authenticateActions';

type Props = {
  navigation: Object,
  user: Object,
  authenticate: Function,
}

const withHandleNavigate = (Component: Node) => (props: Props) => {
  const { navigation: { navigate }, authenticate: authenticateUser } = props;

  const handleAuth = async () => {
    try {
      const auth_token = await AsyncStorage.getItem('auth_token');
      if (auth_token) {
        authenticateUser(auth_token);
        setTimeout(() => navigate('DrawerNavigation'), 5000);
      } else {
        setTimeout(() => navigate('Authenticate'), 5000);
      }
    } catch (err) {
      return err;
    }
    return null;
  };
  useEffect(() => {
    handleAuth();
  }, []);

  return (
    <Component {...props} />
  );
};

export default compose(
  connect(userSelector, { authenticate }),
  withHandleNavigate
)(RootBackground);
