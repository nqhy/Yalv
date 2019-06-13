// @flow
import React from 'react';
import { ScrollView } from 'react-native';
import { Body } from 'native-base';

import { PostCategory } from './PostCategory';
import { PostCategoryListStyle, loadingSpineStyle } from './styles';
import { LoadingSpine } from '../common';
import { LoadingSpineCategory } from '../../styles/img';

type Props = {
  categoryData: Array,
  loading: Boolean,
}

export const PostCategoryList = (props: Props) => {
  const { categoryData, loading = true } = props;

  const displayPostCategory = () => {
    if (loading) {
      return (
        <Body style={loadingSpineStyle.body}>
          <LoadingSpine sourceImg={LoadingSpineCategory} />
        </Body>
      );
    }
    return categoryData.map((value, index) => {
      const { name, style, image } = value;
      return (
        <PostCategory
          key={index}
          {...{ name, style }}
          imageUri={image}
        />
      );
    }
    );
  };

  return (
    <ScrollView style={PostCategoryListStyle.scroll}>
      {displayPostCategory()}
    </ScrollView>
  );
};
