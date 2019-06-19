// @flow
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from 'react-apollo';

import { userSelector } from '../../selectors/authSelector';
import { RootBackground } from '../../components/RootBackground';

type Props = {
  navigation: Object,
  user: Object,
}

const withHandleNavigate = (Component: Node) => (props: Props) => {
  const { navigation: { navigate }, user: { isAuth } } = props;

  useEffect(() => {
    const navigateAuth = () => {
      setTimeout(() => (!isAuth ? navigate('Authenticate') : navigate('DrawerNavigation')), 5000);
    };
    navigateAuth();
    return () => {
      clearTimeout(navigateAuth);
    };
  }, []);

  return (
    <Component {...props} />
  );
};

export default compose(
  connect(userSelector),
  withHandleNavigate
)(RootBackground);
