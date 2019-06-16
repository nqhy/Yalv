// @flow
import React from 'react';
import { TouchableOpacity } from 'react-native';
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
        <Text style={PostCategoryStyle.text}>{name.toUpperCase()}</Text>
      </TouchableOpacity>
    </>
  );
};
