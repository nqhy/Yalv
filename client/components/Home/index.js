// @flow
import React from 'react';

import { PostCategoryList } from './PostCategoryList';
import { PostList } from './PostList';
import { SimpleLabel } from './SimpleLable';

type Props = {
  categoriesData: Array,
  postsData: Array,
  loadingCategory: Boolean,
  loadingPost: Boolean,
  t: Function,
  navigation: Object,
}

export const HomeScreenComponent = (props: Props) => {
  const { categoriesData, loadingCategory, postsData, loadingPost, t, navigation } = props;
  return (
    <>
      <SimpleLabel {...{ t }} />
      <PostCategoryList {...{ categoriesData, loadingCategory }} />
      <PostList {...{ postsData, loadingPost, navigation }} />
    </>
  );
};
