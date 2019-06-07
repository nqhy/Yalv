// @flow
import React from 'react';
import { KeyboardAvoidingView, ImageBackground, Animated, Platform } from 'react-native';

import { commonStyle } from './styles';
import { SignForm } from './signForm';
import { inputSignInData, inputSignUpData } from '../../constants/data/authenticate';

type Props = {
  t: Function,
  isSignIn: Boolean,
  setIsSignIn: Function,
}

export const AuthenticateComponent = (props: Props) => {
  const { t, isSignIn, setIsSignIn } = props;

  const data = isSignIn ? inputSignInData : inputSignUpData;
  const animatedInputValue = [];

  data.map(value => {
    animatedInputValue[value['namePlaceholder']] = new Animated.Value(0);
    return true;
  });

  return (
    <ImageBackground source={require('../../styles/img/SignUpBackground.png')} style={commonStyle.backgroundImg} resizeMode="cover">
      <KeyboardAvoidingView
        style={commonStyle.styleContainer}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        <SignForm {...{ t, setIsSignIn, animatedInputValue, isSignIn, data }} />
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};
