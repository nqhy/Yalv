// @flow
import React from 'react';
import { withFormik } from 'formik';

import { defaultValuesSignIn, defaultValuesSignUp } from '../../constants/formik';
import { signUpSchema, signInSchema } from '../../constants/validation/authenticate';

type Props = {
  isSignIn: Boolean,
  t: Function,
  createUser: Function,
  validateUser: Function,
}

export const withFormikAuthenticate =  (Component: Node) => (props: Props) => {
  const { isSignIn, t, createUser, validateUser } = props;

  const handleSubmitSignUp = (values) => {
    const { username, email, password } = values;
    createUser({
      variables: {
        username,
        email,
        password,
      },
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

  return <RenderedComponent {...props} />;
};
