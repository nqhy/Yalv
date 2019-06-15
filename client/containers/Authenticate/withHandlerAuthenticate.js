// @flow
import React from 'react';
import { connect } from 'react-redux';
import { withFormik } from 'formik';

import { defaultValuesSignIn, defaultValuesSignUp } from '../../constants/formik';
import { signUpSchema, signInSchema } from '../../constants/validation/authenticate';
import { authenticate } from '../../actions/authenticateActions';

type Props = {
  isSignIn: Boolean,
  t: Function,
  createUser: Function,
  validateUser: Function,
  setIsSignIn: Function,
  authenticate: Function,
  navigation: Object,
}

export const withConnectRedux = (Component: Node) => connect(null, { authenticate })((props: Props) => <Component {...props} />);

export const withConnectFormik = (Component: Node) => (props: Props) => {
  const {
    isSignIn,
    t,
    createUser,
    validateUser,
    setIsSignIn,
    authenticate: AuthenticateUser = () => null,
    navigation,
  } = props;

  const handleSubmitSignUp = (values, setFieldError, setFieldValue) => {
    const { username, email, password } = values;
    createUser({
      variables: {
        username,
        email,
        password,
      },
    }).then(res => {
      const { data: { createUser: { error } } } = res;
      if (error) return setFieldError('apiError', error);
      setFieldValue('apiSuccess', t('success sign up'));
      return setTimeout(() => {
        setIsSignIn(true);
      }, 4000);
    });
  };

  const handleSubmitSignIn = (values, setFieldError, setFieldValue) => {
    const { email, password } = values;
    validateUser({
      variables: {
        email,
        password,
      },
    }).then(res => {
      const { data: { validateUser: { error, token } } } = res;
      if (error) return setFieldError('apiError', t(error));
      setFieldValue('apiSuccess', t('success sign up'));
      AuthenticateUser(token);
      return setTimeout(() => {
        navigation.navigate('DrawerNavigation');
      }, 4000);
    });
  };

  const RenderedComponent = withFormik({
    enableReinitialize: false,
    mapPropsToValues: () => (isSignIn ? defaultValuesSignIn : defaultValuesSignUp),
    validationSchema: isSignIn ? signInSchema({ t }) : signUpSchema({ t }),
    handleSubmit: (values, { setSubmitting, setFieldError, setFieldValue }) => {
      if (isSignIn) handleSubmitSignIn(values, setFieldError, setFieldValue);
      else handleSubmitSignUp(values, setFieldError, setFieldValue);
      setSubmitting(true);
    },
  })(Component);

  return <RenderedComponent {...{ ...props }} />;
};
