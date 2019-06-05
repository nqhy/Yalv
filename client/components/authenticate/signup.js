// @flow
import React from 'react';
import { KeyboardAvoidingView, ImageBackground } from 'react-native';

import { CommonInput, CommonButton } from '../common';
import { keyboardVerticalOffset } from '../../utils/functions';

const styles = {
  backgroundImg: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  styleContainer: {
    flex: 0.7,
    marginTop: 160,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 0,
    borderBottomWidth: 2,
    borderRadius: 0,
    backgroundColor: 'transparent',
    borderColor: '#7f8fa6',
  },
  button: {
    backgroundColor: '#f5f6fa',
    borderWidth: 0.5,
  },
  buttonText: {
    color: '#353b48',
  },
  placeholderTextColor: 'white',
};

type Props = {
  t: Function,
}


export const SignUpComponent = (props: Props) => {
  const { t } = props;

  return (
    <ImageBackground source={require('../../styles/img/SignUpBackground.png')} style={styles.backgroundImg} resizeMode="cover">
      <KeyboardAvoidingView style={styles.styleContainer} behavior="position" keyboardVerticalOffset={keyboardVerticalOffset(0)}>
        <CommonInput
          style={{ styleInput: styles.input }}
          placeholderTextColor={styles.placeholderTextColor}
          placeholder={t('user name')}
        />
        <CommonInput
          style={{ styleInput: styles.input }}
          placeholderTextColor={styles.placeholderTextColor}
          placeholder={t('email')}
        />
        <CommonInput
          style={{ styleInput: styles.input }}
          placeholderTextColor={styles.placeholderTextColor}
          placeholder={t('password')}
        />
        <CommonInput
          style={{ styleInput: styles.input }}
          placeholderTextColor={styles.placeholderTextColor}
          placeholder={t('confirmation')}
        />
        <CommonButton style={{ styleButton: styles.button, styleText: styles.buttonText }}>
          {t('sign up')}
        </CommonButton>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};
