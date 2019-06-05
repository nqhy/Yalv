// @flow
import React, { useEffect } from 'react';
import { Animated, Easing, TouchableOpacity } from 'react-native';
import { backButtonStyle } from '../../styles/common';

type Props = {
  handlePress: Function,
}

export const BackButton = (props: Props) => {
  const { handlePress } = props;
  const animatedFade = new Animated.Value(0);

  const animate = () => {
    Animated.timing(
      animatedFade,
      {
        toValue: 1,
        duration: 1000,
        easing: Easing.cubic,
      }
    ).start();
  };

  useEffect(() => {
    animate();
  }, []);

  return (
    <TouchableOpacity style={backButtonStyle.button} onPress={() => handlePress()}>
      <Animated.Text style={[backButtonStyle.text, { opacity: animatedFade }]}>
        X
      </Animated.Text>
    </TouchableOpacity>
  );
};
