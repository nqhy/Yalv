// @flow
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { buttonStyle } from './styles';

type Props = {
  style: Object,
  children: String,
  handlePress: Function,
}

export const CommonButton = (props: Props) => {
  const {
    style: { styleText = {}, styleButton = {} } = {},
    children,
    handlePress = () => null,
  } = props;
  return (
    <>
      <TouchableOpacity style={[buttonStyle.button, styleButton]} onPress={() => handlePress()}>
        <Text style={[buttonStyle.text, styleText]}>{children}</Text>
      </TouchableOpacity>
    </>
  );
};
