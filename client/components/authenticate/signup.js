// @flow
import React from 'react';

import { CommonInput } from '../common';

export const SignUpComponent = (props: Props) => {
  const { t, styleAuthenticate } = props;

  return (
    <>
      <CommonInput
        style={{ styleInput: { ...styleAuthenticate.input, ...styleAuthenticate.firstInput } }}
        selectionColor={styleAuthenticate.selectionColor}
        placeholderTextColor={styleAuthenticate.placeholderTextColor}
        placeholder={t('user name')}
      />
      <CommonInput
        style={{ styleInput: styleAuthenticate.input }}
        selectionColor={styleAuthenticate.selectionColor}
        placeholderTextColor={styleAuthenticate.placeholderTextColor}
        placeholder={t('email')}
      />
      <CommonInput
        style={{ styleInput: styleAuthenticate.input }}
        selectionColor={styleAuthenticate.selectionColor}
        placeholderTextColor={styleAuthenticate.placeholderTextColor}
        placeholder={t('password')}
      />
      <CommonInput
        style={{ styleInput: { ...styleAuthenticate.input, ...styleAuthenticate.lastInput } }}
        selectionColor={styleAuthenticate.selectionColor}
        placeholderTextColor={styleAuthenticate.placeholderTextColor}
        placeholder={t('confirmation')}
      />
    </>
  );
};
