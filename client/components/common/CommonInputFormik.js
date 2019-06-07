// @flow
import React from 'react';
import { TextInput, Animated } from 'react-native';

import { inputStyle } from '../../styles/common';

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
  value: String,
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
    value = '',
  } = props;

  const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

  return (
    <>
      <AnimatedTextInput
        style={[inputStyle.input, styleInput, { [typeAnimation]: valueAnimation }]}
        selectionColor={selectionColor}
        placeholderTextColor={placeholderTextColor}
        placeholder={placeholder}
        onChangeText={handleChange}
        onBlur={handleBlur}
        value={value}
        secureTextEntry={secureTextEntry}
        editable={editable}
        autoCapitalize={autoCapitalize}
        keyboardType={keyboardType}
      />
    </>
  );
};
