// @flow
import React from 'react';
import { TouchableOpacity, ImageBackground, Text, View } from 'react-native';

import { PostStyle } from './styles';
import { FirstAllWords } from '../../utils/function';

type Props = {
  title: String,
  background: String,
  content: String,
  index: Number,
  navigation: Object,
}

export const Post = (props: Props) => {
  const {
    title,
    background,
    content,
    index,
    navigation: {
      navigate,
    },
  } = props;

  const additionalStyle = index === 0 && PostStyle.firstButton;

  const handleNavigation = () => {
    navigate('Travel', {
      data: {
        background,
        title,
        content,
      },
    });
  };

  return (
    <>
      <TouchableOpacity style={[PostStyle.button, additionalStyle]} onPress={() => handleNavigation()}>
        <ImageBackground
          style={PostStyle.image}
          source={{ uri: background }}
          imageStyle={{ borderRadius: PostStyle.image.borderRadius }}
        >
          <View style={PostStyle.containerText}>
            <Text style={PostStyle.text}>
              {FirstAllWords(title)}
            </Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    </>
  );
};
