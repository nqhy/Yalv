// @flow
import React from 'react';
import { Animated, TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';

import { backButtonStyle } from './styles';
import { withFadeAnimation } from '../Animated/withFadeAnimation';

type Props = {
  handlePress: Function,
  style: Object,
  animation: Object,
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
  } = props;

  return (
    <TouchableOpacity style={[backButtonStyle.button, styleButton]} onPress={() => handlePress()}>
      <Animated.Text style={{ [type]: value }}>
        <Icon name="ios-backspace" style={[backButtonStyle.text, styleText]} />
      </Animated.Text>
    </TouchableOpacity>
  );
};

export const BackButton = withFadeAnimation()(BackButtonComponent);
