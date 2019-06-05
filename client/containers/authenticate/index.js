// @flow
import React, { useState } from 'react';
import { graphql, compose } from 'react-apollo';
import { withTranslation } from 'react-i18next';
import { withChangeLanguage } from '../../utils/hoc';

import { AuthenticateComponent } from '../../components/authenticate';
import { UserMutation } from '../../graphql/mutations/user';

AuthenticateComponent.navigationOptions = {
  header: null,
};

const withHandleAuthenticate = (Component: Node) => (props) => {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <Component {...props} {...{ isSignIn, setIsSignIn }} />
  );
};

export default compose(
  withTranslation('authenticate'),
  graphql(UserMutation.createUser),
  withChangeLanguage,
  withHandleAuthenticate,
)(AuthenticateComponent);
