// @flow
import React from 'react';
import { Animated, TouchableOpacity } from 'react-native';

import { backButtonStyle } from '../../styles/common';
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
    <TouchableOpacity style={[styleButton, backButtonStyle.button]} onPress={() => handlePress()}>
      <Animated.Text style={[styleText, backButtonStyle.text, { [type]: value }]}>
        X
      </Animated.Text>
    </TouchableOpacity>
  );
};

export const BackButton = withFadeAnimation()(BackButtonComponent);
