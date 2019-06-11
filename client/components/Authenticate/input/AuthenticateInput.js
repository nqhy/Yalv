// @flow
import React from 'react';

import { CommonInputFormik } from '../../common';
import { styleInput } from '../styles';

type Props = {
  animatedInputValue: Object,
  handleBlur: Function,
  handleChange: Function,
  type: String,
  values: Object,
  t: Function,
  isFirst: Boolean,
  secureTextEntry: Boolean,
  editable: Boolean,
  autoCapitalize: String,
  keyboardType: String,
  errors: Object,
  touched: Object,
  returnKeyType: String,
}

export const AunthenticateInput = (props: Props) => {
  const {
    animatedInputValue,
    handleBlur = () => null,
    handleChange = () => null,
    type,
    values = {},
    t,
    isFirst = false,
    secureTextEntry,
    editable,
    autoCapitalize,
    keyboardType,
    errors,
    touched,
    returnKeyType,
  } = props;

  let additionStyle = {};
  if (isFirst) additionStyle = styleInput.firstInput;

  return (
    <CommonInputFormik
      type={type}
      style={{
        styleInput: {
          ...styleInput.input,
          ...additionStyle,
        },
      }}
      selectionColor={styleInput.selectionColor}
      placeholderTextColor={styleInput.placeholderTextColor}
      placeholder={t(type)}
      animation={{
        typeAnimation: 'opacity',
        valueAnimation: animatedInputValue[type],
      }}
      valueFormik={values[type]}
      handleBlur={handleBlur(type)}
      handleChange={handleChange(type)}
      secureTextEntry={secureTextEntry}
      editable={editable}
      autoCapitalize={autoCapitalize}
      keyboardType={keyboardType}
      errors={errors}
      touched={touched}
      returnKeyType={returnKeyType}
    />
  );
};
