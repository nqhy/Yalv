// @flow
import React from 'react';

import { CommonButton } from '../common';
import { styleAuthenticate } from './styleAuthenticate';
import { Inputs } from './input';

type Props = {
  t: Function,
  setIsSignIn: Function,
  data: Array,
}

export const SignInComponent =  (props: Props) => {
  const {
    t,
    setIsSignIn,
    data,
  } = props;

  return (
    <>
      <Inputs {...{ data, t }} />
      <CommonButton
        style={{
          styleButton: styleAuthenticate.buttonSignIn,
          styleText: styleAuthenticate.buttonText }}
      >
        {t('sign in')}
      </CommonButton>
      <CommonButton
        style={{
          styleButton: styleAuthenticate.buttonSignUp,
          styleText: styleAuthenticate.buttonText }} handlePress={() => setIsSignIn(false)}
      >
        {t('sign up')}
      </CommonButton>
    </>
  );
};
