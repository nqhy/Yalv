// @flow
import React from 'react';
import { ScrollView } from 'react-native';

import { PostCategory } from './PostCategory';
import { PostCategoryListStyle } from './styles';

type Props = {
  categoriesData: Array,
  loadingCategory: Boolean,
}

export const PostCategoryList = (props: Props) => {
  const { categoriesData = [], loadingCategory } = props;

  const displayPostCategoryData = () => {
    if (!loadingCategory) {
      return categoriesData.map((value, index) => {
        const { name } = value;
        return (
          <PostCategory
            key={index}
            index={index}
            {...{ name }}
          />
        );
      });
    }
    return null;
  };

  return (
    <>
      <ScrollView horizontal={true} style={PostCategoryListStyle.scroll} showsHorizontalScrollIndicator={false}>
        {displayPostCategoryData()}
      </ScrollView>
    </>
  );
};
