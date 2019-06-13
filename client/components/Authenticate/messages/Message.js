// @flow
import React from 'react';
import { Text, View } from 'react-native';
import { styleMessage } from '../styles';

type Props = {
  children: String,
  style: Object,
  type: String,
}

export const Message = (props: Props) => {
  const { children = '', style: { styleContainer, styleText } = {}, type = 'error' } = props;

  let styleTextBase = null;
  switch (type) {
    case 'error':
      styleTextBase = styleMessage.textError;
      break;
    default:
      break;
  }

  return (
    <View style={[styleMessage.container, styleContainer]}>
      <Text style={[styleTextBase, styleText]}>
        {children.toUpperCase()}
      </Text>
    </View>
  );
};
