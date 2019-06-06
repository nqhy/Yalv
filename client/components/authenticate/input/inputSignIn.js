// @flow
import React from 'react';

import { styleInput } from '../styles';
import { CommonInput } from '../../common';

type Props = {
  t: Function,
  animatedInputValue: Array,
  values: Object,
  handleBlur: Function,
  handleChange: Function
}

export const InputSignIn = (props: Props) => {
  const { t, animatedInputValue, values, handleBlur, handleChange } = props;
  return (
    <>
      <CommonInput
        style={{
          styleInput: {
            ...styleInput.input,
            ...styleInput.firstInput,
          },
        }}
        selectionColor={styleInput.selectionColor}
        placeholderTextColor={styleInput.placeholderTextColor}
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
          styleInput: {
            ...styleInput.input,
            ...styleInput.lastInput,
          },
        }}
        selectionColor={styleInput.selectionColor}
        placeholderTextColor={styleInput.placeholderTextColor}
        placeholder={t('password')}
        animation={{
          typeAnimation: 'opacity',
          valueAnimation: animatedInputValue['password'],
        }}
        valueFormik={values['password']}
        handleBlur={handleBlur('password')}
        handleChange={handleChange('password')}
      />
    </>
  );
};
