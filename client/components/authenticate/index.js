// @flow
import React from 'react';
import { KeyboardAvoidingView, ImageBackground } from 'react-native';

import { SignUpComponent } from './signup';
import { styleAuthenticate } from './styleAuthenticate';
import { SignInComponent } from './signin';
import { CommonButton, BackButton } from '../common';

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
        { isSignIn ? (
          <SignInComponent {...{ t, styleAuthenticate, setIsSignIn }} />
        ) : (
          <>
            <SignUpComponent {...{ t, styleAuthenticate, setIsSignIn }} />
            <BackButton handlePress={() => setIsSignIn(true)} />
          </>
        )
        }
        <CommonButton style={{ styleButton: styleAuthenticate.buttonSignUp, styleText: styleAuthenticate.buttonText }} handlePress={() => setIsSignIn(false)}>
          {t('sign up')}
        </CommonButton>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};
