// @flow
import React from 'react';
import { View, TextInput } from 'react-native';

import { inputStyle } from '../../styles/common';

type Props = {
  style: Object,
  selectionColor: String,
  placeholderTextColor: String,
  placeholder: String,
}

export const CommonInput = (props: Props) => {
  const {
    style: {
      styleContainer = {},
      styleInput = {},
    } = {},
    selectionColor = 'pink',
    placeholderTextColor = 'pink',
    placeholder = 'Common Input ...',
  } = props;

  return (
    <View style={[inputStyle.container, styleContainer]}>
      <TextInput
        style={[inputStyle.input, styleInput]}
        selectionColor={selectionColor}
        placeholderTextColor={placeholderTextColor}
        placeholder={placeholder}
      />
    </View>
  );
};
