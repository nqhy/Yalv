// @flow
import React from 'react';

import { PostCategoryList } from './PostCategoryList';
import { PostList } from './PostList';

type Props = {
  categoriesData: Array,
  postsData: Array,
  loadingCategory: Boolean,
  loadingPost: Boolean,
}

export const HomeScreenComponent = (props: Props) => {
  const { categoriesData, loadingCategory, postsData, loadingPost } = props;
  return (
    <>
      <PostCategoryList {...{ categoriesData, loadingCategory }} />
      <PostList {...{ postsData, loadingPost }} />
    </>
  );
};
