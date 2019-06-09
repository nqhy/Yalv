// @flow

import React from 'react';
import { Animated, Easing } from 'react-native';
import PropTypes from 'prop-types';
import { loadingStyle } from './styles';

export class LoadingSpine extends React.Component {
  componentDidMount() {
    this.animate();
  }

  animatedRotate = new Animated.Value(0);

  animate = () => {
    Animated.loop(
      Animated.timing(
        this.animatedRotate,
        {
          toValue: 1,
          duration: 600,
          easing: Easing.linear,
        }
      )
    ).start();
  };

  render() {
    const {
      isLoading = true,
      Content = () => null,
      style: { styleImage = {} } = {},
      sourceImg = '',
    } = this.props;

    const rotation = this.animatedRotate.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    });

    return (
      <>
        {
          isLoading ? (
            <Animated.Image
              source={sourceImg}
              style={[loadingStyle.image, styleImage, { transform: [{ rotate: rotation }] }]}
            />
          ) : (
            <Content />
          )
        }
      </>
    );
  }
}

LoadingSpine.propTypes = {
  isLoading: PropTypes.bool,
  Content: PropTypes.node,
  style: PropTypes.object,
  sourceImg: PropTypes.number,
};
