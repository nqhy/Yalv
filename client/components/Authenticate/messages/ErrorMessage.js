// @flow
import React from 'react';
import { Text, View } from 'react-native';
import { styleMessage } from '../styles';

type Props = {
  children: String,
}

export const ErrorMessage = (props: Props) => {
  const { children = '' } = props;

  return (
    <View style={styleMessage.container}>
      <Text style={styleMessage.text}>
        {children.toUpperCase()}
      </Text>
    </View>
  );
};
