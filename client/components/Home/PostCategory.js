// @flow
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Text } from 'native-base';

import { PostCategoryStyle } from './styles';

type Props = {
  name: String,
  index: Number,
}

export const PostCategory = (props: Props) => {
  const {
    name,
    index,
  } = props;

  const additionStyle = index === 0 ? PostCategoryStyle.firstButton : null;
  return (
    <>
      <TouchableOpacity style={[PostCategoryStyle.button, additionStyle]}>
        <View style={PostCategoryStyle.containerText}>
          <Text style={PostCategoryStyle.text}>{name.toUpperCase()}</Text>
        </View>
      </TouchableOpacity>
    </>
  );
};
