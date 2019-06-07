// @flow
import React from 'react';

import { inputStyle } from '../../styles/common';
import { AnimatedTextInput } from '../Animated';
import { ErrorMessage } from '../authenticate/messages';

type Props = {
  style: Object,
  selectionColor: String,
  placeholderTextColor: String,
  placeholder: String,
  animation: Object,
  handleBlur: Function,
  handleChange: Function,
  secureTextEntry: Boolean,
  editable: Boolean,
  autoCapitalize: String,
  keyboardType: String,
  valueFormik: String,
  type: String,
  touched: Object,
  errors: Object,
}

export const CommonInputFormik = (props: Props) => {
  const {
    style: {
      styleInput = {},
    } = {},
    selectionColor = 'pink',
    placeholderTextColor = 'pink',
    placeholder = 'Common Input ...',
    animation: {
      typeAnimation = 'opacity',
      valueAnimation = 1,
    },
    handleBlur = () => null,
    handleChange = () => null,
    secureTextEntry = false,
    editable = true,
    autoCapitalize = 'none',
    keyboardType = 'default',
    valueFormik = '',
    type = '',
    touched = {},
    errors = {},
  } = props;

  return (
    <>
      <AnimatedTextInput
        style={[inputStyle.input, styleInput, { [typeAnimation]: valueAnimation }]}
        selectionColor={selectionColor}
        placeholderTextColor={placeholderTextColor}
        placeholder={placeholder}
        onChangeText={handleChange}
        onBlur={handleBlur}
        value={valueFormik}
        secureTextEntry={secureTextEntry}
        editable={editable}
        autoCapitalize={autoCapitalize}
        keyboardType={keyboardType}
      />
      {touched[type] && errors[type] ? (
        <ErrorMessage>{errors[type]}</ErrorMessage>
      ) : <ErrorMessage />
      }
    </>
  );
};
