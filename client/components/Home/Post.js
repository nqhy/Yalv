// @flow
import React from 'react';
import { TouchableOpacity, ImageBackground, Text } from 'react-native';

import { PostStyle } from './styles';

type Props = {
  title: String,
  background: String,
}

export const Post = (props: Props) => {
  const {
    title,
    background,
  } = props;

  return (
    <>
      <TouchableOpacity style={[PostStyle.button]}>
        <ImageBackground
          style={PostStyle.image}
          source={{ uri: background }}
        >
          <Text style={PostStyle.text}>
            {title.toUpperCase()}
          </Text>
        </ImageBackground>
      </TouchableOpacity>
    </>
  );
};
