// @flow
import React, { useEffect } from 'react';
import { Animated, Easing } from 'react-native';

type Props = {
  dataAnimation: Array,
}

export const withAnimatedInput = (Component: Node) => (props: Props) => {
  const { dataAnimation } = props;
  const animatedInputValue = {};

  dataAnimation.map(value => {
    animatedInputValue[value] = new Animated.Value(0);
    return true;
  });

  useEffect(() => {
    const inputAnimations = dataAnimation.map(value => Animated.timing(
      animatedInputValue[value],
      {
        toValue: 1,
        duration: 1000,
        Easing: Easing.linear,
      }
    ));
    Animated.stagger(500, inputAnimations).start();
  }, [dataAnimation]);

  return (
    <Component {...props} {...{ animatedInputValue }} />
  );
};
