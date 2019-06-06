// @flow
import React, { useEffect } from 'react';
import { Animated, Easing } from 'react-native';

export const withFadeAnimation = (duration = 1000, easingStyle = Easing.cubic) => (Component: Node) => (props: Props) => {
  const animatedFade = new Animated.Value(0);

  const animate = () => {
    Animated.timing(
      animatedFade,
      {
        toValue: 1,
        duration,
        easing: easingStyle,
      }
    ).start();
  };

  useEffect(() => {
    animate();
  }, []);

  return (
    <Component {...props} animation={{ type: 'opacity', value: animatedFade }} />
  );
};
