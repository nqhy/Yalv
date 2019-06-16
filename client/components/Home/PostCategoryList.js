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

  const displayPostCategoryLoading = () => {
    if (loading) {
      return (
        <Body style={loadingSpineStyle.body}>
          <LoadingSpine sourceImg={LoadingSpineCategory} />
        </Body>
      );
    }
    return null;
  };

  const displayPostCategoryData = () => {
    if (!loading) {
      return categoryData.map((value, index) => {
        const { name, style, image } = value;
        return (
          <PostCategory
            key={index}
            index={index}
            {...{ name, style }}
            imageUri={image}
          />
        );
      });
    }
    return null;
  };

  return (
    <>
      <ScrollView horizontal={true} style={PostCategoryListStyle.scrollHeader}>
        {displayPostCategoryData()}
      </ScrollView>
      <ScrollView style={PostCategoryListStyle.scroll}>
        {displayPostCategoryLoading()}
      </ScrollView>
    </>
  );
};
