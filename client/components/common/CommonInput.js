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
  valueFormik: String,
  handleBlur: Function,
  handleChange: Function,
  valueFormik: String,
}

export const CommonInput = (props: Props) => {
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
    valueFormik,
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
        value={valueFormik}
      />
    </>
  );
};
