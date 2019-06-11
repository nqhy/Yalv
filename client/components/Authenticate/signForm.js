// @flow
import React from 'react';
import { compose } from 'react-apollo';

import { SignInInput, SignUpInput } from './input';
import { SignInButton, SignUpButton } from './button';
import { withAnimatedInput } from '../Animated';
import { withFormikAuthenticate } from '../../containers/Authenticate/withFormikAuthenticate';
import { withGraphQlConnection } from '../../containers/Authenticate/withGraphQlConnection';

type Props = {
  t: Function,
  data: Array,
  values: Object,
  isSignIn: Boolean,
  setIsSignIn: Function,
  handleBlur: Function,
  handleChange: Function,
  animatedInputValue: Array,
  isSubmitting: Boolean,
  errors: Object,
  touched: Object,
  handleSubmit: Function,
}

const SignFormComponent =  (props: Props) => {
  const {
    t,
    values,
    isSignIn,
    setIsSignIn,
    handleBlur,
    handleChange,
    animatedInputValue,
    isSubmitting,
    errors,
    touched,
    handleSubmit,
  } = props;

  const inputProps = {
    t,
    animatedInputValue,
    handleBlur,
    handleChange,
    values,
    isSubmitting,
    errors,
    touched,
    handleSubmit,
  };

  const buttonProps = {
    t, handleSubmit,
  };

  return (
    <>
      {isSignIn ? (
        <>
          <SignInInput {...inputProps} />
          <SignInButton {...{ ...buttonProps, setIsSignIn }} />
        </>
      )
        : (
          <>
            <SignUpInput {...inputProps} />
            <SignUpButton {...buttonProps} />
          </>
        ) }
    </>
  );
};

export const SignForm = compose(
  withAnimatedInput,
  withGraphQlConnection,
  withFormikAuthenticate,
)(SignFormComponent);
