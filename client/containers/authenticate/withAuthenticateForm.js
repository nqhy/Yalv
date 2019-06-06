// @flow
import React from 'react';
import { withFormik } from 'formik';

import { defaultValuesSignIn, defaultValuesSignUp } from '../../constants/formik';
import { signUpSchema, signInSchema } from '../../constants/validation/authenticate';

type Props = {
  isSignIn: Boolean,
  t: Function,
}

export const withAuthenticateForm =  (Component: Node) => (props: Props) => {
  const { isSignIn, t } = props;

  const RenderedComponent = withFormik({
    mapPropsToValues: () => (isSignIn ? defaultValuesSignIn : defaultValuesSignUp),
    validationSchema: isSignIn ? signInSchema({ t }) : signUpSchema({ t }),
  })(Component);

  return <RenderedComponent {...props} />;
};
