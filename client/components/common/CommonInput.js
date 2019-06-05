// @flow
import React from 'react';
import { TextInput } from 'react-native';

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
      styleInput = {},
    } = {},
    selectionColor = 'pink',
    placeholderTextColor = 'pink',
    placeholder = 'Common Input ...',
  } = props;

  return (
    <>
      <TextInput
        style={[inputStyle.input, styleInput]}
        selectionColor={selectionColor}
        placeholderTextColor={placeholderTextColor}
        placeholder={placeholder}
      />
    </>
  );
};
