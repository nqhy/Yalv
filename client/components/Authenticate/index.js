// @flow
import React from 'react';
import { KeyboardAvoidingView, View, Platform, Text } from 'react-native';
import { LinearGradient } from 'expo';

import { commonStyle } from './styles';
import { SignForm } from './signForm';
import { inputSignInData, inputSignUpData } from '../../constants/data/authenticate';
import { BackButton } from '../common';

type Props = {
  t: Function,
  isSignIn: Boolean,
  setIsSignIn: Function,
  navigation: Object,
}

export const AuthenticateComponent = (props: Props) => {
  const { t, isSignIn, setIsSignIn, navigation } = props;
  const dataAnimation = isSignIn ? inputSignInData : inputSignUpData;

  return (
    <LinearGradient colors={['#000000', '#000000']} style={commonStyle.backgroundImg}>
      <KeyboardAvoidingView
        style={commonStyle.styleContainer}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        <View style={commonStyle.containerLogo}>
          <Text style={commonStyle.title}>{t('title')}</Text>
          <View style={commonStyle.line} />
          <Text style={commonStyle.subTitle}>{t('sub title')}</Text>
        </View>
        <SignForm {...{ t, setIsSignIn, isSignIn, navigation }} dataAnimation={dataAnimation['placeholder']} />
        {!isSignIn && <BackButton handlePress={() => setIsSignIn(true)} />}
      </KeyboardAvoidingView>
    </LinearGradient>
  );
};
