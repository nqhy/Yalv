// @flow
import React from 'react';

import { CommonInput, CommonButton } from '../common';

export const SignInComponent = (props: Props) => {
  const { t, styleAuthenticate } = props;
  return (
    <>
      <CommonInput
        style={{ styleInput: { ...styleAuthenticate.input, ...styleAuthenticate.firstInput } }}
        selectionColor={styleAuthenticate.selectionColor}
        placeholderTextColor={styleAuthenticate.placeholderTextColor}
        placeholder={t('email')}
      />
      <CommonInput
        style={{ styleInput: { ...styleAuthenticate.input, ...styleAuthenticate.lastInput } }}
        selectionColor={styleAuthenticate.selectionColor}
        placeholderTextColor={styleAuthenticate.placeholderTextColor}
        placeholder={t('password')}
      />
      <CommonButton style={{ styleButton: styleAuthenticate.buttonSignIn, styleText: styleAuthenticate.buttonText }}>
        {t('sign in')}
      </CommonButton>
    </>
  );
};
