// @flow
import React from 'react';
import { KeyboardAvoidingView, ImageBackground, Platform } from 'react-native';

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
  const dataAnimation = isSignIn ? inputSignInData : inputSignUpData;

  return (
    <ImageBackground source={require('../../styles/img/SignUpBackground.png')} style={commonStyle.backgroundImg} resizeMode="cover">
      <KeyboardAvoidingView
        style={commonStyle.styleContainer}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        <SignForm {...{ t, setIsSignIn, isSignIn }} dataAnimation={dataAnimation['placeholder']} />
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};
