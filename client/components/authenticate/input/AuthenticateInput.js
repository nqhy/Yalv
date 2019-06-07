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
  isLast: Boolean,
  secureTextEntry: Boolean,
  editable: Boolean,
  autoCapitalize: String,
  keyboardType: String,
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
    isLast = false,
    secureTextEntry,
    editable,
    autoCapitalize,
    keyboardType,
  } = props;

  let additionStyle = {};
  if (isFirst) additionStyle = styleInput.firstInput;
  if (isLast) additionStyle = styleInput.lastInput;

  return (
    <CommonInputFormik
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
      value={values[type]}
      handleBlur={handleBlur}
      handleChange={handleChange}
      secureTextEntry={secureTextEntry}
      editable={editable}
      autoCapitalize={autoCapitalize}
      keyboardType={keyboardType}
    />
  );
};
