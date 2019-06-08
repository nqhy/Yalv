// @flow
import React from 'react';
import { compose } from 'react-apollo';

import { withAuthenticateForm } from '../../containers/authenticate/withAuthenticateForm';
import { SignInInput, SignUpInput } from './input';
import { SignInButton, SignUpButton } from './button';
import { withAnimatedInput } from '../Animated';

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
  };

  const buttonProps = {
    t, setIsSignIn,
  };

  return (
    <>
      {isSignIn ? (
        <>
          <SignInInput {...inputProps} />
          <SignInButton {...buttonProps} />
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
  withAuthenticateForm
)(SignFormComponent);
