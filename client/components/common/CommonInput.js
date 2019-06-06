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
      type = 'opacity',
      value = 1,
    },
  } = props;

  const AnimatedText = Animated.createAnimatedComponent(TextInput);

  return (
    <>
      <AnimatedText
        style={[inputStyle.input, styleInput, { [type]: value }]}
        selectionColor={selectionColor}
        placeholderTextColor={placeholderTextColor}
        placeholder={placeholder}
      />
    </>
  );
};
