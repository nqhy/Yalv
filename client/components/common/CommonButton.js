// @flow
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { buttonStyle } from '../../styles/common';

type Props = {
  style: Object,
  children: String,
}

const CommonButton = (props: Props) => {
  const {
    style: {
      styleText = {},
      styleButton = {},
      styleContainer = {},
    } = {},
    children,
  } = props;
  return (
    <View style={[buttonStyle.container, styleContainer]}>
      <TouchableOpacity style={[buttonStyle.button, styleButton]}>
        <Text style={[buttonStyle.text, styleText]}>{children}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CommonButton;
