// @flow
import React, { useEffect } from 'react';
import { Animated, Easing } from 'react-native';

import { SignInComponent } from './signin';
import { withAuthenticateForm } from '../../containers/authenticate/withAuthenticateForm';
import { InputSignIn, InputSignUp } from './input';
import { SignUpComponent } from './signup';

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

  return (
    <>
      {isSignIn ? (
        <>
          <InputSignIn {...{ t, animatedInputValue, data, handleBlur, handleChange, values }} />
          <SignInComponent {...{ t, setIsSignIn }} />
        </>
      )
        : (
          <>
            <InputSignUp {...{ t, animatedInputValue, data, handleBlur, handleChange, values }} />
            <SignUpComponent {...{ t, setIsSignIn }} />
          </>
        ) }
    </>
  );
};

export const SignForm = withAuthenticateForm(SignFormComponent);
