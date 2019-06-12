// @flow
import React, { useState } from 'react';
import { withFormik } from 'formik';

import { defaultValuesSignIn, defaultValuesSignUp } from '../../constants/formik';
import { signUpSchema, signInSchema } from '../../constants/validation/authenticate';

type Props = {
  isSignIn: Boolean,
  t: Function,
  createUser: Function,
  validateUser: Function,
  setIsSignIn: Function,
}

export const withFormikAuthenticate =  (Component: Node) => (props: Props) => {
  const { isSignIn, t, createUser, validateUser } = props;

  const [toastValue, setToastValue] = useState({});

  const handleSubmitSignUp = (values) => {
    const { username, email, password } = values;
    createUser({
      variables: {
        username,
        email,
        password,
      },
    }).then(res => {
      const { data: { createUser: { error } } } = res;
      if (error) return setToastValue({ message: error, type: 'error', success: false });
      return setToastValue({ message: t('success sign up'), type: 'success', success: true });
    });
  };

  const handleSubmitSignIn = (values) => {
    const { email, password } = values;
    validateUser({
      variables: {
        email,
        password,
      },
    });
  };

  const RenderedComponent = withFormik({
    enableReinitialize: false,
    mapPropsToValues: () => (isSignIn ? defaultValuesSignIn : defaultValuesSignUp),
    validationSchema: isSignIn ? signInSchema({ t }) : signUpSchema({ t }),
    handleSubmit: (values, { setSubmitting }) => {
      if (isSignIn) handleSubmitSignIn(values);
      else handleSubmitSignUp(values);
      setSubmitting(true);
    },
  })(Component);

  return <RenderedComponent {...{ ...props, toastValue }} />;
};
