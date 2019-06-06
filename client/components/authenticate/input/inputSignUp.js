// @flow
import React from 'react';

import { styleAuthenticate } from '../styles';
import { CommonInput } from '../../common';

type Props = {
  t: Function,
  animatedInputValue: Array,
  values: Object,
  handleBlur: Function,
  handleChange: Function
}

export const InputSignUp = (props: Props) => {
  const { t, animatedInputValue, values, handleBlur, handleChange } = props;
  return (
    <>
      <CommonInput
        style={{
          styleInput: {
            ...styleAuthenticate.input,
            ...styleAuthenticate.firstInput,
          },
        }}
        selectionColor={styleAuthenticate.selectionColor}
        placeholderTextColor={styleAuthenticate.placeholderTextColor}
        placeholder={t('username')}
        animation={{
          typeAnimation: 'opacity',
          valueAnimation: animatedInputValue['username'],
        }}
        valueFormik={values['username']}
        handleBlur={handleBlur('username')}
        handleChange={handleChange('username')}
      />
      <CommonInput
        style={{
          styleInput: styleAuthenticate.input,
        }}
        selectionColor={styleAuthenticate.selectionColor}
        placeholderTextColor={styleAuthenticate.placeholderTextColor}
        placeholder={t('email')}
        animation={{
          typeAnimation: 'opacity',
          valueAnimation: animatedInputValue['email'],
        }}
        valueFormik={values['email']}
        handleBlur={handleBlur('email')}
        handleChange={handleChange('email')}
      />
      <CommonInput
        style={{
          styleInput: styleAuthenticate.input,
        }}
        selectionColor={styleAuthenticate.selectionColor}
        placeholderTextColor={styleAuthenticate.placeholderTextColor}
        placeholder={t('password')}
        animation={{
          typeAnimation: 'opacity',
          valueAnimation: animatedInputValue['password'],
        }}
        valueFormik={values['password']}
        handleBlur={handleBlur('password')}
        handleChange={handleChange('password')}
      />
      <CommonInput
        style={{
          styleInput: {
            ...styleAuthenticate.input,
            ...styleAuthenticate.lastInput,
          },
        }}
        selectionColor={styleAuthenticate.selectionColor}
        placeholderTextColor={styleAuthenticate.placeholderTextColor}
        placeholder={t('confirmation')}
        animation={{
          typeAnimation: 'opacity',
          valueAnimation: animatedInputValue['confirmation'],
        }}
        valueFormik={values['confirmation']}
        handleBlur={handleBlur('confirmation')}
        handleChange={handleChange('confirmation')}
      />
    </>
  );
};
