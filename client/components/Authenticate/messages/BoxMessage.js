// @flow
import React, { useEffect } from 'react';
import { Text, Animated, Easing } from 'react-native';

import { styleMessage } from '../styles';
import { withFadeAnimation } from '../../Animated/withFadeAnimation';

type Props = {
  children: String,
  style: Object,
  type: String,
  animation: Object,
}

export const BoxMessage = withFadeAnimation()((props: Props) => {
  const {
    children = '',
    style: { styleContainer, styleText } = {},
    type = 'error',
    animation: {
      type: typeAnimation,
      value: valueAnimation,
    },
  } = props;
  let styleTextBase = null;
  let styleViewBase = null;
  switch (type) {
    case 'error':
      styleTextBase = styleMessage.TextError;
      styleViewBase = styleMessage.BoxError;
      break;
    case 'hidden':
      styleViewBase = styleMessage.hiddenBox;
      break;
    case 'success':
      styleViewBase = styleMessage.BoxSuccess;
      styleTextBase = styleMessage.TextSuccess;
      break;
    default:
      break;
  }

  useEffect(() => {
    const setVisible = () => setTimeout(() => {
      Animated.timing(
        valueAnimation,
        {
          toValue: 0,
          duration: 1000,
          easing: Easing.cubic,
        }
      ).start();
    }, 3000);
    setVisible();
    return () => {
      clearTimeout(setVisible);
    };
  }, []);

  return (
    <Animated.View
      style={[styleViewBase, styleContainer, { [typeAnimation]: valueAnimation }]}
    >
      <Text style={[styleTextBase, styleText]}>
        {children.toUpperCase()}
      </Text>
    </Animated.View>
  );
});
