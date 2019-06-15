// @flow
import React from 'react';
import { compose } from 'react-apollo';

import { SignInInput, SignUpInput } from './input';
import { SignInButton, SignUpButton } from './button';
import { withAnimatedInput } from '../Animated';
import { withConnectRedux, withConnectFormik } from '../../containers/Authenticate/withHandlerAuthenticate';
import { withGraphQlAuthenticate } from '../../containers/Authenticate/withGraphQlAuthenticate';
import { BoxMessage } from './messages';

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
  toastValue: Object,
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
  const { apiError = null } = errors;
  const { apiSuccess = null } = values;
  const buttonProps = {
    t, handleSubmit,
  };

  const displayBoxMessage = () => {
    if (apiError !== null) return (<BoxMessage>{apiError}</BoxMessage>);
    if (apiSuccess !== null) return (<BoxMessage type="success">{apiSuccess}</BoxMessage>);
    return null;
  };

  const displayHiddenBox = () => {
    if (apiError === null && apiSuccess === null) return <BoxMessage type="hidden" />;
    return null;
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
      {
        displayBoxMessage()
      }
      {
        displayHiddenBox()
      }
    </>
  );
};

export const SignForm = compose(
  withAnimatedInput,
  withGraphQlAuthenticate,
  withConnectRedux,
  withConnectFormik
)(SignFormComponent);
