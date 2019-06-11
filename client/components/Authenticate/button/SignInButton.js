// @flow
import React from 'react';

import { CommonButton } from '../../common';
import { styleButton } from '../styles';

type Props = {
  t: Function,
  setIsSignIn: Function,
  handleSubmit: Function,
}

export const SignInButton = (props: Props) => {
  const { t, setIsSignIn, handleSubmit } = props;

  return (
    <>
      <CommonButton
        style={{
          styleButton: styleButton.buttonSignIn,
          styleText: styleButton.buttonText }}
        handlePress={handleSubmit}
      >
        {t('sign in')}
      </CommonButton>
      <CommonButton
        style={{
          styleButton: styleButton.buttonSignUp,
          styleText: styleButton.buttonText }} handlePress={() => setIsSignIn(false)}
      >
        {t('sign up')}
      </CommonButton>
    </>
  );
};
