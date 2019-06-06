// @flow
import React from 'react';

import { CommonButton, BackButton } from '../common';
import { styleAuthenticate } from './styleAuthenticate';
import { Inputs } from './input';

type Props = {
  t: Function,
  setIsSignIn: Function,
  data: Array,
}

export const SignUpComponent =  (props: Props) => {
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
          styleButton: styleAuthenticate.buttonSignUp,
          styleText: styleAuthenticate.buttonText }
        }
      >
        {t('sign up')}
      </CommonButton>
      <BackButton handlePress={() => setIsSignIn(true)} />
    </>
  );
};
