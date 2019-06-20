// @flow
import React from 'react';
import { Animated, TouchableOpacity } from 'react-native';

import { backButtonStyle } from './styles';
import { withFadeAnimation } from '../Animated/withFadeAnimation';

type Props = {
  handlePress: Function,
  style: Object,
  animation: Object,
  children: String,
}

const BackButtonComponent = (props: Props) => {
  const {
    handlePress,
    style: {
      styleButton = {},
      styleText = {},
    } = {},
    animation: {
      type = 'opacity',
      value = 1,
    },
    children,
  } = props;

  return (
    <TouchableOpacity style={[backButtonStyle.button, styleButton]} onPress={() => handlePress()}>
      <Animated.Text style={[backButtonStyle.text, styleText, { [type]: value }]}>
        {children}
      </Animated.Text>
    </TouchableOpacity>
  );
};

export const BackButton = withFadeAnimation()(BackButtonComponent);
