// @flow
import React, { useEffect } from 'react';
import { Animated, Easing } from 'react-native';

import { withAuthenticateForm } from '../../containers/authenticate/withAuthenticateForm';
import { SignInInput, SignUpInput } from './input';
import { SignInButton, SignUpButton } from './button';

type Props = {
  t: Function,
  data: Array,
  values: Object,
  isSignIn: Boolean,
  setIsSignIn: Function,
  handleBlur: Function,
  handleChange: Function,
  data: Array,
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
    data,
    animatedInputValue,
    isSubmitting,
    errors,
    touched,
  } = props;

  useEffect(() => {
    const inputAnimations = data.map(value => Animated.timing(
      animatedInputValue[value['namePlaceholder']],
      {
        toValue: 1,
        duration: 1000,
        Easing: Easing.linear,
      }
    ));
    Animated.stagger(500, inputAnimations).start();
  }, []);

  const inputProps = {
    t,
    animatedInputValue,
    data,
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

export const SignForm = withAuthenticateForm(SignFormComponent);
