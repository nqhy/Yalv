// @flow
import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { Container, Body, Content, Text } from 'native-base';

import { PostCategoryStyle } from './styles';

type Props = {
  name: String,
  style: Object,
  imageUri: String,
}

export const PostCategory = (props: Props) => {
  const {
    name,
    style: { content: StyleContent, text: StyleText },
    imageUri,
  } = props;

  return (
    <Body style={PostCategoryStyle.body}>
      <TouchableOpacity>
        <Content>
          <Image source={{ uri: imageUri }} style={PostCategoryStyle.image} resizeMode="stretch" />
          <Container style={StyleContent}>
            <Text style={StyleText}>{name.toUpperCase()}</Text>
          </Container>
        </Content>
      </TouchableOpacity>
    </Body>
  );
};
