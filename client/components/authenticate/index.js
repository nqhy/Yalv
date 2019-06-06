// @flow
import React from 'react';
import { KeyboardAvoidingView, ImageBackground } from 'react-native';

import { SignUpComponent } from './signup';
import { styleAuthenticate } from './styleAuthenticate';
import { SignInComponent } from './signin';
import { inputSignInData, inputSignUpData } from '../../constants/data/authenticate';

type Props = {
  t: Function,
  isSignIn: Boolean,
  setIsSignIn: Function,
}

export const AuthenticateComponent = (props: Props) => {
  const { t, isSignIn, setIsSignIn } = props;

  return (
    <ImageBackground source={require('../../styles/img/SignUpBackground.png')} style={styleAuthenticate.backgroundImg} resizeMode="cover">
      <KeyboardAvoidingView style={styleAuthenticate.styleContainer} behavior="padding" enabled>
        { isSignIn ? <SignInComponent {...{ t, setIsSignIn }} data={inputSignInData} />
          : <SignUpComponent {...{ t, setIsSignIn }} data={inputSignUpData} />
        }
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};
