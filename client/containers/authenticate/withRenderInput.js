// @flow
import React, { useEffect } from 'react';
import { Animated, Easing } from 'react-native';

type Props = {
  data: Array;
}

export const withRenderInput = (Component: Node) => (props: Props) => {
  const { data } = props;

  const animatedInputValue = [];

  data.map(value => {
    animatedInputValue[value['namePlaceholder']] = new Animated.Value(0);
    return true;
  });

  useEffect(() => {
    const inputAnimations = data.map(value => Animated.timing(
      animatedInputValue[value['namePlaceholder']],
      {
        toValue: 1,
        duration: 1000,
        Easing: Easing.linear,
      }
    ));
    Animated.stagger(500, inputAnimations).start();
  }, []);

  return (
    <Component {...props} {...{ animatedInputValue }} />
  );
};
